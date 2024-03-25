import { fetchProductsPages, filteredProducts } from "@/app/lib/api/products";
import { columns } from "./columns";
import { DataTable } from "@/app/ui/data-table";

export default async function Page({ searchParams }) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const products = await filteredProducts(query, currentPage);
  const totalPages = await fetchProductsPages(query);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={products} totalPages={totalPages} />
    </div>
  );
}
