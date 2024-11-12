"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

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

export const description = "A linear area chart";

const chartData = [
  { month: "Janeiro", desktop: 12 },
  { month: "Fevereiro", desktop: 8 },
  { month: "Março", desktop: 15 },
  { month: "Abril", desktop: 6 },
  { month: "Maio", desktop: 10 },
  { month: "Junho", desktop: 4 },
  { month: "Julho", desktop: 9 },
  { month: "Agosto", desktop: 7 },
  { month: "Setembro", desktop: 11 },
  { month: "Outubro", desktop: 13 },
  { month: "Novembro", desktop: 5 },
  { month: "Dezembro", desktop: 14 },
];

const chartConfig = {
  desktop: {
    label: "Horas",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export function ExtraHoursChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="!text-lg">Horas Extras</CardTitle>
        <CardDescription className="!text-sm">
          Acompanhe o total de horas extras realizadas por mês
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" hideLabel />}
            />
            <Area
              dataKey="desktop"
              type="linear"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
