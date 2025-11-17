import StatsCards from "@/components/ecommerce/dashboard/stats-cards";
import { TotalSalesChart } from "@/components/ecommerce/dashboard/total-sales-chart";

const Page = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <TotalSalesChart />
      <StatsCards />
    </div>
  );
};

export default Page;
