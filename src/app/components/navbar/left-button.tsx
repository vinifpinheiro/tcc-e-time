import { MoveLeft } from "lucide-react";
import { useClerk } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export const NavLeftButton = () => {
  const { signOut } = useClerk();
  const { back } = useRouter();
  const path = usePathname();

  const handleLogout = () => {
    signOut();
  };

  const handleBack = () => {
    back();
  };

  const isNotHome = path !== "/";

  return (
    <Button
      variant={"link"}
      size={"sm"}
      className="flex gap-2 text-muted-foreground p-0"
      onClick={isNotHome ? handleBack : handleLogout}
    >
      <MoveLeft className="size-4" />
      {isNotHome ? "Voltar" : "Sair"}
    </Button>
  );
};
