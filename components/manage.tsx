import { PlusIcon } from "@radix-ui/react-icons";

export default function Manage() {
  return (
    <div className="m-auto">
      <button className="group absolute right-5 bottom-5 h-16 w-16 rounded-sm bg-linear-[25deg,#4FBBC9,#8869D1] text-6xl transition-all duration-100 hover:scale-110">
        <PlusIcon
          className="m-auto transition-all duration-500 group-hover:rotate-180"
          width="45"
          height="45"
        />
      </button>
    </div>
  );
}
