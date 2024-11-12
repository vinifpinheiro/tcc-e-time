"use client";

import { createOrUpdateUser } from "@/functions/create-or-update-user";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import useUserZustand from "./zustand";

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useUser();
  const { setUser, user: userZustand } = useUserZustand();

  if (!user) return;

  // const handleUser = () => {
  //   createOrUpdateUser({
  //     email: user.primaryEmailAddress?.emailAddress ?? "",
  //     firstName: user.firstName as string,
  //     lastName: user.lastName as string,
  //   }).then((user) => {
  //     if (userZustand) setUser(user);
  //   });
  // };

  // useEffect(() => {
  //   handleUser();
  // }, [user]);

  return children;
}
