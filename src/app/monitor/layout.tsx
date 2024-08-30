"use client";
import { ChartSpline, Timer, Users } from "lucide-react";
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
              href: "timer",
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
              href: "analytics",
              children: (
                <MonitorHeader
                  title="Acompanhe a produtividade"
                  description="Aqui você pode acompanhar as estatísticas de produtividade dentro da equipe."
                  tag="Insights"
                  icon={
                    <ChartSpline className="text-muted-foreground size-6" />
                  }
                />
              ),
            },
            {
              id: "team",
              label: "Equipe",
              href: "team",
              children: (
                <MonitorHeader
                  title="Trabalhe em equipe"
                  description="Veja o que sua equipe está fazendo e acompanhe o progresso de cada um."
                  tag="Equipe"
                  icon={<Users className="text-muted-foreground size-6" />}
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
