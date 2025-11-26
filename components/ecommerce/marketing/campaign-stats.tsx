"use client";

import {
  Calendar,
  Eye,
  Inbox,
  Mail,
  MoreVertical,
  MousePointerClick,
  Rss,
  SquareArrowOutUpRight,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";

export default function CampaignStats() {
  const items = [
    {
      icon: <Calendar className="w-5 h-5" />,
      bg: "bg-indigo-500",
      title: "Campaigns",
      value: "54",
      percent: "28%",
      positive: true,
    },
    {
      icon: <Mail className="w-5 h-5" />,
      bg: "bg-green-500",
      title: "Emailed",
      value: "245",
      percent: "15%",
      positive: false,
    },
    {
      icon: <SquareArrowOutUpRight className="w-5 h-5" />,
      bg: "bg-blue-600",
      title: "Opened",
      value: "54",
      percent: "30.5%",
      positive: true,
    },
    {
      icon: <MousePointerClick className="w-5 h-5" />,
      bg: "bg-yellow-500",
      title: "Clicked",
      value: "859",
      percent: "34.6%",
      positive: false,
    },
    {
      icon: <Rss className="w-5 h-5" />,
      bg: "bg-sky-500",
      title: "Subscribed",
      value: "24,758",
      percent: "53%",
      positive: true,
    },
    {
      icon: <Inbox className="w-5 h-5" />,
      bg: "bg-red-500",
      title: "Spam Message",
      value: "548",
      percent: "47%",
      positive: false,
    },
    {
      icon: <Eye className="w-5 h-5" />,
      bg: "bg-blue-800",
      title: "Views Mails",
      value: "9845",
      percent: "68%",
      positive: true,
    },
  ];

  return (
    <div className="w-full">
      <div className="rounded-xl border bg-white shadow-sm w-full h-full">
        <div className="p-5">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <h6 className="font-semibold text-base">Campaign Stats</h6>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <MoreVertical className="w-5 h-5 cursor-pointer" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Action</DropdownMenuItem>
                <DropdownMenuItem>Another action</DropdownMenuItem>
                <DropdownMenuItem>Something else</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* List */}
          <ul className="space-y-4">
            {items.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                {/* Icon Box */}
                <div
                  className={`${item.bg} w-11 h-11 rounded-md flex items-center justify-center`}
                >
                  <span className="material-icons-outlined text-white text-lg">
                    {item.icon}
                  </span>
                </div>

                {/* Title */}
                <div className="flex-1">
                  <h6 className="m-0 font-medium">{item.title}</h6>
                </div>

                {/* Values */}
                <div className="flex items-center gap-3">
                  <p className="m-0 text-sm">{item.value}</p>
                  <p
                    className={`m-0 text-sm font-semibold ${
                      item.positive ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {item.percent}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
