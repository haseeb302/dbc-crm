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
import { createContact } from "@/app/lib/api/contacts";

export default function AddContactDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add Contact</Button>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle className="text-3xl">Add New Contact</DialogTitle>
        </DialogHeader>
        <hr />
        <form action={createContact} className="pl-4 space-y-3 overflow-scroll">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="connected-company">Connected Company</Label>
            <Input type="number" id="connected-company" name="CompanyID" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="first-name">First Name</Label>
            <Input type="text" id="first-name" name="FirstName" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="last-name">Last Name</Label>
            <Input type="text" id="last-name" name="LastName" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="Email" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="phone-number">Phone Number</Label>
            <Input type="text" id="phone-number" name="PhoneNumber" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="contact-type">Contact Type</Label>
            <Input type="text" id="contact-type" name="ContactType" />
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
