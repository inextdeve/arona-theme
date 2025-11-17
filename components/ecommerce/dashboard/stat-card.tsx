import { Card, CardContent } from "@/components/ui/card";
import { Icon, ShoppingBasket, TrendingUp } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  bottomTitle: string;
  rate: number;
  icon: React.ReactNode;
}

const StatCard = ({ title, value, bottomTitle, rate, icon }: StatCardProps) => {
  return (
    <Card className="p-5">
      <CardContent className="p-0">
        <div className="flex items-center justify-between">
          {/* Text */}
          <div>
            <h3 className="text-lg mb-2">{title}</h3>
            <h2 className="text-3xl font-semibold">{value}</h2>
          </div>

          {/* Icon */}
          <div className="w-[75px] h-[75px] rounded-full bg-primary text-white flex items-center justify-center">
            {icon}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex items-center justify-between mt-5">
          <p className="text-sm">{bottomTitle}</p>

          <span className="flex items-center gap-1 bg-green-50 border border-green-500 text-green-600 px-2 py-1 rounded">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm">{rate}%</span>
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
