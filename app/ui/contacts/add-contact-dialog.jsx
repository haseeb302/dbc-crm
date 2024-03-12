import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/ui/components/ui/dialog";
import { Button } from "@/app/ui/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "../components/ui/input";

export default function AddContactDialog() {
  return (
    // <Dialog>
    //   <DialogTrigger asChild>
    //     <Button>Add Contact</Button>
    //   </DialogTrigger>
    //   <DialogContent>
    //     <DialogHeader>
    //       <DialogTitle>Are you absolutely sure?</DialogTitle>
    //       <DialogDescription>
    //         This action cannot be undone. This will permanently delete your
    //         account and remove your data from our servers.
    //       </DialogDescription>
    //     </DialogHeader>
    //   </DialogContent>
    // </Dialog>

    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Contact</Button>
      </DialogTrigger>
      <DialogContent className=" h-full">
        <DialogHeader>
          <DialogTitle className="text-3xl">Add New Contact</DialogTitle>
        </DialogHeader>
        <hr />
        <div className="pl-4 space-y-3 overflow-scroll">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Connected Company</Label>
            <Input type="text" id="name" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="address">First Name</Label>
            <Input type="text" id="address" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="postcode">Last Name</Label>
            <Input type="text" id="postcode" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="wda">Email</Label>
            <Input type="text" id="wda" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="gdp">Phone Number</Label>
            <Input type="text" id="gdp" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="vat">Contact Type</Label>
            <Input type="text" id="vat" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
