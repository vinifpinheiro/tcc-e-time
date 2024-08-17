"use client";

import { UserButton } from "@clerk/nextjs";
import { ThemeSelector } from "../ui/theme-switcher";
import MenuNav from "./menunav";

export default function Navbar() {
  return (
    <div className="w-full flex justify-center">
      <nav className="bg-accent rounded-full mt-4 p-1 flex items-center shadow-md gap-2 w-min fixed top-1 ">
        <UserButton
          appearance={{
            elements: {
              userButtonTrigger: "size-8",
              rootBox: "size-8",
              avatarBox: "size-8",
            },
          }}
        />
        <MenuNav />
        <ThemeSelector />
      </nav>
    </div>
  );
}
