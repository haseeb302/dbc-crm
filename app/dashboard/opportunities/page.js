import { columns } from "./columns";
import { DataTable } from "@/app/ui/data-table";

export const opportunities = [];

export default async function Page() {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={opportunities} />
    </div>
  );
}
