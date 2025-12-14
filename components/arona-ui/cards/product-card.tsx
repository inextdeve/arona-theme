import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { StarIcon } from "lucide-react";
import Image from "next/image";
export default function ProductCard() {
  return (
    <Card className="w-full">
      <CardContent className="p-3">
        <div className="aspect-square rounded-md bg-gray-100 mb-2">
          <div className="relative flex items-center justify-center h-full text-muted-foreground text-xs">
            <Image
              alt="prod-1"
              src="/assets/images/orders/02.jpg"
              fill
              className="rounded-sm"
              objectFit="cover"
            />
          </div>
        </div>
        <CardTitle className="text-sm mb-1">Apple Watch</CardTitle>
        <CardDescription className="text-xs mb-2 line-clamp-2">
          High-quality wireless headphones
        </CardDescription>
        <div className="flex items-center space-x-1 mb-2">
          <div className="flex">
            {[1, 2, 3, 4].map((star) => (
              <StarIcon
                key={star}
                className="h-3 w-3 fill-yellow-400 text-yellow-400"
              />
            ))}
            <StarIcon className="h-3 w-3 text-gray-300" />
          </div>
          <span className="text-xs text-muted-foreground">(4.0)</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold">$199</span>
          <Button size="sm" className="text-xs px-2 py-1 h-7">
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
