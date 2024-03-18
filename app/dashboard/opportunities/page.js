import { fetchOpportunity } from "@/app/lib/api/opportunities";
import { columns } from "./columns";
import { DataTable } from "@/app/ui/data-table";

export default async function Page() {
  const { recordset: opportunities } = await fetchOpportunity();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={opportunities} />
    </div>
  );
}
