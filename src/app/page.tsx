"use client"

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
// import useUserZustand from "./zustand";

export default function Home() {
  const { user } = useUser();

  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex flex-col gap-4 mt-10 mx-20">
        <div className="flex flex-col gap-2 p-4">
          <img
            src="/logo-no-background-white.png"
            className="w-48 h-48 mx-auto"
          />
          <h1 className="text-center text-xl font-semibold">
            Bem vindo, {user?.firstName}
          </h1>
        </div>
        <Button
          className="rounded-full h-14 text-base font-semibold"
          variant={"secondary"}
        >
          💻 Equipe de Desenvolvimento
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
