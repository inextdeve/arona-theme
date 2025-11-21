"use client";
import { CartesianGrid, Bar, BarChart } from "recharts";
import { TrendingUp } from "lucide-react";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  views: {
    label: "Views",
  },
  view: {
    label: "views",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

const chartData = [
  { date: "2024-04-01", view: 150 },
  { date: "2024-04-02", view: 180 },
  { date: "2024-04-03", view: 120 },
  { date: "2024-04-04", view: 260 },
  { date: "2024-04-05", view: 290 },
  { date: "2024-04-06", view: 340 },
  { date: "2024-04-07", view: 180 },
];

export default function ViewsCard() {
  return (
    <div className="w-full">
      <div className="relative border-r border-gray-200 pr-10">
        {/* Header */}
        <div className="flex items-center">
          <div className="flex-1">
            <h3 className="mb-2 text-lg font-semibold">Views</h3>
            <h2 className="text-2xl font-semibold leading-none">5255</h2>
          </div>
          <div className="w-[150px] h-[80px]">
            <ChartContainer
              config={chartConfig}
              className="aspect-auto h-[80px] w-full"
            >
              <BarChart
                accessibilityLayer
                data={chartData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />

                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      className="w-[150px]"
                      nameKey="views"
                      labelFormatter={(_, data) => {
                        return new Date(
                          data[0].payload.date
                        ).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        });
                      }}
                    />
                  }
                />
                <Bar dataKey="view" fill="var(--color-view)" />
              </BarChart>
            </ChartContainer>
          </div>
        </div>

        <div className="flex justify-between items-center mt-6">
          <span className="flex items-center gap-1 bg-green-500/10 border border-green-500 px-2 py-1 rounded">
            <TrendingUp className="text-green-600 w-4 h-4" />
            <span className="text-sm text-green-600 leading-none">11.43%</span>
          </span>

          <p className="mb-0 text-sm pr-3 mt-[2px]">This Week</p>
        </div>
      </div>
    </div>
  );
}
