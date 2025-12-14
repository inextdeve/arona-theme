import { CustomerRow } from "./customer-row";

export function CustomerTable({ customers }: { customers: any[] }) {
  return (
    <div className="border rounded-xl mt-6 overflow-hidden">
      <div className="overflow-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="p-3">
                <input type="checkbox" />
              </th>
              <th className="p-3 text-left">Customers</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Orders</th>
              <th className="p-3 text-left">Total Spent</th>
              <th className="p-3 text-left">Location</th>
              <th className="p-3 text-left">Last Seen</th>
              <th className="p-3 text-left">Last Order</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer) => (
              <CustomerRow key={customer.id} customer={customer} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
