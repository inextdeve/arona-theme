import { TrendingUp, TrendingDown } from "lucide-react";

const colorMap = {
  green: {
    bg: "bg-green-500/10",
    text: "text-green-600",
  },
  red: {
    bg: "bg-red-500/10",
    text: "text-red-600",
  },
  sky: {
    bg: "bg-sky-500/10",
    text: "text-sky-600",
  },
  orange: {
    bg: "bg-orange-500/10",
    text: "text-orange-600",
  },
};

export default function StatsCard({
  icon: Icon,
  color,
  percent,
  value,
  label,
  positive = true,
}: {
  icon: React.ComponentType<{ className?: string }>;
  color: keyof typeof colorMap;
  percent: string;
  value: string;
  label: string;
  positive?: boolean;
}) {
  const colors = colorMap[color];

  return (
    <div className="rounded-xl border bg-white shadow-sm">
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          {/* Icon Circle */}
          <div
            className={`${colors.bg} ${colors.text} w-12 h-12 flex items-center justify-center rounded-full`}
          >
            <Icon className="w-6 h-6" />
          </div>

          {/* Text Section */}
          <div>
            <div
              className={`flex items-center ${
                positive ? "text-green-600" : "text-red-600"
              } mb-1`}
            >
              <p className="m-0 text-sm">{percent}</p>
              {positive ? (
                <TrendingUp className="w-4 h-4 ml-1" />
              ) : (
                <TrendingDown className="w-4 h-4 ml-1" />
              )}
            </div>

            <h4 className="text-xl font-semibold m-0">{value}</h4>
            <p className="m-0 text-sm">{label}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
