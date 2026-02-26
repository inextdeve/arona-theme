"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type FileManagerCardProps = {
  title: string;
  icon: React.ElementType;
  value: number | string;
  usedLabel: string;
  percentage: number; // 0–100
  actionLabel?: string;
  onActionClick?: () => void;
  color?: string;
};

const FileManagerCard = ({
  title,
  icon: Icon,
  value,
  usedLabel,
  percentage,
  actionLabel = "View more",
  onActionClick,
  color = "blue-500",
}: FileManagerCardProps) => {
  return (
    <Card className="pb-0">
      {/* Header */}
      <CardHeader className="grid grid-cols-[1fr_auto] items-start gap-1.5">
        <CardTitle className="text-sm font-semibold">{title}</CardTitle>

        <span className={`text-${color}`}>
          <Icon className="size-6" />
        </span>
      </CardHeader>

      {/* Content */}
      <CardContent className="space-y-4">
        <div className="text-2xl lg:text-3xl font-semibold">{value}</div>

        <div className="space-y-2">
          <Progress
            value={percentage}
            className="h-2"
            indicatorClassName={`bg-${color}`}
          />

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{usedLabel}</span>
            <span>{percentage}%</span>
          </div>
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="border-t px-6 py-3 flex justify-end hover:bg-gray-50 rounded-b-xl">
        <button
          onClick={onActionClick}
          className="flex items-center text-sm font-medium text-primary hover:text-primary/90"
        >
          {actionLabel}
          <ArrowRight className="ml-1 size-4" />
        </button>
      </CardFooter>
    </Card>
  );
};

export default FileManagerCard;
