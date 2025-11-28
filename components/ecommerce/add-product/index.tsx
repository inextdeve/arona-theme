import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ImageInput from "./upload-images";
import Inventory from "./inventory";
import { Card, CardContent } from "@/components/ui/card";
import { ActionButtons } from "./action-buttons";
import { OrganizeCard } from "./organize-card";
import { VariantsCard } from "./variants-card";

const AddProduct = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <Card className="col-span-2">
          <CardContent>
            <div className="mb-4">
              <h5 className="mb-3 font-semibold text-lg">Product Title</h5>

              <Input
                type="text"
                placeholder="write title here...."
                className="rounded-lg"
              />
            </div>
            <div className="mb-4">
              <h5 className="mb-3 font-semibold text-lg">
                Product Description
              </h5>

              <Textarea
                placeholder="write a description here.."
                rows={6}
                className="rounded-lg"
              />
            </div>
            <ImageInput />
            <Inventory />
          </CardContent>
        </Card>
        <div className="col-span-1 flex flex-col gap-4">
          <ActionButtons />
          <OrganizeCard />
          <VariantsCard />
        </div>
      </div>
    </>
  );
};

export default AddProduct;
