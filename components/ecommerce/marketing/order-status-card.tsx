"use client";
import { Circle, MoreVertical } from "lucide-react";
import Chart from "react-apexcharts";

type StatusCardProps = {
  title: string;
  centerValue: string;
  centerLabel: string;
  chartData: { label: string; value: number; color: string }[];
  legend: { label: string; value: number; color: string }[];
};

function StatusCard({
  title,
  centerValue,
  centerLabel,
  chartData,
  legend,
}: StatusCardProps) {
  const options = {
    chart: {
      type: "donut" as "donut",
    },
    dataLabels: { enabled: false },
    stroke: { width: 2 },
    colors: chartData.map((c) => c.color),
    legend: { show: false },
    plotOptions: {
      pie: {
        donut: {
          size: "75%",
        },
      },
    },
  };

  const series = chartData.map((c) => c.value);

  return (
    <div className="rounded-2xl border bg-white shadow-sm w-full">
      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <h5 className="font-bold text-lg">{title}</h5>

          <button className="p-1 rounded-lg hover:bg-gray-100">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>

        {/* Chart Section */}
        <div className="relative flex justify-center">
          {/* Center Content */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-3xl font-bold">{centerValue}</p>
            <p className="text-sm text-gray-600">{centerLabel}</p>
          </div>

          <Chart
            options={options}
            series={series}
            type="donut"
            width="100%"
            height={260}
          />
        </div>

        {/* Legend */}
        <div className="flex flex-col gap-4 mt-4">
          {legend.map((item, i) => (
            <div key={i} className="flex items-center justify-between text-sm">
              <p className="flex items-center gap-2 w-1/3">
                <span
                  className="material-icons-outlined text-base"
                  style={{ color: item.color }}
                >
                  <Circle className="w-3 h-3" />
                </span>
                {item.label}
              </p>

              <p className="font-medium">{item.value}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function OrderStatusCard() {
  const chartData = [
    { label: "Sales", value: 68, color: "#3667a3" },
    { label: "Product", value: 25, color: "#f73e37" },
    { label: "Income", value: 14, color: "#5ed131" },
  ];

  const legend = [
    { label: "Sales", value: 68, color: "#3667a3" },
    { label: "Product", value: 25, color: "#f73e37" },
    { label: "Income", value: 14, color: "#5ed131" },
  ];

  return (
    <StatusCard
      title="Order Status"
      centerValue="68%"
      centerLabel="Total Sales"
      chartData={chartData}
      legend={legend}
    />
  );
}
