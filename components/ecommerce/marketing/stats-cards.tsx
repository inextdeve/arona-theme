"use client";
import { Bookmark, CircleUser, Heart, PlayCircle } from "lucide-react";
import StatsCard from "./stats-card";

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-4">
      <StatsCard
        icon={CircleUser}
        color="green"
        percent="10.6%"
        value="25.3K"
        label="Followers"
        positive={true}
      />

      <StatsCard
        icon={Heart}
        color="red"
        percent="35.7%"
        value="45.6K"
        label="Total Hearts"
        positive={true}
      />

      <StatsCard
        icon={PlayCircle}
        color="sky"
        percent="25.6%"
        value="64.8K"
        label="Total views"
        positive={true}
      />

      <StatsCard
        icon={Bookmark}
        color="orange"
        percent="25.6%"
        value="28.2K"
        label="Bookmarks"
        positive={false}
      />
    </div>
  );
}
