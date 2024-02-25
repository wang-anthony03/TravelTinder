"use client";

import * as React from "react";
import { useCallback, useState, useEffect } from "react";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { FaRegCopy } from "react-icons/fa";
import TextTransition, { presets } from "react-text-transition";

import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

 
import { cn } from "../../../@/lib/utils";
import { Button } from "../../../@/components/ui/button";
import { Calendar } from "../../../@/components/ui/calendar";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import styles from "../../../(components)/Chunk.module.css"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../@/components/ui/popover"

const TEXTS = [
  "Go to the Beach",
  "Travel Europe",
  "Visit Asia",
  "Explore Africa",
  "Tour South America",
  "See North America",
  "Hike in the Forest",
  "Go Camping",
  "Take a Road Trip",
  "Attend a Music Festival",
  "Visit Historical Landmarks",
  "Go on a Wildlife Safari",
  "Take a Cruise",
  "Experience a Cultural Festival",
  "Learn a New Water Sport",
  "Go Skydiving",
  "Explore a National Park",
  "Volunteer Abroad",
  "Attend a Cooking Class",
  "Go to the Mountains",
  "Go on a Wine Tasting Tour",
  "Take a Hot Air Balloon Ride",
];

import { Metadata } from 'next'

import { UUID } from "crypto";

// export const metadata: Metadata = {
//  title: 'Create Event | Trippl',
//   description: 'Create a new event',
// }
export default function CreateEvent({ params }) {
  "use client";

  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  })

  const shareOrCopy = () => {
    let url = `https://myexpo-8ff01.web.app/trip/${lobbyId}`;

    if (navigator.share) {
      const shareData = {
        title: `Triplet: Team Trip Brainstorming`,
        text: "Add your information to the board",
        url: url,
      };

      navigator
        .share(shareData)
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error));
    }

    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(
        function () {
          console.log("Async: Copying to clipboard was successful!");
          alert("Link copied to clipboard");
        },
        function (err) {
          console.error("Async: Could not copy text: ", err);
        }
      );
    }
  };

  const [description, setState] = useState("");
  const [title, setTitle] = useState("");
  const [lobbyId, setLobbyId] = useState("");
  const [code, setCode] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  const buttonHandler = useCallback(async () => {
    if (description.trim().length === 0) {
      return;
    }

    try {
      // if(document.getElementById("i"))

      const docRef = await addDoc(collection(db, "lobbies"), {
        description,
        code,
      });
      const lobbyId = docRef.id;
      setLobbyId(lobbyId);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }, [description]);

  return (
    <div className="flex flex-col self-end py-11 mt-8 max-w-full text-5xl font-bold tracking-tighter text-black shadow-sm  bg-opacity-50 p-10 bg-white rounded-3xl w-[589px] max-md:pl-5 max-md:text-4xl">
      <div className="max-md:max-w-full max-md:text-4xl tracking-tight text-white">
        <TextTransition springConfig={presets.wobbly}>
          {TEXTS[index % TEXTS.length]}
        </TextTransition>
      </div>
      {lobbyId.length === 0 ? (
        <>
        <textarea
            className="outline-none bg-transparent mt-8 text-4xl placeholder:font-white placeholder:opacity-100 placeholder:font-medium font-medium tracking-wider max-md:max-w-full placeholder:text-white"
            placeholder="A fun little club trip.."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <p className="text-2xl tracking-normal text-white">Give a description</p>
          <textarea
            className="outline-none bg-transparent my-8 text-3xl placeholder:font-black placeholder:opacity-100 placeholder:font-medium font-medium tracking-wider max-md:max-w-full placeholder:text-white"
            placeholder="We’re going to Ubad, Indonesia for a few weeks in May
        ...."
            value={description}
            onChange={(e) => setState(e.target.value)}
          />
          {/* <p>Admin Code</p>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          /> */}
          {/* <input type="file" id="add-photo">Add photo</input> */}

          <div className={cn("grid gap-2")}>
      <Popover className="z-50">
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
      <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture" className={styles.text__header_black}>Add a header (Optional)</Label>
      <Input id="picture" type="file" />
    </div>
    </div>
        <button onClick={buttonHandler} className={`${styles.trip} text-white`}>
          Create Trip<span>&#10230;</span>
        </button>

        </>
      ) : (
        <div className="p-16 text-3xl tracking-normal">
          Your event "{description}" has been created. <br /><br />  Share the private url to
          get input
          <br />
          <div className="flex flex-row justify-between mt-5">
            <a href={`/trip/${lobbyId}`}className="btn text-4xl text-white flex flex-row bg-gray-500 block">
              Go to event
            </a>
            <button
              onClick={shareOrCopy}
              className="btn btn-success text-4xl text-white flex flex-row block"
            >
              Share link <FaRegCopy />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
