"use client";

import { Button } from "@/app/ui/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/app/ui/components/ui/input";

export default function ProfilePage() {
  return (
    <div className="pl-4 space-y-3 overflow-scroll">
      <h1 className="text-lg">
        <b>Account Settings</b>
      </h1>
      <hr />
      <div className="grid w-full max-w-sm items-center gap-1">
        <Label htmlFor="firstName">First Name</Label>
        <Input type="text" id="firstName" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1">
        <Label htmlFor="lastName">Last Name</Label>
        <Input type="text" id="lastName" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1">
        <Label htmlFor="phoneNumber">Phone Number</Label>
        <Input type="text" id="phoneNumber" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1">
        <Label htmlFor="email">Email</Label>
        <Input type="text" id="email" />
      </div>
      <Button>Save</Button>
      <hr />
      <h1 className="text-lg">
        <b>Change Password</b>
      </h1>
      <div className="grid w-full max-w-sm items-center gap-1">
        <Label htmlFor="oldPassword">Old Password</Label>
        <Input type="text" id="oldPassword" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1">
        <Label htmlFor="newPassword">New Password</Label>
        <Input type="text" id="newPassword" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input type="text" id="confirmPassword" />
      </div>
      <Button>Save</Button>
    </div>
  );
}
