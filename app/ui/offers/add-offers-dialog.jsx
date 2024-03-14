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

export default function AddOfferDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Offer</Button>
      </DialogTrigger>
      <DialogContent className=" h-full">
        <DialogHeader>
          <DialogTitle className="text-3xl">Add New Offer</DialogTitle>
        </DialogHeader>
        <hr />
        <div className="pl-4 space-y-3 overflow-scroll">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="offer-case-barcode">Case Barcode</Label>
            <Input type="text" id="offer-case-barcode" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="supplier-name">Supplier Name</Label>
            <Input type="text" id="supplier-name" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="offer-price">Price</Label>
            <Input type="text" id="offer-price" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="minimum-order">Minimum Order</Label>
            <Input type="text" id="minimum-order" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="offer-date">Offer Date</Label>
            <Input type="text" id="offer-date" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="expiration-date">Expiration Date</Label>
            <Input type="text" id="expiration-date" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="stopOffering-date">Stop Offering Date</Label>
            <Input type="text" id="stopOffering-date" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
