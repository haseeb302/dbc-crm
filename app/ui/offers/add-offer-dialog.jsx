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
            <Label htmlFor="caseBarcode">Case Barcode</Label>
            <Input type="text" id="caseBarcode" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="supplierName">Supplier Name</Label>
            <Input type="text" id="supplierName" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="offerPrice">Price</Label>
            <Input type="text" id="offerPrice" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="minimumOrder">Minimum Order</Label>
            <Input type="text" id="minimumOrder" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="offerDate">Offer Date</Label>
            <Input type="date" id="offerDate" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="expirationDate">Expiration Date</Label>
            <Input type="date" id="expirationDate" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="stopOfferingDate">Stop Offering Date</Label>
            <Input type="date" id="stopOfferingDate" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
