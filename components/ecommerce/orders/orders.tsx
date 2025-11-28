import { BreadcrumbNav } from "../../arona-ui/breadcrumb-nav";
import { OrderStatusFilter } from "./order-filter";
import { OrderTable } from "./order-table/order-table";
import { FiltersToolbar } from "./toolbar/toolbar";

const orders = [
  {
    id: "#2415",
    price: "$87",
    customer: {
      name: "John Doe",
      avatar: "/assets/images/avatars/avatar-1.jpg",
    },
    payment_status: "Completed",
    completed_payment: "$87",
    delivery_type: "Cash on Delivery",
    date: "Nov 12, 10:45 PM",
  },
  {
    id: "#2416",
    price: "$129",
    customer: {
      name: "Emily Carter",
      avatar: "/assets/images/avatars/avatar-2.jpg",
    },
    payment_status: "Pending Payment",
    completed_payment: "$0",
    delivery_type: "Standard Shipping",
    date: "Nov 13, 09:12 AM",
  },
  {
    id: "#2417",
    price: "$42",
    customer: {
      name: "Michael Brown",
      avatar: "/assets/images/avatars/avatar-3.jpg",
    },
    payment_status: "Incomplete",
    completed_payment: "$0",
    delivery_type: "Pick up",
    date: "Oct 30, 02:45 PM",
  },
  {
    id: "#2418",
    price: "$299",
    customer: {
      name: "Sophia Lee",
      avatar: "/assets/images/avatars/avatar-4.jpg",
    },
    payment_status: "Completed",
    completed_payment: "$299",
    delivery_type: "Express Delivery",
    date: "Dec 01, 08:00 AM",
  },
  {
    id: "#2419",
    price: "$15",
    customer: {
      name: "Liam Johnson",
      avatar: "/assets/images/avatars/avatar-5.jpg",
    },
    payment_status: "Refunded",
    completed_payment: "$0",
    delivery_type: "Digital Product",
    date: "Nov 01, 11:20 PM",
  },
  {
    id: "#2420",
    price: "$68",
    customer: {
      name: "Olivia Martinez",
      avatar: "/assets/images/avatars/avatar-6.jpg",
    },
    payment_status: "Failed",
    completed_payment: "$0",
    delivery_type: "Cash on Delivery",
    date: "Sep 21, 07:34 AM",
  },
  {
    id: "#2421",
    price: "$220",
    customer: {
      name: "Noah Wilson",
      avatar: "/assets/images/avatars/avatar-7.jpg",
    },
    payment_status: "Completed",
    completed_payment: "$220",
    delivery_type: "Standard Shipping",
    date: "Aug 05, 04:10 PM",
  },
  {
    id: "#2422",
    price: "$54",
    customer: {
      name: "Ava Davis",
      avatar: "/assets/images/avatars/avatar-8.jpg",
    },
    payment_status: "Pending Payment",
    completed_payment: "$0",
    delivery_type: "Express Delivery",
    date: "Jul 19, 06:55 PM",
  },
  {
    id: "#2423",
    price: "$430",
    customer: {
      name: "James Miller",
      avatar: "/assets/images/avatars/avatar-9.jpg",
    },
    payment_status: "Completed",
    completed_payment: "$430",
    delivery_type: "Standard Shipping",
    date: "Jun 03, 01:05 PM",
  },
  {
    id: "#2424",
    price: "$11",
    customer: {
      name: "Mia Garcia",
      avatar: "/assets/images/avatars/avatar-10.jpg",
    },
    payment_status: "Incomplete",
    completed_payment: "$0",
    delivery_type: "Pick up",
    date: "May 27, 10:30 AM",
  },
];

const Orders = () => {
  return (
    <div>
      <div className="flex flex-col gap-8">
        <BreadcrumbNav items={["", "ecommerce", "orders"]} />
        <OrderStatusFilter
          active="All"
          items={[
            { label: "All", count: 8389 },
            { label: "Pending Payment", count: 7458 },
            { label: "Incomplete", count: 20 },
            { label: "Completed", count: 158 },
            { label: "Refunded", count: 58 },
            { label: "Failed", count: 695 },
          ]}
        />
        <FiltersToolbar
          dropdowns={[
            {
              label: "Payment Status",
              items: ["Action", "Another action", "Something else"],
            },
            {
              label: "Completed",
              items: ["Action", "Another action", "Something else"],
            },
            {
              label: "More Filters",
              items: ["Action", "Another action", "Something else"],
            },
          ]}
        />
      </div>
      <OrderTable orders={orders} />
    </div>
  );
};
export default Orders;
