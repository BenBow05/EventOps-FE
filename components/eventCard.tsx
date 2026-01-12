import { PaperPlaneIcon, Pencil1Icon } from "@radix-ui/react-icons";
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
        <div className="absolute right-2 bottom-2 flex gap-2">
          <button className="group h-12 w-12 rounded-sm border-2 border-black text-6xl transition-all duration-100 hover:scale-110 hover:border-transparent hover:bg-linear-[25deg,#4FBBC9,#8869D1]">
            <PaperPlaneIcon
              className="m-auto transition-all duration-500 group-hover:rotate-360"
              width="24"
              height="24"
            />
          </button>
          <button className="group h-12 w-12 rounded-sm border-2 border-black text-6xl transition-all duration-100 hover:scale-110 hover:border-transparent hover:bg-linear-[25deg,#4FBBC9,#8869D1]">
            <Pencil1Icon
              className="m-auto transition-all duration-500 group-hover:rotate-360"
              width="24"
              height="24"
            />
          </button>
        </div>
      </Card>
    </div>
  );
}
