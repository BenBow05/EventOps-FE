import { Cross2Icon, PaperPlaneIcon } from "@radix-ui/react-icons";
import { Badge, Dialog } from "@radix-ui/themes";

export default function ManageGuestsModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <button className="group h-12 w-12 rounded-sm border-2 border-black text-6xl transition-all duration-100 hover:scale-110 hover:border-transparent hover:bg-linear-[25deg,var(--primary),var(--secondary)]">
          <PaperPlaneIcon
            className="m-auto transition-all duration-500 group-hover:rotate-360"
            width="24"
            height="24"
          />
        </button>
      </Dialog.Trigger>
      <Dialog.Content
        onPointerDownOutside={(e) => e.preventDefault()}
        className="bg-gray1 data-[state=open]:animate-contentShow fixed max-h-[85vh] w-[90vw] max-w-125 rounded-md p-6.25 shadow-(--shadow-6) focus:outline-none"
      >
        <Dialog.Title className="m-0 text-[17px] font-medium">
          Manage Guests
        </Dialog.Title>
        {/* <Dialog.Description className="mt-2.5 mb-5 text-[15px] leading-normal">
              Enter Details
            </Dialog.Description> */}
        <div className="m-auto grid grid-cols-3 text-center">
          <div className="mb-5">
            <h1>Accepted</h1>
            <Badge color="green">clove@riot.co</Badge>
          </div>
          <div>
            <h1>Pending</h1>
            <Badge color="yellow">omen@riot.co</Badge>
          </div>
          <div>
            <h1>Declined</h1>
            <Badge color="red">gekko@riot.co</Badge>
          </div>
        </div>
        <fieldset className="mb-3.75 flex items-center gap-5">
          <label className="w-22.5 text-right text-[15px]" htmlFor="name">
            Guest List
          </label>
          <textarea
            className="focus:shadow-primary shadow-primary text-primary inline-flex w-full flex-1 items-center justify-center rounded p-2 px-2.5 text-[15px] shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            id="username"
            defaultValue="@peduarte"
            placeholder="Enter a comma separated list of emails"
            rows={5}
          />
        </fieldset>

        <div className="mt-6.25 flex justify-end">
          <Dialog.Close>
            <div className="flex gap-2">
              <button className="bg-primary/20 hover:bg-primary focus:outline-primary inline-flex h-8.75 items-center justify-center rounded px-3.75 leading-none font-medium select-none focus:outline-2 focus:outline-offset-1">
                Send invitations
              </button>
              <button className="bg-primary/20 hover:bg-primary focus:outline-primary inline-flex h-8.75 items-center justify-center rounded px-3.75 leading-none font-medium select-none focus:outline-2 focus:outline-offset-1">
                Cancel
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
