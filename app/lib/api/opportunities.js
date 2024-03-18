"use server";

import sql from "mssql";
import { sqlConfig } from "../db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function createOpportunity(formData) {
  try {
    let pool = await sql.connect(sqlConfig);
    let request = pool.request();

    for (let [key, value] of formData.entries()) {
      request.input(key, value);
    }

    const res = await request.execute("App.Opportunity");
    console.log(res);
    await sql.close();
  } catch (e) {
    console.log(e);
    await sql.close();
  }
  revalidatePath("/dashboard/opportunities");
  redirect("/dashboard/opportunities");
}

export async function fetchOpportunity() {
  try {
    let pool = await sql.connect(sqlConfig);
    let result = await pool.request().query(`SELECT TOP 10 * FROM Opportunity`);

    return result;
  } catch (e) {
    console.log(e);
  } finally {
  }
  revalidatePath("/dashboard/opportunities");
  redirect("/dashboard/opportunities");
}

export async function fetchOpportunityById(id) {}

export async function updateOpportunity(id, data) {}

export async function deleteOpportunity(id) {}
