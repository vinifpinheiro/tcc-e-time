import { Button } from "@/components/ui/button";
import { WindowSizeProvider } from "@/components/window-size-provider";

export default function Home() {
  return (
    <WindowSizeProvider>
      <div className="flex items-center justify-center h-[100vh] w-full bg-black/30">
        TEST
      </div>
    </WindowSizeProvider>
  );
}
