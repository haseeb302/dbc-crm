"use server";

import sql from "mssql";
import { sqlConfig } from "../db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function createContact(formData) {
  console.log(formData);
  return;
  try {
    let pool = await sql.connect(sqlConfig);
    let request = pool.request();

    for (let [key, value] of formData.entries()) {
      request.input(key, value);
    }

    await request.execute("App.Contact");

    await sql.close();
  } catch (e) {
    console.log(e);
    await sql.close();
  }
  revalidatePath("/dashboard/contacts");
  redirect("/dashboard/contacts");
}

const ITEMS_PER_PAGE = 10;
export async function filteredContacts(query, page) {
  try {
    const offset = (page - 1) * ITEMS_PER_PAGE;
    let pool = await sql.connect(sqlConfig);
    let result = await pool.request().query(`SELECT * FROM Contact 
      WHERE FirstName LIKE '%${query}%' OR
      LastName LIKE '%${query}%' OR
      Email LIKE '%${query}%' 
      ORDER BY CompanyID DESC OFFSET ${offset} ROWS FETCH NEXT ${ITEMS_PER_PAGE} ROWS ONLY`);

    const { recordset: contacts } = result;
    return contacts;
  } catch (e) {
    console.log(e);
  } finally {
    // close();
  }
  revalidatePath("/dashboard/contacts");
  redirect("/dashboard/contacts");
}

export async function fetchContactsPages(query) {
  try {
    let pool = await sql.connect(sqlConfig);
    let result = await pool.request()
      .query(`SELECT COUNT(*) AS total FROM Contact WHERE FirstName LIKE '%${query}%' OR
      LastName LIKE '%${query}%' OR
      Email LIKE '%${query}%'`);
    const totalPages = Math.ceil(
      Number(result.recordset[0].total) / ITEMS_PER_PAGE
    );
    return totalPages;
  } catch (e) {
    console.log(e);
  } finally {
    // close();
  }
  revalidatePath("/dashboard/contacts");
  redirect("/dashboard/contacts");
}

export async function fetchContactById(id) {}

export async function updateContact(id, data) {}

export async function deleteContact(id) {}
