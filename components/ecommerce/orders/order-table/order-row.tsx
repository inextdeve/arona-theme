import Image from "next/image";
import { RowActionsDropdown } from "./row-actions-dropdown";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export function OrderRow({ order }: any) {
  return (
    <tr className="border-b hover:bg-accent/50">
      <td className="p-3">
        <input type="checkbox" />
      </td>
      <td className="p-3">{order.id}</td>
      <td className="p-3">{order.price}</td>
      <td className="p-3">
        <div className="flex items-center gap-3">
          <Image
            width={800}
            height={100}
            src={order.customer.avatar}
            alt={order.customer.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="font-medium">{order.customer.name}</div>
          </div>
        </div>
      </td>

      <td className={cn("p-3")}>
        <Badge
          className={cn("inline-block mr-2", {
            "bg-green-500/20 text-green-700":
              order.payment_status === "Completed",
            "bg-blue-500/20 text-blue-700":
              order.payment_status === "Incomplete",
            "bg-yellow-500/20 text-yellow-700":
              order.payment_status === "Pending Payment",
            "bg-red-500/20 text-red-700": order.payment_status === "Failed",
          })}
        >
          {order.payment_status}
        </Badge>
      </td>

      <td className="p-3">{order.completed_payment}</td>

      <td className="p-3">{order.delivery_type}</td>
      <td className="p-3">{order.date}</td>

      <td className="p-3">
        <RowActionsDropdown />
      </td>
    </tr>
  );
}
