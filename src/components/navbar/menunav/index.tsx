"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { menuItems } from "./items";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { ThemeSubmenu } from "./theme-submenu";

export default function Menunav() {
  // take the path from the current page
  const pathname = usePathname();

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="">
          <Button variant={"ghost"} size={"icon"}>
            <Menu className="text-muted-foreground" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {menuItems.map((item, index) => (
            <DropdownMenuItem
              key={index}
              onClick={() => {
                if (item.href) {
                  window.location.href;
                }
              }}
              className={clsx(pathname === item.href && "bg-accent")}
            >
              <div className="flex items-center">
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </div>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <ThemeSubmenu />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
