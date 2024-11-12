"use server";

import { prisma } from "@/lib/prisma";

export type SimpleUser = {
  email: string;
  firstName: string;
  lastName: string;
};

export async function createOrUpdateUser(user: SimpleUser) {
  const userAlreadyExists = await prisma.user.findUnique({
    where: {
      email: user.email,
    },
  });

  if (userAlreadyExists) {
    return await prisma.user.update({
      where: {
        email: user.email,
      },
      data: {
        ...user,
      },
    });
  } else {
    //verify if the user has a start and end time and timezone
    return await prisma.user.create({
      data: {
        ...user,
        startTime: new Date(),
        endTime: new Date(),
        timezone: "UTC",
      },
    });
  }
}
