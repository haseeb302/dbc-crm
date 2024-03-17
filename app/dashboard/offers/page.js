import { fetchOffers } from "@/app/lib/api/offers";
import { columns } from "./columns";
import { DataTable } from "@/app/ui/data-table";

export const offers = [];

export default async function Page() {
  const { recordset: offers } = await fetchOffers();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={offers} />
    </div>
  );
}
