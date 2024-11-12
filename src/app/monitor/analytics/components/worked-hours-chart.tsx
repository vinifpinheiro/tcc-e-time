"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A horizontal bar chart";

const chartData = [
  { month: "Janeiro", desktop: 8.2 },
  { month: "Fevereiro", desktop: 8.5 },
  { month: "Março", desktop: 8.3 },
  { month: "Abril", desktop: 8.1 },
  { month: "Maio", desktop: 8.4 },
  { month: "Junho", desktop: 8.2 },
  { month: "Julho", desktop: 8.3 },
  { month: "Agosto", desktop: 8.5 },
  { month: "Setembro", desktop: 8.4 },
  { month: "Outubro", desktop: 8.2 },
  { month: "Novembro", desktop: 8.3 },
  { month: "Dezembro", desktop: 8.4 },
];

const chartConfig = {
  desktop: {
    label: "Horas",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export function WorkedHoursChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="!text-lg">Media de Horas Trabalhadas</CardTitle>
        <CardDescription>
          {" "}
          Acompanhe a média de horas trabalhadas por semana
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: -20,
            }}
          >
            <XAxis type="number" dataKey="desktop" hide />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
