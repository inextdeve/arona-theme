import { Card, CardContent } from "@/components/ui/card";

export default function SalesOverviewCard() {
  return (
    <Card className="p-5 bg-primary">
      <CardContent className="">
        {/* Title */}
        <h3 className="text-white mb-4 text-lg font-semibold">
          Sales Overview
        </h3>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-between gap-4">
          <div>
            <span className="text-sm text-white block mb-1">Total Sales</span>
            <h2 className="text-xl font-semibold text-white">9,586</h2>
          </div>

          <div>
            <span className="text-sm text-white block mb-1">Monthly Sales</span>
            <h2 className="text-xl font-semibold text-white">3,507</h2>
          </div>

          <div>
            <span className="text-sm text-white block mb-1">Today’s Sales</span>
            <h2 className="text-xl font-semibold text-white">357</h2>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-primary/60 h-[3px] mb-3">
          <div className="bg-white h-[3px]" style={{ width: "80%" }} />
        </div>

        {/* Footer Label */}
        <span className="text-sm text-white block">
          20% Increase in last month
        </span>
      </CardContent>
    </Card>
  );
}
