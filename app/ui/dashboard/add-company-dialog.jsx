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
import { createCompany } from "@/app/lib/api/companies";

export default function AddCompanyDialog() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add Company</Button>
      </DialogTrigger>
      <DialogContent className=" h-full">
        <DialogHeader>
          <DialogTitle className="text-3xl">Add New Company</DialogTitle>
        </DialogHeader>
        <hr />
        <form action={createCompany} className="pl-4 space-y-3 overflow-scroll">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" name="CompanyName" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="address">Address</Label>
            <Input type="text" id="address" name="StreetAddress" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="postcode">Postcode</Label>
            <Input type="text" id="postcode" name="PostalCode" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="wda">WDA Number</Label>
            <Input type="text" id="wda" name="WdaNumber" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="gdp">GDP Certificate</Label>
            <Input type="text" id="gdp" name="GdpCertificate" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="vat">VAT Number</Label>
            <Input type="text" id="vat" name="VatNumber" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="incorporation_number">Incorporation Number</Label>
            <Input
              type="text"
              id="incorporation_number"
              name="IncorporationNumber"
            />
          </div>
          {/* <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="company_type">Company Type</Label>
            <Input type="text" id="company_type" name="CompanyType" />
          </div> */}
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="dbc_manager">DBC Manager</Label>
            <Input type="text" id="dbc_manager" name="AdditionalInformation" />
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
