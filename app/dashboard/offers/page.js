import { fetchOffersPages, filteredOffers } from "@/app/lib/api/offers";
import { columns } from "./columns";
import { DataTable } from "@/app/ui/data-table";

export default async function Page({ searchParams }) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const offers = await filteredOffers(query, currentPage);
  const totalPages = await fetchOffersPages(query);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={offers} totalPages={totalPages} />
    </div>
  );
}
