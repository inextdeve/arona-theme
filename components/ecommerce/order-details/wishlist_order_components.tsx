import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

// Wishlist Table -------------------------------------------------
interface WishlistTableProps {
  items: {
    image: string;
    title: string;
    category: string;
    color: string;
    size: string;
    quantity: number;
    price: number;
    total: number;
  }[];
}
export function WishlistTable({ items }: WishlistTableProps) {
  return (
    <Card className="w-full h-full">
      <CardContent className="py-6">
        <h5 className="font-bold mb-4">
          Wishlist <span className="font-light">({items.length})</span>
        </h5>

        <div className="overflow-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="p-3">Product Name</th>
                <th className="p-3">Color</th>
                <th className="p-3">Size</th>
                <th className="p-3">Quantity</th>
                <th className="p-3">Price</th>
                <th className="p-3">Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr key={i} className="border-b">
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image}
                        className="w-16 rounded-lg"
                        alt="product-img"
                      />
                      <div>
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-xs text-muted-foreground">
                          Category: {item.category}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-3">{item.color}</td>
                  <td className="p-3">{item.size}</td>
                  <td className="p-3">{item.quantity}</td>
                  <td className="p-3">${item.price}</td>
                  <td className="p-3">${item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}

// Summary Card ---------------------------------------------------
interface OrderSummaryCardProps {
  summary: {
    subtotal: number | string;
    discount: number | string;
    tax: number | string;
    shipping: number | string;
    total: number | string;
  };
}
export function OrderSummaryCard({ summary }: OrderSummaryCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex justify-between text-sm">
          <p>Items subtotal</p>
          <p className="">{summary.subtotal}</p>
        </div>
        <div className="flex justify-between text-sm">
          <p>Discount</p>
          <p className="text-red-400">{summary.discount}</p>
        </div>
        <div className="flex justify-between text-sm">
          <p>Tax</p>
          <p>{summary.tax}</p>
        </div>
        <div className="flex justify-between text-sm">
          <p>Shipping Cost</p>
          <p>{summary.shipping}</p>
        </div>
        <div className="flex justify-between border-t pt-4 text-lg font-bold">
          <p>Total:</p>
          <p>{summary.total}</p>
        </div>
      </CardContent>
    </Card>
  );
}

// Order Status ---------------------------------------------------
interface OrderStatusCardProps {
  paymentStatus: string;
  completionStatus: string;
  onChange: (
    field: "paymentStatus" | "completionStatus",
    value: string
  ) => void;
}
export function OrderStatusCard({
  paymentStatus,
  completionStatus,
  onChange,
}: OrderStatusCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Status</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label className="mb-2">Payment Status</Label>
          <Select
            defaultValue={paymentStatus}
            value={paymentStatus}
            onValueChange={(value) => onChange("paymentStatus", value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="done">Done</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="mb-2">Completed Status</Label>
          <Select
            defaultValue={completionStatus}
            value={completionStatus}
            onValueChange={(value) => onChange("completionStatus", value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="complete">Complete</SelectItem>
              <SelectItem value="done">Done</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
}
