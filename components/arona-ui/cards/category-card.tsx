interface CategoryCardProps {
  title: string;
  img: string;
  bg: string;
}

const CategoryCard = ({ title, img, bg }: CategoryCardProps) => {
  return (
    <div
      className={`relative rounded-xl shadow-sm p-5 text-white h-40 overflow-hidden ${bg}`}
    >
      <h5 className="font-semibold">{title}</h5>

      <img
        src={img}
        alt={title}
        className="absolute right-0 bottom-0"
        style={{ width: "140px" }}
      />
    </div>
  );
};

export default CategoryCard;
