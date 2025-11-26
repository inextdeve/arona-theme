import DashboardHeader from "@/components/ecommerce/dashboard/header";
import NewCustomersList from "@/components/ecommerce/dashboard/new-customers-list";
import RecentOrdersCard from "@/components/ecommerce/dashboard/recent-orders-carsd";
import StatsCards from "@/components/ecommerce/dashboard/stats-cards";
import { TotalSalesChart } from "@/components/ecommerce/dashboard/total-sales-chart";

const Page = () => {
  return (
    <div>
      <div>
        <DashboardHeader />
      </div>
      <div>
        <div className="grid xxl:grid-cols-2 gap-4">
          <TotalSalesChart />
          <StatsCards />
        </div>
        <div className="grid xxl:grid-cols-3 gap-4">
          <RecentOrdersCard />
          <NewCustomersList />
        </div>
      </div>
    </div>
  );
};

export default Page;
