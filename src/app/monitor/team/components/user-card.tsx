"use client";

import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { Mail, MapPin } from "lucide-react";
import { open } from "@tauri-apps/api/shell";

export default function UserCard({
  user,
}: {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    local: string;
    image: string;
    color: string;
  };
}) {
  const handleSendEmail = async () => {
    const mailtoUrl = `mailto:${user.email}`;
    try {
      await open(mailtoUrl);
    } catch (error) {
      console.error("Failed to open email client:", error);
    }
  };

  return (
    <div className="p-6 w-full rounded-lg flex items-start gap-4 relative overflow-hidden bg-secondary flex-col">
      <div className="flex gap-2">
        <div className="relative rounded-full bg-white flex">
          <div
            className={clsx(
              "h-4 w-4 absolute rounded-full top-0 left-2",
              user.color
            )}
          />
          <img
            src={user.image}
            alt=""
            className="h-20 w-20 rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-foreground text-lg font-bold uppercase">
            {user.firstName + " " + user.lastName}
          </h1>
          <div className="flex gap-x-1 items-center">
            <Mail className="text-muted-foreground size-4" />
            <p className="text-muted-foreground text-sm">{user.email}</p>
          </div>

          <div className="flex gap-1 items-center">
            <MapPin className="text-muted-foreground size-4" />
            <p className="text-sm text-muted-foreground">{user.local}</p>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-2">
        <Button
          onClick={handleSendEmail}
          variant={"outline"}
          className="gap-2 w-full hover:!border hover:!border-black"
        >
          Mandar Email <Mail className="size-4" />
        </Button>
      </div>
    </div>
  );
}
