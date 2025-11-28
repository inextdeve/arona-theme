"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";
import { useState } from "react";

export function OrganizeCard() {
  const [tags, setTags] = useState(["Woman", "Fashion", "Furniture"]);

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return (
    <Card className="border rounded-xl shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg">Organize</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid gap-4">
          {/* Category */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="AddCategory">Category</Label>
            <Select>
              <SelectTrigger id="AddCategory">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="topwear">Topwear</SelectItem>
                <SelectItem value="bottomwear">Bottomwear</SelectItem>
                <SelectItem value="casual">Casual Tshirt</SelectItem>
                <SelectItem value="electronic">Electronic</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Collection */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="Collection">Collection</Label>
            <Input id="Collection" placeholder="Collection" />
          </div>

          {/* Tags (input) */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="Tags">Tags</Label>
            <Input id="Tags" placeholder="Tags" />
          </div>

          {/* Tags list */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="flex items-center gap-1 px-3 py-1 cursor-pointer"
                onClick={() => removeTag(tag)}
              >
                {tag}
                <X className="h-3 w-3" />
              </Badge>
            ))}
          </div>

          {/* Vendor */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="Vendor">Vendor</Label>
            <Input id="Vendor" placeholder="Vendor" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
