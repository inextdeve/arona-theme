import CardActionDemo from "@/components/arona-ui/cards/card-action-demo";
import CardHorizontal from "@/components/arona-ui/cards/card-horizontal";
import CardPost from "@/components/arona-ui/cards/card-post";
import CardSoftDemo from "@/components/arona-ui/cards/card-sof";
import CategoryCard from "@/components/arona-ui/cards/category-card";
import ProductCard from "@/components/arona-ui/cards/product-card";
import ProductCard2 from "@/components/arona-ui/cards/product-card-2";
import ProfileCard2 from "@/components/arona-ui/cards/profile-card-2";
import ProfileCard from "@/components/arona-ui/profile-card";

const profile = {
  img: "/assets/images/avatars/02.png",
  name: "Michle Web",
  role: "UI Developer",
  stats: { posts: 798, following: "48K", followers: "24.3M" },
};

const categories = [
  {
    title: "Women Clothes",
    img: "/assets/images/categories/women-clothes.png",
    bg: "bg-grd-voilet",
  },
  {
    title: "Men Clothes",
    img: "/assets/images/categories/shop-men.png",
    bg: "bg-grd-primary",
  },
  {
    title: "Airpods",
    img: "/assets/images/categories/airpods.png",
    bg: "bg-grd-success",
  },
  {
    title: "Furniture",
    img: "/assets/images/categories/furniture.png",
    bg: "bg-grd-danger",
  },
  {
    title: "Hand Watch",
    img: "/assets/images/categories/watch.png",
    bg: "bg-grd-deep-blue",
  },
  {
    title: "Shoes Pair",
    img: "/assets/images/categories/shoes.png",
    bg: "bg-grd-warning",
  },
];

const Page = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="mt-2 grid sm:grid-cols-2 gap-4">
        <div className="grid md:grid-cols-2 gap-4">
          {categories.map((item, index) => (
            <CategoryCard key={index} {...item} />
          ))}
        </div>
        <div className="grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <ProfileCard2 {...profile} />
            <ProfileCard2 {...profile} />
          </div>
          <CardSoftDemo />
        </div>
      </div>

      <div className="mt-4 grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        <CardHorizontal />
        <CardActionDemo />
        <ProfileCard
          className="lg:col-span-1"
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
        <div className="grid gap-4">
          <ProductCard2 />

          <CardActionDemo />
          <CardPost />
        </div>
      </div>
    </div>
  );
};

export default Page;
