import StatsCards from "@/components/ecommerce/marketing/stats-cards";
import { TotalSalesChart } from "@/components/ecommerce/dashboard/total-sales-chart";

const Page = () => {
  return (
    <div>
      <StatsCards />
      {/* Add country sales, Popular products, Recent Transaction */}
      <div>
        <div className="grid md:grid-cols-2 gap-4">
          <TotalSalesChart />
        </div>
      </div>
    </div>
  );
};

export default Page;
