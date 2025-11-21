import NewCustomers from "./new-customers-card";
import SalesCard from "./sales-card";
import ViewsCard from "./views-card";

const DashboardHeader = () => {
  return (
    <div className="flex bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm gap-4 overflow-x-auto mb-4">
      <NewCustomers />
      <ViewsCard />
      <SalesCard />
    </div>
  );
};
export default DashboardHeader;
