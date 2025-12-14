import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { BanknoteArrowDown, Printer } from "lucide-react";

export function RefundDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <BanknoteArrowDown />
          Refund
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem>Action</DropdownMenuItem>
        <DropdownMenuItem>Another action</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Something else</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export function PrintButton() {
  return (
    <Button variant="outline">
      <Printer />
      Print
    </Button>
  );
}
export function MoreActionsDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">More Actions</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem>Action</DropdownMenuItem>
        <DropdownMenuItem>Another action</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Something else</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function HeaderCard({
  orderId,
  customerId,
  actions = [],
}: {
  orderId: string | number;
  customerId: string | number;
  actions?: React.ReactNode[];
}) {
  return (
    <div className="rounded-2xl border bg-white shadow-sm">
      <div className="p-6">
        <div className="flex flex-col lg:flex-row justify-between gap-3 lg:items-center">
          {/* LEFT SIDE */}
          <div className="flex-grow">
            <h4 className="text-xl font-bold">Order #{orderId}</h4>
            <p className="text-sm">
              Customer ID:{" "}
              <a className="text-blue-600 hover:underline" href="#">
                {customerId}
              </a>
            </p>
          </div>

          {/* RIGHT SIDE — Actions */}
          <div className="flex gap-2 flex-wrap">{actions}</div>
        </div>
      </div>
    </div>
  );
}

export default function OrderHeaderCard() {
  return (
    <HeaderCard
      orderId="849"
      customerId="6589743"
      actions={[
        <PrintButton key="p" />,
        <RefundDropdown key="r" />,
        <MoreActionsDropdown key="m" />,
      ]}
    />
  );
}
