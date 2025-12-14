"use client";
import { BreadcrumbNav } from "@/components/arona-ui/breadcrumb-nav";
import OrderHeaderCard from "./order-header-card";
import {
  OrderStatusCard,
  OrderSummaryCard,
  WishlistTable,
} from "./wishlist_order_components";
import DetailCards from "./details-card";

export const WishlistItems = [
  {
    id: "1",
    image: "/assets/images/orders/01.jpg",
    title: "Iphone 16 Pro Max",
    category: "Electronics",
    color: "Blue",
    size: "512GB",
    quantity: 1,
    price: 899,
    total: 899,
  },
  {
    id: "2",
    image: "/assets/images/orders/07.jpg",
    title: "Samsung Galaxy S23 Ultra",
    category: "Electronics",
    color: "Black",
    size: "256GB",
    quantity: 1,
    price: 1199,
    total: 1199,
  },
  {
    id: "3",
    image: "/assets/images/orders/11.jpg",
    title: "Sony WH-1000XM5 Headphones",
    category: "Accessories",
    color: "Silver",
    size: "One Size",
    quantity: 1,
    price: 399,
    total: 399,
  },
  {
    id: "4",
    image: "/assets/images/orders/04.jpg",
    title: "Apple MacBook Pro 14-inch",
    category: "Computers",
    color: "Space Gray",
    size: "1TB",
    quantity: 1,
    price: 2499,
    total: 2499,
  },
  {
    id: "5",
    image: "/assets/images/orders/05.jpg",
    title: "Nike Air Max 270",
    category: "Footwear",
    color: "White/Black",
    size: "10",
    quantity: 1,
    price: 150,
    total: 150,
  },
];
const customerDetails = {
  name: "Jhon Maxwell",
  email: "abc@example.com",
  phone: "+01-585XXXXXXX",
  shippingDate: "15 Dec, 2022",
  giftOrder: "Gift voucher has available",
  address1: "123 Street Name, City, Australia",
  shippingAddress: "198 Street Name, City, United States",
};

const OrderDetails = () => {
  return (
    <div>
      <BreadcrumbNav items={["", "ecommerce", "orders details"]} />
      <div className="mt-6">
        <OrderHeaderCard />
        <div className="grid grid-cols-3 gap-4 my-4">
          <div className="col-span-2">
            <WishlistTable items={WishlistItems} />
          </div>
          <div className="grid gap-4">
            <OrderSummaryCard
              summary={{
                subtotal: "$789",
                discount: "-$89",
                tax: "$99",
                shipping: "$11",
                total: "$810.00",
              }}
            />
            <OrderStatusCard
              paymentStatus="done"
              completionStatus="complete"
              onChange={() => {}}
            />
          </div>
        </div>
        <h5 className="font-bold text-lg mb-4">Billing Details</h5>
        <DetailCards data={customerDetails} />
      </div>
    </div>
  );
};

export default OrderDetails;
