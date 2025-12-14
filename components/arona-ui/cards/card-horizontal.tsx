import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const CardHorizontal = ({ className }: { className?: string }) => {
  return (
    <Card
      className={`${className} md:max-w-lg max-w-full py-0 sm:flex-row sm:gap-0`}
    >
      <CardContent className="grow px-0">
        <div className="relative w-full h-full">
          <Image
            src="/assets/images/bg-01.jpg"
            alt="Banner"
            className="size-full rounded-l-xl"
            fill
            objectFit="cover"
          />
        </div>
      </CardContent>
      <div className="sm:min-w-54">
        <CardHeader className="pt-6">
          <CardTitle>Dreamy Colorwave Gradient</CardTitle>
          <CardDescription>
            A smooth blend of vibrant pinks, purples, and blues for a magical
            touch.
          </CardDescription>
        </CardHeader>
        <CardFooter className="gap-3 py-6">
          <Button className="bg-transparent bg-linear-to-br from-purple-500 to-pink-500 text-white focus-visible:ring-pink-600/20">
            Explore More
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default CardHorizontal;
