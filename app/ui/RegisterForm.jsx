"use client";

import Link from "next/link";
import { Input } from "@/app/ui/components/ui/input";
import { Label } from "@/app/ui/components/ui/label";
import { Button } from "@/app/ui/components/ui/button";
import { createManager } from "@/app/lib/api/manager";

export default function RegisterForm() {
  return (
    <form action={createManager} className="space-y-2">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="fname">First Name</Label>
        <Input type="text" id="fname" name="FirstName" />

        <Label htmlFor="lname">Last Name</Label>
        <Input type="text" id="lname" name="LastName" />

        <Label htmlFor="phone">Phone Number</Label>
        <Input type="text" id="phone" name="PhoneNumber" />

        <Label htmlFor="initials">Initials</Label>
        <Input type="text" id="initials" name="Initials" />

        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="Email" />

        <Label>Password</Label>
        <Input type="password" name="StoredPassword" />
      </div>

      <Button asChild>
        <Input
          type="submit"
          value="Create Manager"
          className="cursor-pointer"
        />
      </Button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Already have an account? <Link href={"/"}>Sign In</Link>
      </p>
    </form>
  );
}
