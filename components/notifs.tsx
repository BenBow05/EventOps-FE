import { Table } from "@radix-ui/themes";
import NotifEntry from "./notifEntry";
import { useState } from "react";

export default function Notifs() {
  const [notifs, setNotifs] = useState([
    {
      id: 1,
      header: "backend",
      desc: "where backendvwhere backendwhere backendwhere ",
      date: new Date(),
      read: false,
    },
    {
      id: 2,
      header: "backend",
      desc: "where backend",
      date: new Date(),
      read: false,
    },
    {
      id: 3,
      header: "backend",
      desc: "where backend",
      date: new Date(),
      read: false,
    },
  ]);

  const markAsRead = (id: number) => {
    setNotifs((prevNotifs) =>
      prevNotifs.map((notif) =>
        notif.id === id ? { ...notif, read: !notif.read } : notif,
      ),
    );
  };

  const deleteNotif = (id: number) => {
    setNotifs((prevNotifs) => prevNotifs.filter((notif) => notif.id !== id));
  };

  return (
    <div className="mt-5 mr-auto ml-auto w-9/10">
      <Table.Root variant="surface">
        <Table.Header className="text-lg">
          <Table.Row>
            <Table.ColumnHeaderCell>Header</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Actions</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Timestamp</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {notifs.map((notif) => (
            <NotifEntry
              key={notif.id}
              {...notif}
              markAsRead={markAsRead}
              delete={deleteNotif}
            />
          ))}
        </Table.Body>
      </Table.Root>
      {notifs.length === 0 && (
        <p className="m-auto mt-5 w-fit">No notifications.</p>
      )}
    </div>
  );
}
