import { columns } from "./columns";
import { DataTable } from "@/app/ui/data-table";

export const contacts = [
  // {
  //   id: "",
  //   connected_company: "",
  //   first_name: "",
  //   last_name: "",
  //   email: "",
  //   phone_number: "",
  //   contact_type: "",
  // },
];

export default async function Page() {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={contacts} />
    </div>
  );
}
