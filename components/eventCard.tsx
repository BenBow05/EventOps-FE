import { Card } from "@radix-ui/themes";

type cardProps = {
  name: string;
  desc: string;
  date: Date;
};

export default function EventCard(props: cardProps) {
  return (
    <div className="h-100 w-100">
      <Card className="h-full w-full">
        <h1>{props.name}</h1>
        <p>{props.desc}</p>
        <p>{props.date.toLocaleDateString()}</p>
      </Card>
    </div>
  );
}
