import { fetchContacts } from "@/app/lib/api/contacts";
import { columns } from "./columns";
import { DataTable } from "@/app/ui/data-table";

export default async function Page() {
  const { recordset: contacts } = await fetchContacts();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={contacts} />
    </div>
  );
}
