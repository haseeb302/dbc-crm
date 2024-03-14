"use client";

import { Button } from "@/app/ui/components/ui/button";
import { Input } from "@/app/ui/components/ui/input";
import { Label } from "@radix-ui/react-label";

export default function page() {
  return (
    <div className="pl-4 space-y-3 overflow-hidden">
      <br />
      <h1 className="text-xl">
        <b>Profile</b>
      </h1>
      <br />
      <hr />
      <h1 className="text-m">
        <b>Account Settings</b>
      </h1>
      <br />
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="first-name">First Name</Label>
        <Input type="text" id="first-name" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="last-name">Last Name</Label>
        <Input type="text" id="last-name" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="phone-number">Phone (Optional)</Label>
        <Input type="text" id="phone-number" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="text" id="email" />
      </div>
      <Button>Save</Button>
      <hr />
      <h1 className="text-m">
        <b>Change Password</b>
      </h1>
      <br />
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="old-password">Old Password</Label>
        <Input type="text" id="old-password" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="new-password">New Password</Label>
        <Input type="text" id="new-password" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="confirm-password">Confirm Password</Label>
        <Input type="text" id="confirm-password" />
      </div>
      <Button>Save</Button>
    </div>
  );
}
