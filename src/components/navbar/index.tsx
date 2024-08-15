"use client";

import { UserButton } from "@clerk/nextjs";
import { ThemeSelector } from "../ui/theme-switcher";
import Menunav from "./menunav";

export default function Navbar() {
  return (
    <nav className="bg-accent rounded-full mt-4 mx-auto p-1 flex items-center shadow-md gap-2 w-min">
      <UserButton
        appearance={{
          elements: {
            userButtonTrigger: "size-8",
            rootBox: "size-8",
            avatarBox: "size-8",
          },
        }}
      />
      <Menunav />
      <ThemeSelector />
    </nav>
  );
}
