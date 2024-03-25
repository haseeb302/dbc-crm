import { fetchCompaniesPages, filteredCompanies } from "../lib/api/companies";
import { columns } from "./columns";
import { DataTable } from "@/app/ui/data-table";

export default async function Page({ searchParams }) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const companies = await filteredCompanies(query, currentPage);
  const totalPages = await fetchCompaniesPages(query);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={companies} totalPages={totalPages} />
    </div>
  );
}
