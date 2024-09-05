import { ExtraHoursChart } from "./components/extra-hours-chart";
import { WorkedHoursChart } from "./components/worked-hours-chart";

export default function AnalyticsPage() {
  return (
    <div className="w-full flex gap-4 flex-col p-6">
      <ExtraHoursChart />
      <WorkedHoursChart />
    </div>
  );
}
