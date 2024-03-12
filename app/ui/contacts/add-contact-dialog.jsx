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
            <Label htmlFor="connectedCompany">Connected Company</Label>
            <Input type="text" id="connectedCompany" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="firstName">First Name</Label>
            <Input type="text" id="firstName" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="lastName">Last Name</Label>
            <Input type="text" id="lastName" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="text" id="email" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input type="text" id="phoneNumber" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="contactType">Contact Type</Label>
            <Input type="text" id="contactType" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
