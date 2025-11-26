import { MoreVertical } from "lucide-react";

interface SocialCardProps {
  title: string;
  items: {
    img: string;
    name: string;
    percent: number;
    color: string;
  }[];
}

interface CircularChartProps {
  percent: number;
  color: string;
}

function SocialCard({ title, items }: SocialCardProps) {
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

        {/* Items */}
        <div className="flex flex-col gap-5">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              {/* Image + Name */}
              <div className="flex items-center gap-3 grow">
                <img src={item.img} alt={item.name} width={32} />
                <p className="m-0">{item.name}</p>
              </div>

              {/* Percent */}
              <p className="text-sm font-medium">{item.percent}%</p>

              {/* Circular Chart */}
              <CircularChart percent={item.percent} color={item.color} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- CircularChart Component ---------- */

function CircularChart({ percent, color }: CircularChartProps) {
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const progress = (percent / 100) * circumference;

  return (
    <svg width="40" height="40" className="-rotate-90">
      <circle
        cx="20"
        cy="20"
        r={radius}
        stroke="rgba(0,0,0,0.1)"
        strokeWidth="4"
        fill="none"
      />
      <circle
        cx="20"
        cy="20"
        r={radius}
        stroke={color}
        strokeWidth="4"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={circumference - progress}
        strokeLinecap="round"
      />
    </svg>
  );
}

const leads = [
  {
    img: "/assets/images/apps/17.png",
    name: "Facebook",
    percent: 55,
    color: "#0d6efd",
  },
  {
    img: "/assets/images/apps/18.png",
    name: "LinkedIn",
    percent: 67,
    color: "#fc185a",
  },
  {
    img: "/assets/images/apps/19.png",
    name: "Instagram",
    percent: 78,
    color: "#02c27a",
  },
  {
    img: "/assets/images/apps/20.png",
    name: "Snapchat",
    percent: 46,
    color: "#fd7e14",
  },
  {
    img: "/assets/images/apps/05.png",
    name: "Google",
    percent: 38,
    color: "#0dcaf0",
  },
  {
    img: "/assets/images/apps/08.png",
    name: "Altaba",
    percent: 15,
    color: "#6f42c1",
  },
  {
    img: "/assets/images/apps/07.png",
    name: "Spotify",
    percent: 12,
    color: "#ff00b3",
  },
];

export default function SocialLeadsCard() {
  return <SocialCard title="Social Leads" items={leads} />;
}
