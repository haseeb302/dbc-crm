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
import { createProducts } from "@/app/lib/api/products";

export default function AddProductDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add Product</Button>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle className="text-3xl">Add New Product</DialogTitle>
        </DialogHeader>
        <hr />
        <form
          action={createProducts}
          className="pl-4 space-y-3 overflow-scroll"
        >
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="case-barcode">Case Barcode</Label>
            <Input type="text" id="case-barcode" name="CaseBarcode" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="product-name">Product Name</Label>
            <Input type="text" id="product-name" name="ProductName" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="product-barcode">Product Barcode</Label>
            <Input type="text" id="product-barcode" name="ProductBarcode" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="hs-code">HS Code</Label>
            <Input type="text" id="hs-code" name="HSCODE" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="regular-price">Regular Price</Label>
            <Input type="text" id="regular-price" name="RegularPrice" />
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
