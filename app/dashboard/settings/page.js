"use client";

import { Button } from "@/app/ui/components/ui/button";
import { Input } from "@/app/ui/components/ui/input";
import { Label } from "@radix-ui/react-label";

export default function Page() {
  return (
    <div className="pl-4 space-y-3 overflow-hidden">
      <br />
      <h1 className="text-xl">
        <b>Settings</b>
      </h1>
      <hr />
      <br />
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="test">Input Box</Label>
        <Input type="text" id="test" />
      </div>
      <Button>Save</Button>
    </div>
  );
}
