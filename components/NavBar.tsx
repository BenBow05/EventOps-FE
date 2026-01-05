"use client";
import { ArrowLeftIcon, ArrowRightIcon, HamburgerMenuIcon, HomeIcon, RocketIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { useEffect, useState } from "react";

type NavBarProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export default function NavBar(){
    const [isOpen, setIsOpen] = useState(false);

  const sideList = [
    {
      icon: <HomeIcon className="text-2xl" />,
      title: "Temp Dashboard",
      link: "/dashboard"
    },
    {
      icon: <HomeIcon className="text-2xl" />,
      title: "Location Search",
      link: "/locationsearch"
    },
    {
      icon: <HomeIcon className="text-2xl" />,
      title: "Temp Sign up",
      link: "/signup"
    },
    {
      icon: <RocketIcon className="text-2xl" />,
      title: "Getting Started",
      link: "/gettingstarted"
    },
  ];

  useEffect(() => {
    const handleEscKeyPress = (e: { keyCode: number; }) => {
      if (e.keyCode === 27 && isOpen) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.body.style.setProperty("overflow", "hidden");
    } else {
      document.body.style.removeProperty("overflow");
    }

    document.addEventListener("keydown", handleEscKeyPress);

    return () => {
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  }, [isOpen]);

  return (
    <aside
      className={`
        h-full bg-primary border-r
        transition-all duration-300 ease-in-out flex flex-col
        ${isOpen ? "w-64" : "w-16"}
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-center border-b">
        {isOpen && (
          <Link href={"/"}>
            <img
            src="https://i.imgur.com/520zDfd.png"
            alt="Logo"
            className="w-50"
          />
          </Link>
          
         )}
      </div>

      {/* Menu */}
      <nav className="flex-1">
        {sideList.map(({ icon, title, link }, i) => (
          <Link key={i} href={link}>
            <div className="flex items-center gap-3 p-4 hover:bg-accent hover:text-white">
                {icon}
                {isOpen && <span>{title}</span>}
            </div>
          </Link>
        ))}
      </nav>
      <div className={`flex ${isOpen ? "justify-end" : "justify-center"} p-4`}>
          <Button
          variant="ghost"
          onClick={() => setIsOpen(!isOpen)}
          size="3"
          radius="large"
        >
            {isOpen ? <ArrowLeftIcon color={"black"} width={24} height={24} /> : <ArrowRightIcon color={"black"} width={24} height={24} />}
        </Button>
      </div>
    </aside>
  );
}