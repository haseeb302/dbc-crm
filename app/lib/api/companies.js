"use server";

import sql from "mssql";
import { sqlConfig } from "../db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function createCompany(formData) {
  try {
    let pool = await sql.connect(sqlConfig);
    let request = pool.request();

    for (let [key, value] of formData.entries()) {
      request.input(key, value);
    }

    await request.execute("App.Company");

    sql.close();
  } catch (e) {
    console.log(e);
  }
  revalidatePath("/dashboard");
  redirect("/dashboard");
}

export async function fetchCompanies() {
  try {
    let pool = await sql.connect(sqlConfig);
    let result = await pool
      .request()
      .query(`SELECT TOP 10 * FROM Company ORDER BY CompanyID DESC`);
    return result;
  } catch (e) {
    console.log(e);
  } finally {
    // close();
  }
  revalidatePath("/dashboard");
  redirect("/dashboard");
}

export async function fetchCompanyById(id) {
  try {
    await sql`
        SELECT * FROM companies        
        WHERE id = ${id}
        `;
  } catch (e) {
    return {
      message: "Database Error: Failed to Update Invoice.",
    };
  }
  revalidatePath("/dashboard/invoices");
  redirect("/dashboard/invoices");
}

export async function updateCompany(id, data) {
  const { customerId, amountInCents, status } = data;
  try {
    await sql`
        UPDATE invoices
        SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
        WHERE id = ${id}
        `;
  } catch (e) {
    return {
      message: "Database Error: Failed to Update Invoice.",
    };
  }
  revalidatePath("/dashboard");
  redirect("/dashboard");
}

export async function deleteCompany(id) {
  try {
    await sql`DELETE FROM companies WHERE id = ${id}`;
    revalidatePath("/dashboard");
    return { message: "Deleted Company." };
  } catch (e) {
    return {
      message: "Database Error: Failed to Delete Company.",
    };
  }
}
