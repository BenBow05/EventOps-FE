import { Cross2Icon, PlusIcon } from "@radix-ui/react-icons";
import { Dialog } from "@radix-ui/themes";

export default function CreateEventModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <button className="group absolute right-5 bottom-5 h-16 w-16 rounded-sm bg-linear-[25deg,#4FBBC9,#8869D1] text-6xl transition-all duration-100 hover:scale-110">
          <PlusIcon
            className="m-auto transition-all duration-500 group-hover:rotate-180"
            width="45"
            height="45"
          />
        </button>
      </Dialog.Trigger>
      <Dialog.Content
        onPointerDownOutside={(e) => e.preventDefault()}
        className="bg-gray1 data-[state=open]:animate-contentShow fixed max-h-[85vh] w-[90vw] max-w-125 rounded-md p-6.25 shadow-(--shadow-6) focus:outline-none"
      >
        <Dialog.Title className="m-0 text-[17px] font-medium">
          Create New Event
        </Dialog.Title>
        {/* <Dialog.Description className="mt-2.5 mb-5 text-[15px] leading-normal">
          Enter Details
        </Dialog.Description> */}
        <fieldset className="mb-3.75 flex items-center gap-5">
          <label className="w-22.5 text-right text-[15px]" htmlFor="name">
            Title
          </label>
          <input
            className="focus:shadow-primary shadow-primary text-primary inline-flex h-8.75 w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            id="name"
            defaultValue="Pedro Duarte"
          />
        </fieldset>
        <fieldset className="mb-3.75 flex items-center gap-5">
          <label className="w-22.5 text-right text-[15px]" htmlFor="username">
            Description
          </label>
          <textarea
            className="focus:shadow-primary shadow-primary text-primary inline-flex w-full flex-1 items-center justify-center rounded p-2 px-2.5 text-[15px] shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            id="username"
            defaultValue="@peduarte"
            rows={5}
          />
        </fieldset>
        <fieldset className="mb-3.75 flex items-center gap-5">
          <label className="w-22.5 text-right text-[15px]" htmlFor="date">
            Date
          </label>
          <p className="inline-flex h-8.75 w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]">
            [DATE SELECTOR]
          </p>
        </fieldset>
        <div className="mt-6.25 flex justify-end">
          <Dialog.Close>
            <div className="flex gap-2">
              <button className="bg-primary/20 hover:bg-primary focus:outline-primary inline-flex h-8.75 items-center justify-center rounded px-3.75 leading-none font-medium select-none focus:outline-2 focus:outline-offset-1">
                Create Event
              </button>
              <button className="bg-primary/20 hover:bg-primary focus:outline-primary inline-flex h-8.75 items-center justify-center rounded px-3.75 leading-none font-medium select-none focus:outline-2 focus:outline-offset-1">
                Save as Draft
              </button>
            </div>
          </Dialog.Close>
        </div>
        <Dialog.Close>
          <button
            className="text-primary hover:bg-primary/20 focus:shadow-primary absolute top-2.5 right-2.5 inline-flex size-6.25 appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  );
}
