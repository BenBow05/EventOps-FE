import { PlusIcon } from "@radix-ui/react-icons";
import EventCard from "./eventCard";

type eventProps = {
  events: { id: number; name: string; desc: string; date: Date }[];
};

export default function Manage(props: eventProps) {
  return (
    <div className="m-auto">
      <button className="group absolute right-5 bottom-5 h-16 w-16 rounded-sm bg-linear-[25deg,#4FBBC9,#8869D1] text-6xl transition-all duration-100 hover:scale-110">
        <PlusIcon
          className="m-auto transition-all duration-500 group-hover:rotate-180"
          width="45"
          height="45"
        />
      </button>
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
    </div>
  );
}
