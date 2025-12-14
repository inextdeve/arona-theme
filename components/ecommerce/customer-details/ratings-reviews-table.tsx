"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, StarHalf } from "lucide-react";

interface ReviewItem {
  productName: string;
  rating: number;
  review: string;
  status: "Completed" | "Failed" | "Pending";
  date: string;
}

interface RatingsReviewsProps {
  title: string;
  count: number;
  data: ReviewItem[];
}

export default function RatingsReviewsTable({
  title,
  count,
  data,
}: RatingsReviewsProps) {
  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-600 border border-green-300";
      case "Failed":
        return "bg-red-100 text-red-600 border border-red-300";
      case "Pending":
        return "bg-yellow-100 text-yellow-600 border border-yellow-300";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const full = Math.floor(rating);
    const half = rating % 1 !== 0;

    for (let i = 0; i < full; i++)
      stars.push(
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      );

    if (half)
      stars.push(
        <StarHalf
          key="half"
          className="w-4 h-4 fill-yellow-400 text-yellow-400"
        />
      );

    while (stars.length < 5)
      stars.push(
        <Star key={stars.length + 10} className="w-4 h-4 text-gray-300" />
      );

    return <div className="flex gap-1">{stars}</div>;
  };

  return (
    <Card>
      <CardContent className="p-6">
        <h4 className="text-lg font-bold mb-4">
          {title} <span className="font-light ml-2">({count})</span>
        </h4>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead className="bg-muted">
              <tr className="text-left text-gray-700">
                <th className="p-3">Product Name</th>
                <th className="p-3">Rating</th>
                <th className="p-3">Review</th>
                <th className="p-3">Status</th>
                <th className="p-3">Date</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, i) => (
                <tr key={i} className="border-t">
                  <td className="p-3 font-medium text-blue-600 hover:underline cursor-pointer">
                    {item.productName}
                  </td>

                  <td className="p-3">{renderStars(item.rating)}</td>

                  <td className="p-3 text-gray-700 max-w-[350px]">
                    {item.review}
                  </td>

                  <td className="p-3">
                    <Badge
                      className={`${getStatusStyles(item.status)} px-3 py-1`}
                    >
                      {item.status}
                    </Badge>
                  </td>

                  <td className="p-3 text-gray-600">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
