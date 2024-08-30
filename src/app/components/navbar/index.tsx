"use client";

import { UserButton } from "@clerk/nextjs";
import { NavLeftButton } from "./left-button";

export default function Navbar() {
  return (
    <nav className="rounded-full flex items-center justify-between py-4 px-6  w-full">
      <NavLeftButton />
      <UserButton
        appearance={{
          elements: {
            userButtonTrigger: "size-8",
            rootBox: "size-8",
            avatarBox: "size-8",
          },
        }}
      />
    </nav>
  );
}
