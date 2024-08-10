import Nav from "@/components/menunav/Menunav";
import Navbar from "@/components/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import { WindowSizeProvider } from "@/components/window-size-provider";

export default function Home() {
  return (
    <div className="flex items-center  w-full bg-black/30">
      <Navbar />
    </div>
  );
}
