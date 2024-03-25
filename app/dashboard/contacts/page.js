import { fetchContactsPages, filteredContacts } from "@/app/lib/api/contacts";
import { columns } from "./columns";
import { DataTable } from "@/app/ui/data-table";

export default async function Page({ searchParams }) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const contacts = await filteredContacts(query, currentPage);
  const totalPages = await fetchContactsPages(query);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={contacts} totalPages={totalPages} />
    </div>
  );
}
