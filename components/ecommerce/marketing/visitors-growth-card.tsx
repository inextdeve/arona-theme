"use client";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";

interface StatCardProps {
  title?: string;
  mainPercent?: string;
  growthPercent?: string;
  growthPositive?: boolean;
  chartData?: { value: number }[];
  progressStats?: {
    label: string;
    value: string;
    percent: string;
    color: string;
  }[];
}

function StatCard({
  title = "Visitors Growth",
  mainPercent = "36.7%",
  growthPercent = "34.5%",
  growthPositive = true,

  chartData = [],
  progressStats = [],
}: StatCardProps) {
  return (
    <Card className="rounded-2xl w-full">
      <CardContent className="pt-6">
        {/* Chart */}
        <div className="w-full h-[210px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorPrimary" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopOpacity={0.7} />
                  <stop offset="100%" stopOpacity={0} />
                </linearGradient>
              </defs>

              <Tooltip />

              <Area
                type="monotone"
                dataKey="value"
                stroke="currentColor"
                fill="url(#colorPrimary)"
                className="text-lime-400"
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Percentage + Growth */}
        <div className="flex items-center gap-3 mt-4">
          <h1 className="text-4xl font-semibold">{mainPercent}</h1>

          <div className="flex items-center gap-1 self-end">
            {growthPositive ? (
              <TrendingUp className="text-green-500 w-5 h-5" />
            ) : (
              <TrendingDown className="text-red-500 w-5 h-5" />
            )}

            <p
              className={`text-sm font-semibold ${
                growthPositive ? "text-green-500" : "text-red-500"
              }`}
            >
              {growthPercent}
            </p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4">{title}</p>

        {/* Progress List */}
        <div className="flex flex-col gap-4">
          {progressStats.map((item, idx) => (
            <div key={idx}>
              <p className="mb-1 text-sm">
                {item.label}
                <span className="float-right">{item.value}</span>
              </p>

              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${item.color}`}
                  style={{ width: item.percent }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

const chartData = [
  { value: 10 },
  { value: 25 },
  { value: 50 },
  { value: 40 },
  { value: 80 },
  { value: 30 },
  { value: 95 },
  { value: 55 },
];

const progressStats = [
  { label: "Clicks", value: "2589", percent: "65%", color: "bg-lime-500" },
  { label: "Likes", value: "6748", percent: "55%", color: "bg-yellow-500" },
  { label: "Upvotes", value: "9842", percent: "45%", color: "bg-sky-500" },
];

export default function VisitorsGrowthCard() {
  return (
    <StatCard
      mainPercent="36.7%"
      growthPercent="34.5%"
      growthPositive={true}
      chartData={chartData}
      progressStats={progressStats}
    />
  );
}
