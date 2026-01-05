import { Button, Table } from "@radix-ui/themes";
import * as Tooltip from "@radix-ui/react-tooltip";
import {
  BellIcon,
  Cross1Icon,
  Cross2Icon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";

export default function Notifs() {
  return (
    <div className="m-auto">
      <Table.Root className="m-auto w-9/10">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Header</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Actions</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Tooltip.Provider>
            <Table.Row>
              <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
              <Table.Cell>danilo@example.com</Table.Cell>
              <Table.Cell className="flex items-center gap-2">
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <Button>
                      <EnvelopeClosedIcon width="15" height="15" />
                    </Button>
                  </Tooltip.Trigger>
                  <Tooltip.Content>Mark as read</Tooltip.Content>
                </Tooltip.Root>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <Button>
                      <BellIcon width="15" height="15" />
                    </Button>
                  </Tooltip.Trigger>
                  <Tooltip.Content>Remind</Tooltip.Content>
                </Tooltip.Root>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <Button>
                      <Cross1Icon width="15" height="15" />
                    </Button>
                  </Tooltip.Trigger>
                  <Tooltip.Content>Delete</Tooltip.Content>
                </Tooltip.Root>
              </Table.Cell>
            </Table.Row>
          </Tooltip.Provider>
        </Table.Body>
      </Table.Root>
    </div>
  );
}
