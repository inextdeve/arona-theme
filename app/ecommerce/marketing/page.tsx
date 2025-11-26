import StatsCards from "@/components/ecommerce/marketing/stats-cards";
import { TotalSalesChart } from "@/components/ecommerce/dashboard/total-sales-chart";
import PopularProductsCard from "@/components/ecommerce/marketing/popular-products";
import CampaignStats from "@/components/ecommerce/marketing/campaign-stats";
import VisitorsGrowthCard from "@/components/ecommerce/marketing/visitors-growth-card";
import SocialLeadsCard from "@/components/ecommerce/marketing/social-leads-card";
import OrderStatusCard from "@/components/ecommerce/marketing/order-status-card";
import SalesViewsChart from "@/components/ecommerce/marketing/sales-views";

const Page = () => {
  return (
    <div>
      <StatsCards />
      {/* Add country sales, Popular products, Recent Transaction */}
      <div>
        <div className="grid md:grid-cols-2 gap-4">
          <TotalSalesChart />
          <PopularProductsCard />
        </div>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          <CampaignStats />
          <VisitorsGrowthCard />
          <SocialLeadsCard />
        </div>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          <OrderStatusCard />
          <SalesViewsChart />
        </div>
      </div>
    </div>
  );
};

export default Page;
