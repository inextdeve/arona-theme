import { BreadcrumbNav } from "../../arona-ui/breadcrumb-nav";
import { CustomerStatusFilter } from "./customer-filter";
import { CustomerTable } from "./customer-table/customer-table";
import { FiltersToolbar } from "./toolbar/toolbar";

const customers = [
  {
    id: "#2415",
    price: "$87",
    name: "John Doe",
    avatar: "/assets/images/avatars/01.png",
    email: "jhonedoe@inext.dev",
    orders: "87",
    total_spent: "$3586",
    location: "England",
    last_seen: "24 min ago",
    last_order: "Nov 12, 10:45 PM",
  },
  {
    id: "#2416",
    price: "$120",
    name: "Jane Smith",
    avatar: "/assets/images/avatars/02.png",
    email: "janesmith@inext.dev",
    orders: "45",
    total_spent: "$2450",
    location: "USA",
    last_seen: "1 hour ago",
    last_order: "Nov 11, 3:30 PM",
  },
  {
    id: "#2417",
    price: "$75",
    name: "Alice Johnson",
    avatar: "/assets/images/avatars/03.png",
    email: "alicejohnson@inext.dev",
    orders: "32",
    total_spent: "$1500",
    location: "Canada",
    last_seen: "2 hours ago",
    last_order: "Nov 10, 5:00 PM",
  },
  {
    id: "#2418",
    price: "$95",
    name: "Michael Brown",
    avatar: "/assets/images/avatars/04.png",
    email: "michaelbrown@inext.dev",
    orders: "67",
    total_spent: "$3200",
    location: "Australia",
    last_seen: "30 min ago",
    last_order: "Nov 12, 9:15 AM",
  },
  {
    id: "#2419",
    price: "$110",
    name: "Emily Davis",
    avatar: "/assets/images/avatars/05.png",
    email: "emilydavis@inext.dev",
    orders: "54",
    total_spent: "$2800",
    location: "Germany",
    last_seen: "3 hours ago",
    last_order: "Nov 9, 8:45 PM",
  },
  {
    id: "#2420",
    price: "$130",
    name: "Chris Wilson",
    avatar: "/assets/images/avatars/06.png",
    email: "chriswilson@inext.dev",
    orders: "78",
    total_spent: "$4000",
    location: "France",
    last_seen: "15 min ago",
    last_order: "Nov 12, 11:00 AM",
  },
  {
    id: "#2421",
    price: "$85",
    name: "Sophia Martinez",
    avatar: "/assets/images/avatars/01.png",
    email: "sophiamartinez@inext.dev",
    orders: "39",
    total_spent: "$1900",
    location: "Spain",
    last_seen: "4 hours ago",
    last_order: "Nov 8, 6:30 PM",
  },
  {
    id: "#2422",
    price: "$140",
    name: "David Lee",
    avatar: "/assets/images/avatars/02.png",
    email: "davidlee@inext.dev",
    orders: "91",
    total_spent: "$4500",
    location: "South Korea",
    last_seen: "10 min ago",
    last_order: "Nov 12, 12:00 PM",
  },
  {
    id: "#2423",
    price: "$100",
    name: "Olivia Taylor",
    avatar: "/assets/images/avatars/05.png",
    email: "oliviataylor@inext.dev",
    orders: "50",
    total_spent: "$2500",
    location: "Italy",
    last_seen: "5 hours ago",
    last_order: "Nov 7, 7:15 PM",
  },
  {
    id: "#2424",
    price: "$115",
    name: "James Anderson",
    avatar: "/assets/images/avatars/06.png",
    email: "jamesanderson@inext.dev",
    orders: "60",
    total_spent: "$3000",
    location: "Netherlands",
    last_seen: "20 min ago",
    last_order: "Nov 12, 10:30 AM",
  },
  {
    id: "#2425",
    price: "$90",
    name: "Isabella Thomas",
    avatar: "/assets/images/avatars/08.png",
    email: "isabellathomas@inext.dev",
    orders: "42",
    total_spent: "$2100",
    location: "Brazil",
    last_seen: "6 hours ago",
    last_order: "Nov 6, 4:45 PM",
  },
];

const Customers = () => {
  return (
    <div>
      <div className="flex flex-col gap-8">
        <BreadcrumbNav items={["", "ecommerce", "customers"]} />
        <CustomerStatusFilter
          active="All"
          items={[
            { label: "All", count: 1661 },
            { label: "New", count: 362 },
            { label: "Checkouts", count: 85 },
            { label: "Locals", count: 154 },
            { label: "Subscribers", count: 213 },
            { label: "Top Reviews", count: 847 },
          ]}
        />
        <FiltersToolbar
          dropdowns={[
            {
              label: "Country",
              items: ["United State", "United Kingdom", "All"],
            },
            {
              label: "Source",
              items: ["Social Media", "Search Engine", "Something else"],
            },
            {
              label: "More Filters",
              items: ["Action", "Another action", "Something else"],
            },
          ]}
        />
      </div>
      <CustomerTable customers={customers} />
    </div>
  );
};
export default Customers;
