"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/ui/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/ui/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/ui/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/app/ui/components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "@radix-ui/react-label";
import { createContact } from "@/app/lib/api/contacts";
import { z } from "zod";
import { fetchCompanies } from "@/app/lib/api/companies";

const contactSchema = z.object({
  CompanyID: z.string({ required_error: "Please select the company" }),
  FirstName: z.string().min(2, {
    message: "First Name must be at least 2 characters.",
  }),
  LastName: z.string().min(2, {
    message: "Last Name must be at least 2 characters.",
  }),
  Email: z.string().email({
    message: "Email is required",
  }),
  // PhoneNumber: z.string().min(4, {
  //   message: "Phone number must be at least 4 characters.",
  // }),
  // ContactType: z.string(),
});

export default function AddContactDialog() {
  const form = useForm({
    resolver: zodResolver(contactSchema),
    // defaultValues: {
    //   CompanyID: "",
    // },
  });

  const [open, setOpen] = useState(false);

  const onSubmit = (values) => {
    console.log(values);
    createContact(values);
  };

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
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            // action={}
            className="pl-4 space-y-3 overflow-scroll"
          >
            <FormField
              control={form.control}
              name="CompanyID"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Connected Company</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger className="w-full max-w-sm">
                        <SelectValue placeholder="Connected Company" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <Input placeholder="Search in companies by name" />
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="FirstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} className="w-full max-w-sm" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="LastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} className="w-full max-w-sm" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="Email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      {...field}
                      className="w-full max-w-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="first-name">First Name</Label>
              <Input type="text" id="first-name" name="FirstName" />
            </div> */}
            {/* <div className="grid w-full max-w-sm items-center gap-1.5">
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
            </div> */}
            <Button asChild>
              <Input type="submit" value="Save" className="cursor-pointer" />
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
