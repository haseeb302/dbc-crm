"use server";

import sql from "mssql";
import { sqlConfig } from "../db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function createContact(formData) {
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

export async function fetchContacts() {
  try {
    let pool = await sql.connect(sqlConfig);
    let result = await pool
      .request()
      .query(`SELECT TOP 10 * FROM Contact ORDER BY ContactID DESC`);

    return result;
  } catch (e) {
    console.log(e);
  } finally {
  }
  revalidatePath("/dashboard/contacts");
  redirect("/dashboard/contacts");
}

export async function fetchContactById(id) {}

export async function updateContact(id, data) {}

export async function deleteContact(id) {}
