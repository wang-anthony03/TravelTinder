const functions = require("firebase-functions");
const { default: OpenAI } = require("openai");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});


const WHAT_PEOPLE_WANT_TO_DO = [
  "I feel like going to the beach",
  "I've been wanting to go paragliding",
  "I want to go out at night and see the stars",
];

const createPrompt = (
  names,
  suggestions,
  tripLocation,
  startDate,
  endDate
) => {
  let prompt = `A group of friends is deciding on how to spend their time for an upcoming trip to ${tripLocation} from ${startDate} to ${endDate}. How exciting!
We asked the members of the group, "What do you want to do during this trip?", and here are their responses:
`;
  for (let i = 0; i < suggestions.length; i++) {
    prompt += `The user ${names[i]} said: ${suggestions[i]}\n`;
  }
  prompt +=
    "\nNow, it is your turn. Please provide a large set of ideas. For each idea, write a concise blurb that describes the activity or destination. Then, write why you suggested it: For example, 'I suggested this because people wanted to go snorkeling, and this is a place that has received great ratings.' Alternatively, you may make additional suggestions, whether based on the given location and time of year, or simply common vacation activities, even if they were not explicitly listed in the friend group's responses. Go!";

  return prompt;
};

exports.generateIdeas = functions.https.onRequest(async (request, response) => {
  response.set('Access-Control-Allow-Origin', '*');

  if (request.method === 'OPTIONS') {
    // Send response to OPTIONS requests
    response.set('Access-Control-Allow-Methods', 'GET');
    response.set('Access-Control-Allow-Headers', 'Content-Type');
    response.set('Access-Control-Max-Age', '3600');
    response.status(204).send('');
  }

  functions.logger.info("body:" + JSON.stringify(request.body), { structuredData: true });
  const { names, suggestions, tripLocation, startDate, endDate } = request.body;
  const prompt = createPrompt(
    names,
    suggestions,
    tripLocation,
    startDate,
    endDate
  );
  const openai = new OpenAI({ apiKey: functions.config().OPENAI_API_KEY });
  openai.chat.completions.create({
    model: "gpt-4-turbo-preview",
    messages: [
      {
        role: "system",
        content: "You are an excellent vacation planner."
      },
      {
        role: "user",
        content: prompt,
      }
    ],
    functions: [
      {
        // This defines what format the OpenAI responses can take.
        name: "generate_ideas",
        parameters: {
          "type": "object",
          "properties": {
            "suggestions": {
              "type": "array",
              "items": {
                "type": "object",
                "required": ["suggestion", "reasoning"],
                "properties": {
                  "suggestion": {
                    "type": "string"
                  },
                  "reasoning": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "required": ["suggestions"]
        }
      }
    ],
    // Force the generate_ideas OpenAI function to be called.
    function_call: {
      name: "generate_ideas"
    }
  }).then((result) => {
    const functionCall = result.choices[0].message.function_call;

    if (!functionCall) {
      response.status(500).send("Failed to generate ideas");
      return;
    }

    const chatgptGeneratedSuggestions = JSON.parse(functionCall.arguments);

    response.send(JSON.stringify(chatgptGeneratedSuggestions.suggestions));
  })
});
