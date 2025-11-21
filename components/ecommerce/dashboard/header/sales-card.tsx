"use client";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import { TrendingDown, TrendingUp } from "lucide-react";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", sale: 186 },
  { month: "February", sale: 305 },
  { month: "March", sale: 237 },
  { month: "April", sale: 73 },
  { month: "May", sale: 209 },
  { month: "June", sale: 214 },
];
const chartConfig = {
  sale: {
    label: "Sales",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export default function SalesCard() {
  return (
    <div className="w-full">
      <div className="relative pr-10">
        {/* Header */}
        <div className="flex items-center">
          <div className="flex-1">
            <h3 className="mb-2 text-lg font-semibold">Sales</h3>
            <h2 className="text-2xl font-semibold leading-none">354</h2>
          </div>
          <div className="w-[150px] h-[80px]">
            <ChartContainer config={chartConfig}>
              <LineChart
                accessibilityLayer
                data={chartData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />

                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Line
                  dataKey="sale"
                  type="step"
                  stroke="var(--color-sale)"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </div>
        </div>

        <div className="flex justify-between items-center mt-6">
          <span className="flex items-center gap-1 bg-red-500/10 border border-red-500 px-2 py-1 rounded">
            <TrendingDown className="text-red-600 w-4 h-4" />
            <span className="text-sm text-red-600 leading-none">3.6%</span>
          </span>

          <p className="mb-0 text-sm pr-3 mt-[2px]">6 Months</p>
        </div>
      </div>
    </div>
  );
}
