"use client";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import { TrendingUp } from "lucide-react";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  customer: {
    label: "Customers",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

const chartData = [
  { month: "January", customer: 186 },
  { month: "February", customer: 305 },
  { month: "March", customer: 237 },
  { month: "April", customer: 73 },
  { month: "May", customer: 209 },
  { month: "June", customer: 214 },
];

export default function NewCustomersCard() {
  return (
    <div className="w-full">
      <div className="relative border-r border-gray-200 pr-10">
        {/* Header */}
        <div className="flex items-center">
          <div className="flex-1">
            <h3 className="mb-2 text-lg font-semibold">New Customers</h3>
            <h2 className="text-2xl font-semibold leading-none">705</h2>
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
                  dataKey="customer"
                  type="natural"
                  stroke="var(--color-customer)"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </div>
        </div>

        <div className="flex justify-between items-center mt-6">
          <span className="flex items-center gap-1 bg-green-500/10 border border-green-500 px-2 py-1 rounded">
            <TrendingUp className="text-green-600 w-4 h-4" />
            <span className="text-sm text-green-600 leading-none">2.15%</span>
          </span>

          <p className="mb-0 text-sm pr-3 mt-[2px]">This Week</p>
        </div>
      </div>
    </div>
  );
}
