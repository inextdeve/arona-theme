import Image from "next/image";
import { ProductTags } from "./product-tag";
import { Rating } from "./rating";
import { RowActionsDropdown } from "./row-actions-dropdown";

export function ProductRow({ product }: any) {
  return (
    <tr className="border-b hover:bg-accent/50">
      <td className="p-3">
        <input type="checkbox" />
      </td>

      <td className="p-3">
        <div className="flex items-center gap-3">
          <Image
            width={800}
            height={100}
            src={product.image}
            alt={product.name}
            className="w-14 h-10 rounded-md object-cover"
          />
          <div>
            <div className="font-medium">{product.name}</div>
            <p className="text-xs text-muted-foreground">
              Category: {product.category}
            </p>
          </div>
        </div>
      </td>

      <td className="p-3">${product.price}</td>
      <td className="p-3">{product.subcategory}</td>

      <td className="p-3">
        <ProductTags tags={product.tags} />
      </td>

      <td className="p-3">
        <Rating value={product.rating} />
      </td>

      <td className="p-3">{product.vendor}</td>
      <td className="p-3">{product.date}</td>

      <td className="p-3">
        <RowActionsDropdown />
      </td>
    </tr>
  );
}
