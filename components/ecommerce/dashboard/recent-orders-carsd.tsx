"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MoreVertical, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Order {
  name: string;
  image: string;
  amount: string | number;
  vendor: string;
  status: "Completed" | "Pending" | "Canceled";
  rating: number;
}

interface OrderCardProps {
  title?: string;
  orders: Order[];
}

function OrdersCard({ title = "Recent Orders", orders }: OrderCardProps) {
  const [search, setSearch] = useState("");

  const filteredOrders = orders.filter((order) =>
    order.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Card className="w-full rounded-2xl min-h-[500px] lg:col-span-2">
      {/* Header */}
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-bold">{title}</CardTitle>

        <button className="p-1 rounded hover:bg-muted/50">
          <MoreVertical className="h-5 w-5" />
        </button>
      </CardHeader>

      <CardContent>
        {/* Search */}
        <div className="relative my-3">
          <Input
            placeholder="Search"
            className="pl-10 rounded-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            🔍
          </span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-muted-foreground border-b">
              <tr>
                <th className="py-2">Item Name</th>
                <th className="py-2">Amount</th>
                <th className="py-2">Vendor</th>
                <th className="py-2">Status</th>
                <th className="py-2">Rating</th>
              </tr>
            </thead>

            <tbody>
              {filteredOrders.map((item, idx) => (
                <tr key={idx} className="border-b last:border-none">
                  <td className="py-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <p>{item.name}</p>
                    </div>
                  </td>

                  <td className="py-3">{item.amount}</td>
                  <td className="py-3">{item.vendor}</td>

                  <td className="py-3">
                    <span
                      className={`
                        px-2 py-1 rounded-md text-xs
                        ${
                          item.status === "Completed"
                            ? "bg-green-100 text-green-600"
                            : ""
                        }
                        ${
                          item.status === "Pending"
                            ? "bg-yellow-100 text-yellow-600"
                            : ""
                        }
                        ${
                          item.status === "Canceled"
                            ? "bg-red-100 text-red-600"
                            : ""
                        }
                      `}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="py-3">
                    <div className="flex items-center gap-1">
                      <p>{item.rating}</p>
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredOrders.length === 0 && (
            <p className="text-center text-muted-foreground py-6">
              No results found.
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

const orders: Order[] = [
  {
    name: "Sports Shoes",
    image: "/assets/images/products/01.png",
    amount: "$149",
    vendor: "Julia Sunota",
    status: "Completed",
    rating: 5.0,
  },
  {
    name: "Goldan Watch",
    image: "/assets/images/products/02.png",
    amount: "$168",
    vendor: "Julia Sunota",
    status: "Completed",
    rating: 5.0,
  },
  {
    name: "Men Polo Tshirt",
    image: "/assets/images/products/03.png",
    amount: "$124",
    vendor: "Julia Sunota",
    status: "Pending",
    rating: 4.0,
  },
  {
    name: "Blue Jeans Casual",
    image: "/assets/images/products/04.png",
    amount: "$289",
    vendor: "Julia Sunota",
    status: "Completed",
    rating: 3.0,
  },
  {
    name: "Fancy Shirts",
    image: "/assets/images/products/06.png",
    amount: "$389",
    vendor: "Julia Sunota",
    status: "Canceled",
    rating: 2.0,
  },
];

export default function RecentOrdersCard() {
  return <OrdersCard title="Recent Orders" orders={orders} />;
}
