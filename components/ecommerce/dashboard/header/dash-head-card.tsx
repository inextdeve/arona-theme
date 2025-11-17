import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import { TrendingUp } from "lucide-react";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

export default function DashHeadCard() {
  return (
    <div className="w-full">
      <div className="relative border-r border-gray-200 pr-10">
        {/* Header */}
        <div className="flex items-center">
          <div className="flex-1">
            <h3 className="mb-2 text-lg font-semibold">New Users</h3>
            <h2 className="text-2xl font-semibold leading-none">705</h2>
          </div>
          <div>
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
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Line
                  dataKey="desktop"
                  type="natural"
                  stroke="var(--color-desktop)"
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
