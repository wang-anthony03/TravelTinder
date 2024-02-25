import React from "react";

// Helper functions
function formatDate(date) {
  var year = date.getFullYear();
  var month = padZero(date.getMonth() + 1);
  var day = padZero(date.getDate());
  var hours = padZero(date.getHours());
  var minutes = padZero(date.getMinutes());
  var seconds = padZero(date.getSeconds());
  return year + month + day + "T" + hours + minutes + seconds;
}

// Function to add leading zero if needed
function padZero(number) {
  return (number < 10 ? "0" : "") + number;
}

const event_data = [
  {
    summary: "Go to the movies",
    description: "Go see spider man",
    location: "AMC",
    start: new Date(2024, 4, 4),
    duration: 3.4, // hours
  },
  {
    summary: "Go to the movies",
    description: "Go see marvel",
    location: "AMC",
    start: new Date(2024, 8, 4),
    duration: 3.4, // hours
  },
];

const convertToICSFile = (events) => {
  let prefix = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//ChatGPT//iCal Generator//EN
CALSCALE:GREGORIAN\n`;
  let suffix = `\nEND:VCALENDAR`;

  let event_string = events
    .map((event) => {
      return `BEGIN:VEVENT
SUMMARY:${event.summary}
DESCRIPTION:${event.description}
LOCATION:${event.location}
DTSTART:${formatDate(event.start)}
DTEND:${formatDate(
      new Date(event.start.getTime() + event.duration * 60 * 60 * 1000)
)}
END:VEVENT`;
    })
    .join("\n");

  return prefix + event_string + suffix;
};

const addToDate = (start: Date, diff: number): string => {
  let newMillis = start.getMilliseconds() + diff * 60 * 60 * 1000;

  let cpyDate = new Date(start);
  cpyDate.setMilliseconds(newMillis);

  const date_options = {
    hour: "2-digit",
    minute: "2-digit",
  };  

  // @ts-ignore
  return cpyDate.toLocaleString([], date_options);
};

const toDayOfTheWeek = (start: Date): string => {
  var options = { weekday: "long", month: "long", day: "numeric" };

  // @ts-ignore
  return start.toLocaleString("en-US", options);
};

import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";

export default async function ViewItinerary({ params }) {
  const data = await getDoc(doc(db, "lobbies", params.id)).then((doc) => {
    if (doc.exists()) {
      return doc.data();
    } else {
      console.log("No such document!");
      return null;
    }
  });
  const iten = await fetch(
    "https://us-central1-myexpo-8ff01.cloudfunctions.net/getIten",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        description: data.description,
        startDate: data.startDate,
        endDate: data.endDate,
        suggestions: data.suggestions.map((suggestion) => {
          return suggestion.suggestion})
      }),
    }
  ).then((response) => response.json());


  let dates = iten.itinerary.map((event) => {
    return new Date(event.start);
  }
  );

  let days = Array.from(new Set(dates.map((date) => new Date(date).toDateString())));

  const downloadCalendar = (event) => {
    event.preventDefault();
    const icsFile = convertToICSFile(event_data);
    const blob = new Blob([icsFile], { type: "text/calendar" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "calendar.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col px-8 py-5 text-6xl font-bold text-black bg-white shadow-sm max-w-[888px] rounded-[30px] max-md:px-5 max-md:text-4xl">
      <div className="max-md:max-w-full max-md:text-4xl">Sample Itinerary</div>
      <div className="mt-5 text-4xl tracking-widest font-medium max-md:max-w-full">
        We don’t try to be perfect. We give you a starting point. Edit as you
        would like!
      </div>
      {days.map((day) => {
        return (
          <div
            // @ts-ignore
            key={day}
            className="mt-5 tracking-tighter max-md:max-w-full max-md:text-4xl"
          >
            {/* @ts-ignore */}
            <div>{toDayOfTheWeek(day)}</div>
            <ul>
              {event_data
                .filter((event) => new Date(event.start).toDateString() === day)
                .map((event) => {
                  return (
                    <li
                      key={event.summary}
                      className="mt-5 text-4xl tracking-tighter max-md:max-w-full"
                    >
                      {`(${addToDate(event.start, 0)} - ${addToDate(
                        event.start,
                        event.duration
                      )}) ${event.summary}`}
                    </li>
                  );
                })}
            </ul>
          </div>
        );
      })}

      <button
        onClick={downloadCalendar}
        className="self-end mt-80 text-4xl tracking-tighter whitespace-nowrap max-md:mt-10"
      >
        Export to Calendar
      </button>
    </div>
  );
}
