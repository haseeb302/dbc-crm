"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/ui/components/ui/dialog";
import { Button } from "@/app/ui/components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "@radix-ui/react-label";
import { createOffers } from "@/app/lib/api/offers";

export default function AddOfferDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add Offer</Button>
      </DialogTrigger>
      <DialogContent className="h-full">
        <DialogHeader>
          <DialogTitle className="text-3xl">Add New Offer</DialogTitle>
        </DialogHeader>
        <hr />
        <form action={createOffers} className="pl-4 space-y-3 overflow-scroll">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="company">Company</Label>
            <Input type="text" id="company" name="CompanyID" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="offer-case-barcode">Case Barcode</Label>
            <Input type="text" id="offer-case-barcode" name="CaseBarcode" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="supplier-name">Supplier Name</Label>
            <Input type="text" id="supplier-name" name="SupplierName" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="offer-price">Price</Label>
            <Input type="text" id="offer-price" name="Price" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="minimum-order">Minimum Order</Label>
            <Input type="text" id="minimum-order" name="MinimumOrderQuantity" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="offer-date">Offer Date</Label>
            <Input type="date" id="offer-date" name="OfferDate" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="expiration-date">Expiration Date</Label>
            <Input type="date" id="expiration-date" name="ExpirationDate" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="stopOffering-date">Stop Offering Date</Label>
            <Input type="date" id="stopOffering-date" name="StopOfferingDate" />
          </div>
          <Button asChild>
            <Input
              type="submit"
              value="Save"
              className="cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
