import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/ui/components/ui/dialog";
import { Button } from "@/app/ui/components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "@radix-ui/react-label";

export default function AddCompanyDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Company</Button>
      </DialogTrigger>
      <DialogContent className=" h-full">
        <DialogHeader>
          <DialogTitle className="text-3xl">Add New Company</DialogTitle>
        </DialogHeader>
        <hr />
        <div className="pl-4 space-y-3 overflow-scroll">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="address">Address</Label>
            <Input type="text" id="address" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="postcode">Postcode</Label>
            <Input type="text" id="postcode" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="wda">WDA Number</Label>
            <Input type="text" id="wda" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="gdp">GDP Certificate</Label>
            <Input type="text" id="gdp" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="vat">VAT Number</Label>
            <Input type="text" id="vat" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="incorporation_number">Incorporation Number</Label>
            <Input type="text" id="incorporation_number" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="company_type">Company Type</Label>
            <Input type="text" id="company_type" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="dbc_manager">DBC Manager</Label>
            <Input type="text" id="dbc_manager" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
