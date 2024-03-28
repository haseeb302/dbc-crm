"use server";

import sql from "mssql";
import { sqlConfig } from "../db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function createOffers(formData) {
  try {
    let pool = await sql.connect(sqlConfig);
    let request = pool.request();

    for (let [key, value] of formData.entries()) {
      if (key !== "SupplierName") {
        request.input(key, value);
      }
    }

    await request.execute("App.Offer");
    await sql.close();
  } catch (e) {
    console.log(e);
    await sql.close();
  }
  revalidatePath("/dashboard/offers");
  redirect("/dashboard/offers");
}

const ITEMS_PER_PAGE = 10;
export async function filteredOffers(query, page) {
  try {
    const offset = (page - 1) * ITEMS_PER_PAGE;
    let pool = await sql.connect(sqlConfig);
    let result = await pool.request().query(`SELECT * FROM Offer 
      WHERE CaseBarcode LIKE '%${query}%'      
      ORDER BY OfferID DESC OFFSET ${offset} ROWS FETCH NEXT ${ITEMS_PER_PAGE} ROWS ONLY`);

    const { recordset: offers } = result;
    return offers;
  } catch (e) {
    console.log(e);
  } finally {
    // close();
  }
  revalidatePath("/dashboard/offers");
  redirect("/dashboard/offers");
}

export async function fetchOffersPages(query) {
  try {
    let pool = await sql.connect(sqlConfig);
    let result = await pool
      .request()
      .query(
        `SELECT COUNT(*) AS total FROM Offer WHERE CaseBarcode LIKE '%${query}%'`
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
  revalidatePath("/dashboard/offers");
  redirect("/dashboard/offers");
}

export async function fetchOfferById(id) {}

export async function updateOffer(id, data) {}

export async function deleteOffer(id) {}
