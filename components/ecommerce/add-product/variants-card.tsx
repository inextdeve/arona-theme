"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function VariantsCard() {
  return (
    <Card className="border rounded-xl shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg">Variants</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid gap-4">
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="Brand">Brand</Label>
            <Input id="Brand" placeholder="Brand" />
          </div>

          {/* SKU */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="SKU">SKU</Label>
            <Input id="SKU" placeholder="SKU" />
          </div>

          {/* Color */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="Color">Color</Label>
            <Input id="Color" placeholder="Color" />
          </div>

          {/* Size */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="Size">Size</Label>
            <Input id="Size" placeholder="Size" />
          </div>

          {/* Add Variant Button */}
          <div className="w-full">
            <Button className="w-full">Add Variant</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
