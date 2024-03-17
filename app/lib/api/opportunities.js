"use server";

import { connect } from "../db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function fetchOpportunity() {
  try {
    let pool = await sql.connect(sqlConfig);
    let result = await pool
      .request()
      .query(`SELECT TOP 10 * FROM CustomerOpportunities`);

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
