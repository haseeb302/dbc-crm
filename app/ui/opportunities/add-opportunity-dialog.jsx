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

export default function AddOpportunityDialog() {
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
            <Label htmlFor="company-name">Company Name</Label>
            <Input type="text" id="company-name" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="company-case-barcode">Case Barcode</Label>
            <Input type="text" id="company-case-barcode" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="product-name">Product Name</Label>
            <Input type="text" id="product-name" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="requested-date">Requested Date</Label>
            <Input type="text" id="requested-date" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="max-price">Max Price</Label>
            <Input type="text" id="max-price" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="case-quantity">Case Quantity</Label>
            <Input type="text" id="case-quantity" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="offer-price">Offer Price</Label>
            <Input type="text" id="offer-price" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="supplier-name">Supplier Name</Label>
            <Input type="text" id="supplier-name" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
