import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";

type User = any;

export default function UserCard({ user }: { user?: User }) {
  return (
    <div className="p-6 w-full rounded-lg flex items-start gap-4 relative overflow-hidden bg-secondary flex-col">
      <div className="flex gap-2">
        <div className="relative rounded-full bg-white flex">
          <div className="h-4 w-4 bg-primary absolute rounded-full top-0 left-2" />
          <img
            src="https://tm.ibxk.com.br/2019/02/17/17124052466014.jpg"
            alt=""
            className="h-20 w-20 rounded-full"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-foreground text-lg font-bold uppercase">
            Michael Scott
          </h1>
          <div className="flex gap-x-1 items-center">
            <Mail className="text-muted-foreground size-4" />
            <p className="text-muted-foreground text-sm">
              emailexample@example.com
            </p>
          </div>

          <div className="flex gap-1 items-center">
            <MapPin className="text-muted-foreground size-4" />
            <p className="text-sm text-muted-foreground">
              EUA, Scranton Pensilvânia
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-2">
        <Button variant={"outline"} className="gap-2 w-full hover:!border hover:!border-black">
          Mandar Email <Mail className="size-4" />
        </Button>
      </div>
    </div>
  );
}
