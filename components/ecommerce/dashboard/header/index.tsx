import DashHeadCard from "./dash-head-card";

const DashboardHeader = () => {
  return (
    <div className="flex bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm gap-4 overflow-x-auto mb-4">
      <DashHeadCard />
    </div>
  );
};
export default DashboardHeader;
