"use client";
import {
  DollarSign,
  GiftIcon,
  Globe,
  HeartIcon,
  RotateCw,
  Settings2,
  TableOfContents,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const tabs = [
  {
    name: "Price",
    value: "price",
    icon: DollarSign,
  },
  {
    name: "Restock",
    value: "restock",
    icon: HeartIcon,
  },
  {
    name: "Shipping",
    value: "shipping",
    icon: GiftIcon,
  },
  {
    name: "Global Delivery",
    value: "global-delivery",
    icon: Globe,
  },
  {
    name: "Attributes",
    value: "attributes",
    icon: TableOfContents,
  },
  {
    name: "Advanced",
    value: "advanced",
    icon: Settings2,
  },
];
export default function Inventory() {
  return (
    <div className="w-full mt-4">
      <h5 className="mb-3 font-semibold text-lg">Inventory</h5>
      <TooltipProvider>
        <Tabs defaultValue="price" className="flex-row gap-4">
          <TabsList className="h-full grid gap-2">
            {tabs.map(({ icon: Icon, name, value }) => (
              <span>
                <TabsTrigger
                  value={value}
                  className="flex w-full justify-start items-center gap-1"
                  aria-label="tab-trigger"
                >
                  <Icon /> {name}
                </TabsTrigger>
              </span>
            ))}
          </TabsList>
          <TabsContent
            key="price"
            value="price"
            className="ml-6 pt-3 flex gap-2"
          >
            <div className="grid gap-1">
              <Label className="w-max">Regular price</Label>
              <Input className="w-full" />
            </div>
            <div className="grid gap-1">
              <Label className="w-max">Sale price</Label>
              <Input className="w-full" />
            </div>
          </TabsContent>
          <TabsContent value="restock" key="restock">
            <div>
              <h6 className="mb-3 font-semibold">Add to Stock</h6>

              <div className="grid grid-cols-1 sm:grid-cols-8 gap-3">
                <div className="sm:col-span-5">
                  <Input type="number" placeholder="Quantity" />
                </div>

                <div className="sm:col-span-3">
                  <Button variant="outline" className="w-full">
                    Confirm
                  </Button>
                </div>
              </div>

              {/* Table equivalent */}
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Product in stock now:</span>
                  <span className="font-semibold flex items-center gap-2">
                    $2,059 <RotateCw size={16} className="cursor-pointer" />
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Product in transit:</span>
                  <span className="font-semibold">3000</span>
                </div>

                <div className="flex justify-between">
                  <span>Last time restocked:</span>
                  <span className="font-semibold">25th March, 2020</span>
                </div>

                <div className="flex justify-between">
                  <span>Total stock over lifetime:</span>
                  <span className="font-semibold">50,000</span>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent key="shipping" value="shipping">
            <div className="space-y-4">
              <h6 className="font-semibold">Shipping Type</h6>

              <RadioGroup defaultValue="admin" className="space-y-4">
                <div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="seller" id="seller" />
                    <Label htmlFor="seller" className="font-semibold">
                      Fulfilled by Seller
                    </Label>
                  </div>

                  <p className="ml-6 text-sm">
                    You’ll be responsible for delivery. Damage or delay may
                    incur fees.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="admin" id="admin" />
                    <Label
                      htmlFor="admin"
                      className="font-semibold flex items-center gap-2"
                    >
                      Fulfilled by Admin
                      <Badge variant="default">Recommended</Badge>
                    </Label>
                  </div>

                  <p className="ml-6 text-sm">
                    Your product, our responsibility. We handle the delivery for
                    a fee.
                  </p>
                </div>
              </RadioGroup>

              <p className="text-xs font-semibold">
                See our{" "}
                <a href="#" className="underline">
                  Delivery terms & conditions
                </a>
              </p>
            </div>
          </TabsContent>
          <TabsContent value="global-delivery" key="global-delivery">
            <div className="space-y-4">
              <h6 className="font-semibold">Global Delivery</h6>

              <RadioGroup defaultValue="selected" className="space-y-4">
                <div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="worldwide" id="worldwide" />
                    <Label htmlFor="worldwide" className="font-semibold">
                      Worldwide Delivery
                    </Label>
                  </div>

                  <p className="ml-6 text-sm">
                    Only available with:{" "}
                    <a href="#" className="underline">
                      Fulfilled by Admin
                    </a>
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="selected" id="selected" />
                    <Label htmlFor="selected" className="font-semibold">
                      Selected Countries
                    </Label>
                  </div>

                  <Input
                    className="ml-6 mt-2 max-w-sm"
                    placeholder="Type Country name"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="local" id="local" />
                    <Label htmlFor="local" className="font-semibold">
                      Local Delivery
                    </Label>
                  </div>

                  <p className="ml-6 text-sm">
                    Only available with:{" "}
                    <a href="#" className="underline">
                      Fulfilled by Admin
                    </a>
                  </p>
                </div>
              </RadioGroup>
            </div>
          </TabsContent>
          <TabsContent value="attributes" key="attributes">
            <div className="space-y-4">
              <h6 className="font-semibold">Attributes</h6>

              <div className="flex items-center gap-2">
                <Checkbox id="fragile" />
                <Label htmlFor="fragile">Fragile Product</Label>
              </div>

              <div className="flex items-center gap-2">
                <Checkbox id="bio" />
                <Label htmlFor="bio">Biodegradable</Label>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Checkbox id="frozen" defaultChecked />
                  <Label htmlFor="frozen">Frozen Product</Label>
                </div>

                <Input
                  placeholder="Max. allowed Temperature"
                  className="max-w-sm"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Checkbox id="expiry" defaultChecked />
                  <Label htmlFor="expiry">Expiry Date of Product</Label>
                </div>

                <Input type="date" className="max-w-sm" />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="advanced" key="advanced">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <Label className="mb-2 block">Product ID Type</Label>
                <Select defaultValue="isbn">
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="isbn">ISBN</SelectItem>
                    <SelectItem value="upc">UPC</SelectItem>
                    <SelectItem value="ean">EAN</SelectItem>
                    <SelectItem value="jan">JAN</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="mb-2 block">Product ID</Label>
                <Input placeholder="ISBN Number" />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </TooltipProvider>
    </div>
  );
}
