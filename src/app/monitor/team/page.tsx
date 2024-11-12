"use client";

import UserCurrentTime from "./components/current-time";
import TeamMap from "./components/team-map";
import UserCard from "./components/user-card";

export default function TeamPage() {
  const fakeUsers: {
    firstName: string;
    lastName: string;
    email: string;
    local: string;
    image: string;
    color: string;
  }[] = [
    {
      firstName: "Gabriel",
      lastName: "Lima",
      email: "gabriellima10@gmal.com",
      local: "EUA, Scranton Pensilvânia",
      image:
        "https://randompicturegenerator.com/img/dog-generator/ge220d889d83836b2e1cec0de8972f1dcc1249f04cfcedae725ef5cfee3b01621fbf02ffdf434eea1f870f4be9aace933_640.jpg",
      color: "bg-red-500",
    },
    {
      firstName: "Maria",
      lastName: "Silva",
      email: "mariasilvaa12@gmail.com",
      local: "Berlin, Alemanha",
      image:
        "https://randompicturegenerator.com/img/flower-generator/g6d525a503c74fa8b22ba4130487905b49a8706185450d6be1d0b6c8a8f88e1284d3b22951a198df43b0ca55a5e5a2ca4_640.jpg",
      color: "bg-blue-500",
    },
    {
      firstName: "João",
      lastName: "Santos",
      email: "joaooosantos@gmail.com",
      local: "São Paulo, Brasil",
      image:
        "https://randompicturegenerator.com/img/car-generator/g3390161cfd4f0ef83b36447cfc716c0cd62a919f2f22a7ad6af5b697494c804c48312f297bc6d9dd81b5789c6110fbfa_640.jpg",
      color: "bg-green-500",
    },
  ];

  return (
    <div className=" mt-2">
      <TeamMap />
      <UserCurrentTime />
      <div className="p-6 flex flex-col items-center gap-4 h-full">
        {fakeUsers.map((user) => (
          <UserCard key={user.lastName} user={user} />
        ))}
      </div>
    </div>
  );
}
