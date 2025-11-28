import { BreadcrumbNav } from "../../arona-ui/breadcrumb-nav";
import { ProductStatusFilter } from "./product-filter";
import { ProductTable } from "./product-table/product-table";
import { FiltersToolbar } from "./toolbar/toolbar";

const products = [
  {
    id: 1,
    name: "Iphone 16 pro max",
    category: "Electronics",
    subcategory: "Mobiles",
    price: 899,
    image: "/assets/images/orders/01.jpg",
    rating: 5,
    tags: ["Jeans", "iPhone", "Laptops", "Mobiles", "Wallets"],
    vendor: "Apple Inc.",
    date: "Nov 12, 10:45 PM",
  },
  {
    id: 2,
    name: "Apple Watch Series 9",
    category: "Electronics",
    subcategory: "Mobiles",
    price: 499,
    image: "/assets/images/orders/02.jpg",
    rating: 5,
    tags: ["Watches", "Accessories", "Jewleries"],
    vendor: "Apple Inc.",
    date: "Nov 13, 10:45 PM",
  },
  {
    id: 3,
    name: "Nike Air Max 270",
    category: "Footwear",
    subcategory: "Shoes",
    price: 150,
    image: "/assets/images/orders/03.jpg",
    rating: 5,
    tags: ["Shoes", "Footwear", "Sport"],
    vendor: "Nike",
    date: "Nov 12, 10:45 PM",
  },
  {
    id: 4,
    name: "T-Shirt Summer Vibes",
    category: "Apparel",
    subcategory: "T-Shirts",
    price: 29,
    image: "/assets/images/orders/04.jpg",
    rating: 5,
    tags: ["Apparel", "T-Shirts", "Outwear", "Summer", "Men"],
    vendor: "Just Fashion",
    date: "Nov 12, 10:45 PM",
  },
  {
    id: 5,
    name: "Durable Soccer Ball",
    category: "Sports",
    subcategory: "Balls",
    price: 25,
    image: "/assets/images/orders/10.jpg",
    rating: 4,
    tags: ["Sports", "Ball", "Soccer", "Outdoor"],
    vendor: "ProSport",
    date: "Nov 14, 09:20 AM",
  },
  {
    id: 6,
    name: "Samsung Galaxy S24",
    category: "Electronics",
    subcategory: "Mobiles",
    price: 799,
    image: "/assets/images/orders/07.jpg",
    rating: 5,
    tags: ["Samsung", "Android", "Mobiles", "Smartphone"],
    vendor: "Samsung",
    date: "Nov 14, 02:15 PM",
  },
  {
    id: 7,
    name: "Classic Blue Jeans",
    category: "Apparel",
    subcategory: "Jeans",
    price: 59,
    image: "/assets/images/orders/06.jpg",
    rating: 4,
    tags: ["Apparel", "Jeans", "Denim", "Men"],
    vendor: "Levi's",
    date: "Nov 13, 11:30 AM",
  },
  {
    id: 8,
    name: "Pro Basketball Shoes",
    category: "Footwear",
    subcategory: "Basketball Shoes",
    price: 120,
    image: "/assets/images/orders/09.jpg",
    rating: 5,
    tags: ["Shoes", "Basketball", "Sport", "High-top"],
    vendor: "Nike",
    date: "Nov 15, 06:00 PM",
  },
  {
    id: 9,
    name: "Everyday Casual Shoes",
    category: "Footwear",
    subcategory: "Shoes",
    price: 75,
    image: "/assets/images/orders/05.jpg",
    rating: 4,
    tags: ["Shoes", "Casual", "Comfort", "Men"],
    vendor: "Adidas",
    date: "Nov 12, 08:15 AM",
  },
  {
    id: 10,
    name: "Everyday Casual Shoes",
    category: "Footwear",
    subcategory: "Shoes",
    price: 75,
    image: "/assets/images/orders/05.jpg",
    rating: 4,
    tags: ["Shoes", "Casual", "Comfort", "Men"],
    vendor: "Adidas",
    date: "Nov 12, 08:15 AM",
  },
  {
    id: 11,
    name: "UltraBook Pro 15",
    category: "Electronics",
    subcategory: "Laptops",
    price: 1299,
    image: "/assets/images/orders/08.jpg",
    rating: 5,
    tags: ["Laptops", "Ultrabook", "Portable", "SSD"],
    vendor: "TechCorp",
    date: "Nov 16, 03:30 PM",
  },
];

const Products = () => {
  return (
    <div>
      <div className="flex flex-col gap-8">
        <BreadcrumbNav items={["", "ecommerce", "products"]} />
        <ProductStatusFilter
          active="All"
          items={[
            { label: "All", count: 88754 },
            { label: "Published", count: 56242 },
            { label: "Drafts", count: 17 },
            { label: "On Discount", count: 88754 },
          ]}
        />
        <FiltersToolbar
          dropdowns={[
            {
              label: "Category",
              items: ["Action", "Another action", "Something else"],
            },
            {
              label: "Vendor",
              items: ["Action", "Another action", "Something else"],
            },
            {
              label: "Collection",
              items: ["Action", "Another action", "Something else"],
            },
          ]}
        />
      </div>
      <ProductTable products={products} />
    </div>
  );
};
export default Products;
