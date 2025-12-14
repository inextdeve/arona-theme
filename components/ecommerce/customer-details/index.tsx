"use client";
import ProfileCard from "@/components/arona-ui/profile-card";
import CustomerNotes from "./customer-notes";
import { WishlistTable } from "../order-details/wishlist_order_components";
import { WishlistItems } from "../order-details";
import { OrderTable } from "../orders/order-table/order-table";
import { orders } from "../orders/orders";
import RatingsReviewsTable from "./ratings-reviews-table";
const notes = [
  {
    text: "It is a long established fact that a reader will be distracted.",
    date: "10 Apr, 2022",
  },
  {
    text: "Various versions have evolved over the years.",
    date: "15 Apr, 2022",
  },
  { text: "There are many variations of passages.", date: "15 Apr, 2022" },
  {
    text: "Lorem ipsum is placeholder text commonly used.",
    date: "18 Apr, 2022",
  },
];
const reviews = [
  {
    productName: "Women Pink Floral Printed Panelled Pure Cotton",
    rating: 3.5,
    review:
      "This is a very awesome product. It has good quality. I suggest everyone to use this.",
    status: "Completed",
    date: "Jun 12, 12:56 PM",
  },
  {
    productName: "Women Pink Floral Printed Panelled Pure Cotton",
    rating: 4.5,
    review: "Very good material and very comfortable. Worth the money.",
    status: "Failed",
    date: "Jun 12, 12:56 PM",
  },
];

const CustomerDetails = () => {
  return (
    <div className="grid gap-4 lg:grid-cols-3 items-stretch">
      <ProfileCard
        className="lg:col-span-1 col-span-3"
        coverImage="/assets/images/bg-01.jpg"
        avatar="/assets/images/avatars/06.png"
        name="Julinee Moree"
        role="Marketing Executive"
        social={{
          linkedin: "#",
          twitter: "#",
          facebook: "#",
          youtube: "#",
        }}
        stats={{
          posts: "798",
          following: "48K",
          followers: "24.3M",
        }}
        contact={{
          address: "123 Street Name, City, Australia",
          email: "mail.com",
          phone: ["Toll Free (123) 472-796", "Mobile: +91-9910XXXX"],
        }}
      />

      <CustomerNotes
        className="col-span-3 lg:col-span-2"
        title="Send Notes to Customer"
        placeholder="Write something..."
        buttonLabel="Add Message"
        notes={notes}
        onAddNote={(text) => console.log("New Note:", text)}
      />
      <div className="col-span-3">
        <WishlistTable items={WishlistItems} />
      </div>
      <div className="col-span-3">
        <OrderTable orders={orders} />
      </div>
      <div className="col-span-3">
        <RatingsReviewsTable
          title="Ratings & Reviews"
          count={reviews.length}
          data={reviews}
        />
      </div>
    </div>
  );
};

export default CustomerDetails;
