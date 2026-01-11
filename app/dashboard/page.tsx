"use client";
import EventList from "@/components/eventList";
import Manage from "@/components/manage";
import Notifs from "@/components/notifs";
import { PersonIcon } from "@radix-ui/react-icons";
import { SegmentedControl } from "@radix-ui/themes";
import { useState } from "react";

export default function Dashboard() {
  const [state, setState] = useState<string>("upcoming");
  const [events, setEvents] = useState([
    { id: 1, name: "test", desc: "a test event", date: new Date() },
  ]);
  return (
    <div className="m-auto h-full w-full">
      <div className="flex h-1/10 items-center justify-between align-middle">
        <h1 className="ml-5 text-6xl font-bold">Dashboard</h1>
        <SegmentedControl.Root
          value={state}
          onValueChange={setState}
          radius="full"
          size={"3"}
          className="mt-5"
          defaultValue="upcoming"
        >
          <SegmentedControl.Item value="upcoming">
            Upcoming Events
          </SegmentedControl.Item>
          <SegmentedControl.Item value="manage">
            Create/Manage Events
          </SegmentedControl.Item>
          <SegmentedControl.Item value="notifs">
            Notifications
          </SegmentedControl.Item>
        </SegmentedControl.Root>
        <button className="group mr-5 rounded-4xl border-2 p-3 transition-colors duration-100 hover:border-transparent hover:bg-linear-[25deg,#4FBBC9,#8869D1]">
          <PersonIcon
            width="30"
            height="30"
            className="transition-colors duration-100 group-hover:text-white"
          />
        </button>
      </div>
      {/* <hr className="m-auto h-1 w-9/10 rounded-full border-transparent bg-black" /> */}
      <div className="flex h-9/10">
        {state == "upcoming" && <EventList events={events} />}
        {state === "manage" && <Manage events={events} />}
        {state === "notifs" && <Notifs />}
      </div>
    </div>
  );
}
