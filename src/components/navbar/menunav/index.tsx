"use client";

import { menuItems } from "./items";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { usePathname } from "next/navigation";
export default function MenuNav() {
  // take the path from the current page
  const pathname = usePathname();

  return (
    <div className="flex gap-2">
      {menuItems.map((item) => (
        <Button
          variant={"ghost"}
          className={clsx(
            "hover:bg-accent rounded-full h-auto py-1.5 transition-all ease-in-out",
            pathname === item.href
              ? "dark:bg-primary bg-primary/80"
              : "h-8 w-8 flex items-center p-0 hover:bg-primary/40"
          )}
          onClick={() => {
            if (item.href) {
              window.location.href;
            }
          }}
        >
          {pathname === item.href ? (
            <div className="flex gap-1 items-center">
              {item.icon}
              <span className="">{item.label}</span>
            </div>
          ) : (
            <>{item.icon}</>
          )}
        </Button>
      ))}
      {/* <DropdownMenu>
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
      </DropdownMenu> */}
    </div>
  );
}
