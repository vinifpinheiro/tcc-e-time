import { House, History, Users } from "lucide-react";

type MenuItems = {
  label: string;
  href?: string;
  component?: React.ReactNode;
  icon: React.ReactNode;
};

export const menuItems: MenuItems[] = [
  {
    label: "Home",
    href: "/",
    icon: <House className="size-4" />,
  },
  {
    label: "Histórico",
    href: "/history",
    icon: <History className="size-4" />,
  },
  {
    label: "Time",
    href: "/team",
    icon: <Users className="size-4" />,
  },
  // {
  //   label: "Subscription",
  //   href: "/subscription",
  //   icon: <Menu />,
  // },
];
