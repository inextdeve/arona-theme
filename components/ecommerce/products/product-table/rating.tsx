import { Star } from "lucide-react";

export function Rating({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-1 text-yellow-500">
      <Star className="h-4 w-4 fill-yellow-500" />
      <span className="text-sm text-foreground">{value.toFixed(1)}</span>
    </div>
  );
}
