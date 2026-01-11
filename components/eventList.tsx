import EventCard from "./eventCard";

type eventProps = {
  events: { id: number; name: string; desc: string; date: Date }[];
};

export default function EventList(props: eventProps) {
  return (
    <div className="m-auto grid h-fit w-fit grid-cols-3 gap-5 align-middle">
      {props.events.map((event) => (
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
