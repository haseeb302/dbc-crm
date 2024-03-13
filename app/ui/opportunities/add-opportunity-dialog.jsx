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

export default function AddOpportunitytDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Opportunity</Button>
      </DialogTrigger>
      <DialogContent className=" h-full">
        <DialogHeader>
          <DialogTitle className="text-3xl">Add New Opportunity</DialogTitle>
        </DialogHeader>
        <hr />
        <div className="pl-4 space-y-3 overflow-scroll">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="companyName">Company Name</Label>
            <Input type="text" id="companyName" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="companyCaseBarcode">Case Barcode</Label>
            <Input type="text" id="companyCaseBarcode" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="companyProductName">Product Name</Label>
            <Input type="text" id="companyProductName" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="companyRequestDate">Request Date</Label>
            <Input type="text" id="companyRequestDate" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="companyMaxPrice">Max Price</Label>
            <Input type="text" id="companyMaxPrice" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="companyCaseQuantity">Case Quantity</Label>
            <Input type="text" id="companyCaseQuantity" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="companyOfferPrice">Offer Price</Label>
            <Input type="text" id="companyOfferPrice" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="companySupplierName">Supplier Name</Label>
            <Input type="text" id="companySupplierName" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
