import { columns } from "./columns";
import { DataTable } from "@/app/ui/data-table";

export const companies = [
  {
    id: "728ed52f",
    name: "Company A",
    address: "41 BBAA Road",
    postal: "KT18YSD",
    wda: "ajsdljasldkjaslkdj",
    gdpcert: "poiqwpe1i2ujn12@e12n3b12nm3",
    vat: "1219AS12",
    incorp_number: "12AS021A",
  },
  {
    id: "728ed52f",
    name: "Company B",
    address: "41 BBAA Road",
    postal: "KT18YSD",
    wda: "ajsdljasldkjaslkdj",
    gdpcert: "poiqwpe1i2ujn12@e12n3b12nm3",
    vat: "1219AS12",
    incorp_number: "12AS021A",
  },
  {
    id: "728ed52f",
    name: "Company C",
    address: "41 BBAA Road",
    postal: "KT18YSD",
    wda: "ajsdljasldkjaslkdj",
    gdpcert: "poiqwpe1i2ujn12@e12n3b12nm3",
    vat: "1219AS12",
    incorp_number: "12AS021A",
  },
  {
    id: "728ed52f",
    name: "Company D",
    address: "41 BBAA Road",
    postal: "KT18YSD",
    wda: "ajsdljasldkjaslkdj",
    gdpcert: "poiqwpe1i2ujn12@e12n3b12nm3",
    vat: "1219AS12",
    incorp_number: "12AS021A",
  },
  {
    id: "728ed52f",
    name: "Company E",
    address: "41 BBAA Road",
    postal: "KT18YSD",
    wda: "ajsdljasldkjaslkdj",
    gdpcert: "poiqwpe1i2ujn12@e12n3b12nm3",
    vat: "1219AS12",
    incorp_number: "12AS021A",
  },
  {
    id: "728ed52f",
    name: "Company F",
    address: "41 BBAA Road",
    postal: "KT18YSD",
    wda: "ajsdljasldkjaslkdj",
    gdpcert: "poiqwpe1i2ujn12@e12n3b12nm3",
    vat: "1219AS12",
    incorp_number: "12AS021A",
  },
  {
    id: "728ed52f",
    name: "Company G",
    address: "41 BBAA Road",
    postal: "KT18YSD",
    wda: "ajsdljasldkjaslkdj",
    gdpcert: "poiqwpe1i2ujn12@e12n3b12nm3",
    vat: "1219AS12",
    incorp_number: "12AS021A",
  },
];

// async function getData(){
//   // Fetch data from your API here.
//   return [
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//     // ...
//   ]
// }

export default async function Page() {
  // const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={companies} />
    </div>
  );
}
