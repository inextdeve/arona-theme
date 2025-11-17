import { DollarSign, ShoppingBasket, User2 } from "lucide-react";
import SalesOverviewCard from "./sales-overview-card";
import StatCard from "./stat-card";

export default function StatsCards() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-1 gap-4">
        <StatCard
          title="Orders"
          bottomTitle="4.75% Increase in orders last week"
          value="20,705"
          rate={4.75}
          icon={<ShoppingBasket size={32} />}
        />
        <StatCard
          title="Total Customers"
          bottomTitle="Total visitors decreased by 1.25%"
          value="84,127"
          rate={1.25}
          icon={<User2 size={32} />}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-1 gap-4">
        <StatCard
          title="Total Revenue"
          bottomTitle="Revenue increases this month"
          value="$15,278"
          rate={3.15}
          icon={<DollarSign size={32} />}
        />
        <SalesOverviewCard />
      </div>
    </div>
  );
}
