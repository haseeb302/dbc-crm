import {
  fetchOpportunitiesPages,
  filteredOpportunities,
} from "@/app/lib/api/opportunities";
import { columns } from "./columns";
import { DataTable } from "@/app/ui/data-table";

export default async function Page({ searchParams }) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const opportunities = await filteredOpportunities(query, currentPage);
  const totalPages = await fetchOpportunitiesPages(query);

  return (
    <div className="container mx-auto py-10">
      <DataTable
        columns={columns}
        data={opportunities}
        totalPages={totalPages}
      />
    </div>
  );
}
