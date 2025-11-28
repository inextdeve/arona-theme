"use client";

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import Link from "next/link";
import { Badge } from "../ui/badge";

type BreadcrumbNavProps = {
  items: string[]; // e.g. ["home", "products", "add"]
};

export function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const href = items.slice(0, index + 1).join("/");

          return (
            <div key={item} className="flex items-center">
              <BreadcrumbItem>
                {index === 0 && item.toLowerCase() === "" ? (
                  <BreadcrumbLink asChild>
                    <Badge variant="outline">
                      <Link href="/">Home</Link>
                    </Badge>
                  </BreadcrumbLink>
                ) : isLast ? (
                  <Badge variant="outline">
                    <span className="capitalize">{item}</span>
                  </Badge>
                ) : (
                  <BreadcrumbLink asChild>
                    <Badge variant="outline">
                      <Link href={href} className="capitalize">
                        {item}
                      </Link>
                    </Badge>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>

              {!isLast && <BreadcrumbSeparator />}
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
