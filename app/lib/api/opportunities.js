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

const ITEMS_PER_PAGE = 10;
export async function filteredOpportunities(query, page) {
  try {
    const offset = (page - 1) * ITEMS_PER_PAGE;
    let pool = await sql.connect(sqlConfig);
    let result = await pool.request().query(`SELECT * FROM Opportunity 
      WHERE CaseBarcode LIKE '%${query}%'      
      ORDER BY RequestID DESC OFFSET ${offset} ROWS FETCH NEXT ${ITEMS_PER_PAGE} ROWS ONLY`);

    const { recordset: opportunities } = result;
    return opportunities;
  } catch (e) {
    console.log(e);
  } finally {
    // close();
  }
  revalidatePath("/dashboard/opportunities");
  redirect("/dashboard/opportunities");
}

export async function fetchOpportunitiesPages(query) {
  try {
    let pool = await sql.connect(sqlConfig);
    let result = await pool
      .request()
      .query(
        `SELECT COUNT(*) AS total FROM Opportunity WHERE CaseBarcode LIKE '%${query}%'`
      );
    const totalPages = Math.ceil(
      Number(result.recordset[0].total) / ITEMS_PER_PAGE
    );
    return totalPages;
  } catch (e) {
    console.log(e);
  } finally {
    // close();
  }
  revalidatePath("/dashboard/opportunities");
  redirect("/dashboard/opportunities");
}

export async function fetchOpportunityById(id) {}

export async function updateOpportunity(id, data) {}

export async function deleteOpportunity(id) {}
