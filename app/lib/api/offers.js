"use server";

import sql from "mssql";
import { sqlConfig } from "../db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function fetchOffers() {
  try {
    let pool = await sql.connect(sqlConfig);
    let result = await pool.request().query(`SELECT TOP 10 * FROM Offer`);

    return result;
  } catch (e) {
    console.log(e);
  } finally {
  }
  revalidatePath("/dashboard/offers");
  redirect("/dashboard/offers");
}

export async function fetchOfferById(id) {}

export async function updateOffer(id, data) {}

export async function deleteOffer(id) {}
