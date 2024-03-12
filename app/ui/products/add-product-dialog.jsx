import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/ui/components/ui/dialog";
import { Button } from "@/app/ui/components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "@radix-ui/react-label";

export default function AddProductDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Product</Button>
      </DialogTrigger>
      <DialogContent className=" h-full">
        <DialogHeader>
          <DialogTitle className="text-3xl">Add New Product</DialogTitle>
        </DialogHeader>
        <hr />
        <div className="pl-4 space-y-3 overflow-scroll">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="productCaseBarcode">Case Barcode</Label>
            <Input type="text" id="productCaseBarcode" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="productName">Product Name</Label>
            <Input type="text" id="productName" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="productBarcode">Product Barcode</Label>
            <Input type="text" id="productBarcode" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="hsCode">HS Code</Label>
            <Input type="text" id="hsCode" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="regularPrice">Regular Price</Label>
            <Input type="text" id="regularPrice" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
