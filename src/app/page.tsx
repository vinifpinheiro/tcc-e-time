import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex flex-col gap-4 mt-10 mx-20">
        <div className="flex flex-col gap-2 p-4">
          <img src="/logo-no-background-white.png" className="w-48 h-48 mx-auto" />
          <h1 className="text-center text-xl font-semibold">Bem Vindo!</h1>
        </div>
        <Button
          className="rounded-full h-14 text-base font-semibold"
          variant={"secondary"}
        >
          Entrar ou criar equipe
        </Button>
        <Button className="rounded-full h-14 text-base font-semibold relative">
          <Link
            href={"/monitor/timer"}
            className="w-full h-full  absolute flex items-center rounded-full justify-center"
          >
            Marcar ponto
          </Link>
        </Button>
        {/* <div className="w-full h-56 rounded-lg bg-background"></div> */}
      </div>
    </div>
  );
}
