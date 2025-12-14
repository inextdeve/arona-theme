import Image from "next/image";
import { RowActionsDropdown } from "./row-actions-dropdown";
import { cn } from "@/lib/utils";

export function CustomerRow({ customer }: any) {
  return (
    <tr className="border-b hover:bg-accent/50">
      <td className="p-3">
        <input type="checkbox" />
      </td>
      <td className="p-3">
        <div className="flex items-center gap-3">
          <Image
            width={800}
            height={100}
            src={customer.avatar}
            alt={customer.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="font-medium">{customer.name}</div>
          </div>
        </div>
      </td>

      <td className={cn("p-3")}>{customer.email}</td>

      <td className="p-3">{customer.orders}</td>

      <td className="p-3">{customer.total_spent}</td>
      <td className="p-3">{customer.location}</td>
      <td className="p-3">{customer.last_seen}</td>
      <td className="p-3">{customer.last_order}</td>

      <td className="p-3">
        <RowActionsDropdown />
      </td>
    </tr>
  );
}
