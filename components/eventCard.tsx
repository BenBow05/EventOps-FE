import { Card, Inset } from "@radix-ui/themes";
import ManageGuestsModal from "./manageGuestsModal";
import CreateEventModal from "./createEventModal";

type cardProps = {
  name: string;
  desc: string;
  date: Date;
};

export default function EventCard(props: cardProps) {
  return (
    <div className="h-100 w-100">
      <Card className="h-full w-full">
        <Inset
          className="h-2/3 bg-linear-[25deg,var(--primary),var(--secondary)]"
          clip="padding-box"
          side="top"
          pb="current"
        />
        <h1 className="mt-2 font-bold">{props.name}</h1>
        <p>{props.desc}</p>
        <p>{props.date.toLocaleDateString()}</p>
        <div className="absolute right-2 bottom-2 flex gap-2">
          <ManageGuestsModal />
          <CreateEventModal
            edit={true}
            name={props.name}
            desc={props.desc}
            date={props.date}
          />
        </div>
      </Card>
    </div>
  );
}
