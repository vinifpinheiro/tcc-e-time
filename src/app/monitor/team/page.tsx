import UserCurrentTime from "./components/current-time";
import TeamMap from "./components/team-map";
import UserCard from "./components/user-card";

export default function TeamPage() {
  return (
    <div className=" mt-2">
      <TeamMap />
      <UserCurrentTime />
      <div className="p-6 flex flex-col items-center gap-4 h-full overflow-y-scroll">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
}
