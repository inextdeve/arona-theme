import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ImageInput from "./upload-images";
import Inventory from "./inventory";

const AddProduct = () => {
  return (
    <>
      <div className="mb-4">
        <h5 className="mb-3 font-semibold text-lg">Product Title</h5>

        <Input
          type="text"
          placeholder="write title here...."
          className="rounded-lg"
        />
      </div>
      <div className="mb-4">
        <h5 className="mb-3 font-semibold text-lg">Product Description</h5>

        <Textarea
          placeholder="write a description here.."
          rows={6}
          className="rounded-lg"
        />
      </div>
      <ImageInput />
      <Inventory />
    </>
  );
};

export default AddProduct;
