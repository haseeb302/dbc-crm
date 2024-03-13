"use client";

import { Button } from "@/app/ui/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/app/ui/components/ui/input";

export default function SettingsPage() {
  return (
    <div className="pl-4 space-y-3 overflow-hidden">
      <h1 className="text-lg">
        <b>Settings</b>
      </h1>
      <hr />
      <div className="grid w-full max-w-sm items-center gap-1">
        <Label htmlFor="firstName">Input Box</Label>
        <Input type="text" id="firstName" />
      </div>
      <Button>Save</Button>
    </div>
  );
}
