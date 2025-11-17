"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const description = "An interactive area chart";

const chartData = [
  { date: "2024-04-01", orders: 222, sales: 150 },
  { date: "2024-04-02", orders: 97, sales: 180 },
  { date: "2024-04-03", orders: 167, sales: 120 },
  { date: "2024-04-04", orders: 242, sales: 260 },
  { date: "2024-04-05", orders: 373, sales: 290 },
  { date: "2024-04-06", orders: 301, sales: 340 },
  { date: "2024-04-07", orders: 245, sales: 180 },
  { date: "2024-04-08", orders: 409, sales: 320 },
  { date: "2024-04-09", orders: 59, sales: 110 },
  { date: "2024-04-10", orders: 261, sales: 190 },
  { date: "2024-04-11", orders: 327, sales: 350 },
  { date: "2024-04-12", orders: 292, sales: 210 },
  { date: "2024-04-13", orders: 342, sales: 380 },
  { date: "2024-04-14", orders: 137, sales: 220 },
  { date: "2024-04-15", orders: 120, sales: 170 },
  { date: "2024-04-16", orders: 138, sales: 190 },
  { date: "2024-04-17", orders: 446, sales: 360 },
  { date: "2024-04-18", orders: 364, sales: 410 },
  { date: "2024-04-19", orders: 243, sales: 180 },
  { date: "2024-04-20", orders: 89, sales: 150 },
  { date: "2024-04-21", orders: 137, sales: 200 },
  { date: "2024-04-22", orders: 224, sales: 170 },
  { date: "2024-04-23", orders: 138, sales: 230 },
  { date: "2024-04-24", orders: 387, sales: 290 },
  { date: "2024-04-25", orders: 215, sales: 250 },
  { date: "2024-04-26", orders: 75, sales: 130 },
  { date: "2024-04-27", orders: 383, sales: 420 },
  { date: "2024-04-28", orders: 122, sales: 180 },
  { date: "2024-04-29", orders: 315, sales: 240 },
  { date: "2024-04-30", orders: 454, sales: 380 },
  { date: "2024-05-01", orders: 165, sales: 220 },
  { date: "2024-05-02", orders: 293, sales: 310 },
  { date: "2024-05-03", orders: 247, sales: 190 },
  { date: "2024-05-04", orders: 385, sales: 420 },
  { date: "2024-05-05", orders: 481, sales: 390 },
  { date: "2024-05-06", orders: 498, sales: 520 },
  { date: "2024-05-07", orders: 388, sales: 300 },
  { date: "2024-05-08", orders: 149, sales: 210 },
  { date: "2024-05-09", orders: 227, sales: 180 },
  { date: "2024-05-10", orders: 293, sales: 330 },
  { date: "2024-05-11", orders: 335, sales: 270 },
  { date: "2024-05-12", orders: 197, sales: 240 },
  { date: "2024-05-13", orders: 197, sales: 160 },
  { date: "2024-05-14", orders: 448, sales: 490 },
  { date: "2024-05-15", orders: 473, sales: 380 },
  { date: "2024-05-16", orders: 338, sales: 400 },
  { date: "2024-05-17", orders: 499, sales: 420 },
  { date: "2024-05-18", orders: 315, sales: 350 },
  { date: "2024-05-19", orders: 235, sales: 180 },
  { date: "2024-05-20", orders: 177, sales: 230 },
  { date: "2024-05-21", orders: 82, sales: 140 },
  { date: "2024-05-22", orders: 81, sales: 120 },
  { date: "2024-05-23", orders: 252, sales: 290 },
  { date: "2024-05-24", orders: 294, sales: 220 },
  { date: "2024-05-25", orders: 201, sales: 250 },
  { date: "2024-05-26", orders: 213, sales: 170 },
  { date: "2024-05-27", orders: 420, sales: 460 },
  { date: "2024-05-28", orders: 233, sales: 190 },
  { date: "2024-05-29", orders: 78, sales: 130 },
  { date: "2024-05-30", orders: 340, sales: 280 },
  { date: "2024-05-31", orders: 178, sales: 230 },
  { date: "2024-06-01", orders: 178, sales: 200 },
  { date: "2024-06-02", orders: 470, sales: 410 },
  { date: "2024-06-03", orders: 103, sales: 160 },
  { date: "2024-06-04", orders: 439, sales: 380 },
  { date: "2024-06-05", orders: 88, sales: 140 },
  { date: "2024-06-06", orders: 294, sales: 250 },
  { date: "2024-06-07", orders: 323, sales: 370 },
  { date: "2024-06-08", orders: 385, sales: 320 },
  { date: "2024-06-09", orders: 438, sales: 480 },
  { date: "2024-06-10", orders: 155, sales: 200 },
  { date: "2024-06-11", orders: 92, sales: 150 },
  { date: "2024-06-12", orders: 492, sales: 420 },
  { date: "2024-06-13", orders: 81, sales: 130 },
  { date: "2024-06-14", orders: 426, sales: 380 },
  { date: "2024-06-15", orders: 307, sales: 350 },
  { date: "2024-06-16", orders: 371, sales: 310 },
  { date: "2024-06-17", orders: 475, sales: 520 },
  { date: "2024-06-18", orders: 107, sales: 170 },
  { date: "2024-06-19", orders: 341, sales: 290 },
  { date: "2024-06-20", orders: 408, sales: 450 },
  { date: "2024-06-21", orders: 169, sales: 210 },
  { date: "2024-06-22", orders: 317, sales: 270 },
  { date: "2024-06-23", orders: 480, sales: 530 },
  { date: "2024-06-24", orders: 132, sales: 180 },
  { date: "2024-06-25", orders: 141, sales: 190 },
  { date: "2024-06-26", orders: 434, sales: 380 },
  { date: "2024-06-27", orders: 448, sales: 490 },
  { date: "2024-06-28", orders: 149, sales: 200 },
  { date: "2024-06-29", orders: 103, sales: 160 },
  { date: "2024-06-30", orders: 446, sales: 400 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  orders: {
    label: "Order",
    color: "var(--chart-4)",
  },
  sales: {
    label: "Sale",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function TotalSalesChart() {
  const [timeRange, setTimeRange] = React.useState("90d");

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Total Sales</CardTitle>
          <CardDescription>
            Showing total sales & orders for the last 3 months
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillOrder" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={chartConfig.orders.color}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={chartConfig.orders.color}
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillSale" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={chartConfig.sales.color}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={chartConfig.sales.color}
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="sales"
              type="natural"
              fill="url(#fillSale)"
              stroke={chartConfig.sales.color}
              stackId="a"
            />
            <Area
              dataKey="orders"
              type="natural"
              fill="url(#fillOrder)"
              stroke={chartConfig.orders.color}
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
