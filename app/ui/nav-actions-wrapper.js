"use client";

import { Input } from "@/app/ui/components/ui/input";
import { Button } from "@/app/ui/components/ui/button";
import { usePathname } from "next/navigation";
import AddCompanyDialog from "./dashboard/add-company-dialog";
import AddContactDialog from "./contacts/add-contact-dialog";

export default function NavActionWrapper() {
  const pathname = usePathname();

  switch (pathname) {
    case "/dashboard":
      return (
        <>
          <Input
            type="search"
            placeholder="Search companies"
            className="md:w-[100px] lg:w-[300px]"
          />
          <AddCompanyDialog />
        </>
      );
    case "/dashboard/contacts":
      return (
        <>
          <Input
            type="search"
            placeholder="Search contact"
            className="md:w-[100px] lg:w-[300px]"
          />
          <AddContactDialog />
        </>
      );
    case "/dashboard/products":
      return (
        <>
          <Input
            type="search"
            placeholder="Search products"
            className="md:w-[100px] lg:w-[300px]"
          />
          <Button>Add Products</Button>
        </>
      );
    case "/dashboard/offers":
      return (
        <>
          <Input
            type="search"
            placeholder="Search offers"
            className="md:w-[100px] lg:w-[300px]"
          />
          <Button>Add Offer</Button>
        </>
      );
    case "/dashboard/opportunities":
      return (
        <>
          <Input
            type="search"
            placeholder="Search opportunities"
            className="md:w-[100px] lg:w-[300px]"
          />
          <Button>Add Opportunity</Button>
        </>
      );
    default:
      return <></>;
  }
}
