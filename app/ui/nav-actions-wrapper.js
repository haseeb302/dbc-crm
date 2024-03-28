"use client";

import { Suspense } from "react";
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
          <Suspense>
            <Search placeholder="Search companies" />
          </Suspense>
          <AddCompanyDialog />
        </>
      );
    case "/dashboard/contacts":
      return (
        <>
          <Suspense>
            <Search placeholder="Search contacts" />
          </Suspense>
          <AddContactDialog />
        </>
      );
    case "/dashboard/products":
      return (
        <>
          <Suspense>
            <Search placeholder="Search products" />
          </Suspense>
          <AddProductDialog />
        </>
      );
    case "/dashboard/offers":
      return (
        <>
          <Suspense>
            <Search placeholder="Search Offer" />
          </Suspense>
          <AddOfferDialog />
        </>
      );
    case "/dashboard/opportunities":
      return (
        <>
          <Suspense>
            <Search placeholder="Search opportunities" />
          </Suspense>
          <AddOpportunityDialog />
        </>
      );
    default:
      return <></>;
  }
}
