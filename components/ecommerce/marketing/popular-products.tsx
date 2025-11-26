import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";

export default function PopularProductsCard() {
  const products = [
    {
      img: "/assets/images/products/01.png",
      name: "Apple Hand Watch",
      sale: 258,
      price: 199,
      change: "+12%",
      up: true,
    },
    {
      img: "/assets/images/products/02.png",
      name: "Mobile Phone Set",
      sale: 169,
      price: 159,
      change: "+14%",
      up: true,
    },
    {
      img: "/assets/images/products/04.png",
      name: "Grey Shoes Pair",
      sale: 859,
      price: 279,
      change: "-12%",
      up: false,
    },
    {
      img: "/assets/images/products/05.png",
      name: "Blue Yoga Mat",
      sale: 328,
      price: 389,
      change: "+25%",
      up: true,
    },
    {
      img: "/assets/images/products/06.png",
      name: "White Water Bottle",
      sale: 992,
      price: 584,
      change: "-25%",
      up: false,
    },
  ];

  return (
    <div className="w-full flex">
      <Card className="w-full rounded-2xl shadow">
        <CardHeader className="flex flex-row items-start justify-between">
          <CardTitle className="text-lg font-semibold">
            Popular Products
          </CardTitle>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-1 rounded hover:bg-gray-100">
                <MoreVertical className="w-5 h-5" />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem>Action</DropdownMenuItem>
              <DropdownMenuItem>Another action</DropdownMenuItem>
              <DropdownMenuItem>Something else</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          {products.map((p, i) => (
            <div key={i} className="flex items-center gap-3">
              <Image
                src={p.img}
                alt={p.name}
                width={55}
                height={55}
                className="rounded-full"
              />

              <div className="grow">
                <h6 className="font-semibold">{p.name}</h6>
                <p className="text-sm text-gray-500">Sale: {p.sale}</p>
              </div>

              <div className="text-center">
                <h6 className="font-semibold">${p.price}</h6>
                <p
                  className={`text-sm ${
                    p.up ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {p.change}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
