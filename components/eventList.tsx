import { useState } from "react";
import EventCard from "./eventCard";

export default function EventList() {
  const [events, setEvents] = useState([
    { id: 1, name: "test", desc: "a test event", date: new Date() },
  ]);
  return (
    <div className="m-auto grid h-fit w-fit grid-cols-3 gap-5 align-middle">
      {events.map((event) => (
        <EventCard
          key={event.id}
          name={event.name}
          desc={event.desc}
          date={event.date}
        />
      ))}
    </div>
  );
}
