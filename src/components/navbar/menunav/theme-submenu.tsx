import {
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import clsx from "clsx";
import { Monitor, Moon, Sun} from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeSubmenu = () => {
  const { themes, theme, setTheme } = useTheme();

  const icon = (theme: string) => {
    if (theme === "light") {
      return <Sun className="size-4" />;
    } else if (theme === "dark") {
      return <Moon className="size-4" />;
    } else {
      return <Monitor className="size-4" />;
    }
  };

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger className="flex gap-2">
        {icon(theme!)}
        <span className="first-letter:uppercase">{theme}</span>
      </DropdownMenuSubTrigger>
      <DropdownMenuSubContent>
        {themes.map((themeName) => (
          <DropdownMenuItem
            className={clsx("flex gap-2", themeName === theme && "bg-accent")}
            key={themeName}
            onClick={() => setTheme(themeName)}
          >
            {icon(themeName)}
            <span className="first-letter:uppercase">{themeName}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuSubContent>
    </DropdownMenuSub>
  );
};
