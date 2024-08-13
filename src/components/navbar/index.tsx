"use client";

import { UserButton } from "@clerk/nextjs";
import { ThemeSelector } from "../ui/theme-switcher";
import Menunav from "./menunav";

export default function Navbar() {
  return (
    <nav className="bg-accent rounded-b-xl p-2 flex items-center shadow-md justify-between">
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
    </nav>
  );
}
