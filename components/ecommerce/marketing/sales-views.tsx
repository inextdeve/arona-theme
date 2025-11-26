"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  RadialBarChart,
  PolarGrid,
  RadialBar,
  PolarRadiusAxis,
  Label,
} from "recharts";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

const firstRadialChartData = [
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
];
const firstRadialChartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

const secondRadialChartData = [
  { browser: "safari", visitors: 200, fill: "var(--chart-4)" },
];
const secondRadialChartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export default function SalesViewsChart() {
  return (
    <div className="md:col-span-2">
      <Card className="w-full rounded-lg">
        <CardHeader>
          <CardTitle>Sales & Views</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer className="max-h-[200px] w-full" config={chartConfig}>
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dashed" />}
              />
              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
              <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            </BarChart>
          </ChartContainer>

          <div className="flex flex-col lg:flex-row items-stretch justify-around border p-3 rounded-lg mt-3 gap-3">
            <div className="flex items-center gap-4">
              <div className="w-[120px]">
                <ChartContainer
                  config={firstRadialChartConfig}
                  className="mx-auto aspect-square max-h-[250px]"
                >
                  <RadialBarChart
                    data={firstRadialChartData}
                    startAngle={0}
                    endAngle={250}
                    innerRadius={39}
                    outerRadius={58}
                  >
                    <PolarGrid
                      gridType="circle"
                      radialLines={false}
                      stroke="none"
                      className="first:fill-muted last:fill-background"
                      polarRadius={[43, 36]}
                    />
                    <RadialBar
                      dataKey="visitors"
                      background
                      cornerRadius={10}
                    />
                    <PolarRadiusAxis
                      tick={false}
                      tickLine={false}
                      axisLine={false}
                    ></PolarRadiusAxis>
                  </RadialBarChart>
                </ChartContainer>
              </div>
              <div>
                <p className="mb-1 text-sm font-semibold">Monthly</p>
                <h2 className="mb-0 text-2xl font-bold">65,127</h2>
                <p className="mb-0">
                  <span className="text-green-500 mr-2 font-medium">16.5%</span>
                  <span>55.21 USD</span>
                </p>
              </div>
            </div>
            <div className="border-l border-gray-200"></div>
            <div className="flex items-center gap-4">
              <div className="w-[120px]">
                <ChartContainer
                  config={secondRadialChartConfig}
                  className="mx-auto aspect-square max-h-[250px]"
                >
                  <RadialBarChart
                    data={secondRadialChartData}
                    startAngle={0}
                    endAngle={250}
                    innerRadius={39}
                    outerRadius={58}
                  >
                    <PolarGrid
                      gridType="circle"
                      radialLines={false}
                      stroke="none"
                      className="first:fill-muted last:fill-background"
                      polarRadius={[43, 36]}
                    />
                    <RadialBar
                      dataKey="visitors"
                      background
                      cornerRadius={10}
                    />
                    <PolarRadiusAxis
                      tick={false}
                      tickLine={false}
                      axisLine={false}
                    ></PolarRadiusAxis>
                  </RadialBarChart>
                </ChartContainer>
              </div>
              <div>
                <p className="mb-1 text-sm font-semibold">Yearly</p>
                <h2 className="mb-0 text-2xl font-bold">984,246</h2>
                <p className="mb-0">
                  <span className="text-green-500 mr-2 font-medium">24.9%</span>
                  <span>267.35 USD</span>
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
