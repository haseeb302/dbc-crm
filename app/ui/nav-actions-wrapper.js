"use client";

import { Input } from "@/app/ui/components/ui/input";
import { Button } from "@/app/ui/components/ui/button";
import { usePathname } from "next/navigation";
import AddCompanyDialog from "./dashboard/add-company-dialog";
import AddContactDialog from "./contacts/add-contact-dialog";
import AddProductDialog from "./products/add-product-dialog";
import AddOfferDialog from "./offers/add-offers-dialog";
import AddOpportunityDialog from "./opportunities/add-opportunity-dialog";

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
          <AddProductDialog />
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
          <AddOfferDialog />
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
          <AddOpportunityDialog />
        </>
      );
    default:
      return <></>;
  }
}
