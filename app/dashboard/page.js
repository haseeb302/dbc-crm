import { fetchCompanies } from "../lib/api/companies";
import { columns } from "./columns";
import { DataTable } from "@/app/ui/data-table";

export default async function Page() {
  const { recordset: companies } = await fetchCompanies();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={companies} />
    </div>
  );
}
