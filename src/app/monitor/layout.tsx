"use client";
import { Timer } from "lucide-react";
import NavigationTabs from "./components/navigation-tabs";
import { MonitorHeader } from "./components/monitor-header";

export default function MonitorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full flex justify-center flex-col mt-2">
      <div className="w-full  relative">
        <NavigationTabs
          initialTabId="tracker"
          tabs={[
            {
              id: "timer",
              label: "Timer",
              href: "monitor/timer",
              children: (
                <MonitorHeader
                  title="Marque seu tempo"
                  description="Aqui você pode marcar seu tempo de trabalho e adcionar pausas de acordo com sua necessidade."
                  tag="Timer"
                  icon={<Timer className="text-muted-foreground size-6" />}
                />
              ),
            },
            {
              id: "analytics",
              label: "Insights",
              href: "monitor/analytics",
              children: (
                <MonitorHeader
                  title="Acompanhe a produtividade"
                  description="Aqui você pode acompanhar as estatísticas de produtividade dentro da equipe."
                  tag="Timer"
                  icon={<Timer className="text-muted-foreground size-6" />}
                />
              ),
            },
            {
              id: "team",
              label: "Equipe",
              href: "monitor/team",
              children: (
                <MonitorHeader
                  title=""
                  description="Aqui você pode acompanhar as estatísticas de produtividade dentro da equipe."
                  tag="Timer"
                  icon={<Timer className="text-muted-foreground size-6" />}
                />
              ),
            },
          ]}
        />
      </div>
      <div className="p-6 h-full">{children}</div>
    </div>
  );
}
