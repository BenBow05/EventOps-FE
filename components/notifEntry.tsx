import {
  BellIcon,
  Cross1Icon,
  EnvelopeClosedIcon,
  EnvelopeOpenIcon,
} from "@radix-ui/react-icons";
import { Button, Table, Tooltip } from "@radix-ui/themes";

type notifProps = {
  id: number;
  header: string;
  desc: string;
  date: Date;
  read: boolean;
  markAsRead: (id: number) => void;
  delete: (id: number) => void;
};

export default function NotifEntry(props: notifProps) {
  return (
    <Table.Row
      className={`hover:bg-primary/25 ${props.read ? "" : "font-bold"}`}
    >
      <Table.RowHeaderCell
        style={{ fontWeight: props.read ? "normal" : "bold" }}
      >
        {props.header}
      </Table.RowHeaderCell>
      <Table.Cell>{props.desc}</Table.Cell>
      <Table.Cell className="flex items-center gap-2">
        <Tooltip content={props.read ? "Mark as Unread" : "Mark as Read"}>
          <Button
            variant="surface"
            style={{ width: "34px", height: "34px", padding: "0" }}
            onClick={() => props.markAsRead(props.id)}
          >
            {props.read ? (
              <EnvelopeClosedIcon width="15" height="15" />
            ) : (
              <EnvelopeOpenIcon width="15" height="15" />
            )}
          </Button>
        </Tooltip>
        <Tooltip content="Remind">
          <Button
            variant="surface"
            style={{ width: "36px", height: "36px", padding: "0" }}
          >
            <BellIcon width="15" height="15" />
          </Button>
        </Tooltip>
        <Tooltip content="Delete">
          <Button
            variant="surface"
            style={{ width: "36px", height: "36px", padding: "0" }}
            onClick={() => props.delete(props.id)}
          >
            <Cross1Icon width="15" height="15" />
          </Button>
        </Tooltip>
      </Table.Cell>
      <Table.Cell>
        <p>{props.date.toTimeString()}</p>
      </Table.Cell>
    </Table.Row>
  );
}
