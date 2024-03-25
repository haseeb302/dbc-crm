"use client";

import { Input } from "@/app/ui/components/ui/input";
import { Button } from "@/app/ui/components/ui/button";
import { usePathname } from "next/navigation";
import AddCompanyDialog from "./dashboard/add-company-dialog";
import AddContactDialog from "./contacts/add-contact-dialog";
import AddProductDialog from "./products/add-product-dialog";
import AddOfferDialog from "./offers/add-offers-dialog";
import AddOpportunityDialog from "./opportunities/add-opportunity-dialog";
import Search from "./Search";

export default function NavActionWrapper() {
  const pathname = usePathname();

  switch (pathname) {
    case "/dashboard":
      return (
        <>
          <Search placeholder="Search companies" />
          <AddCompanyDialog />
        </>
      );
    case "/dashboard/contacts":
      return (
        <>
          <Search placeholder="Search contacts" />
          <AddContactDialog />
        </>
      );
    case "/dashboard/products":
      return (
        <>
          <Search placeholder="Search products" />
          <AddProductDialog />
        </>
      );
    case "/dashboard/offers":
      return (
        <>
          <Search placeholder="Search Offer" />
          <AddOfferDialog />
        </>
      );
    case "/dashboard/opportunities":
      return (
        <>
          <Search placeholder="Search opportunities" />
          <AddOpportunityDialog />
        </>
      );
    default:
      return <></>;
  }
}
