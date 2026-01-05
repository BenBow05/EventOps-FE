import EventCard from "./eventCard";

export default function EventList() {
  return (
    <div className="m-auto grid h-fit w-fit grid-cols-3 gap-5 align-middle">
      <EventCard name="test" desc="a test event" date={new Date()} />
      <EventCard name="test" desc="a test event" date={new Date()} />
      <EventCard name="test" desc="a test event" date={new Date()} />
    </div>
  );
}
