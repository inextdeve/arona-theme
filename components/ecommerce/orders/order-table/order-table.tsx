import { OrderRow } from "./order-row";

export function OrderTable({ orders }: { orders: any[] }) {
  return (
    <div className="border rounded-xl mt-6 overflow-hidden">
      <div className="overflow-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="p-3">
                <input type="checkbox" />
              </th>
              <th className="p-3 text-left">Order Id</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Customer</th>
              <th className="p-3 text-left">Payment Status</th>
              <th className="p-3 text-left">Completed Payment</th>
              <th className="p-3 text-left">Delivery Type</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <OrderRow key={order.id} order={order} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
