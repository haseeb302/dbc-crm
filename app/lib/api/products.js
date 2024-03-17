"use server";

import sql from "mssql";
import { sqlConfig } from "../db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function fetchProducts() {
  try {
    let pool = await sql.connect(sqlConfig);
    let result = await pool.request().query(`SELECT TOP 10 * FROM Product`);

    return result;
  } catch (e) {
    console.log(e);
  } finally {
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
}

export async function fetchProductById(id) {}

export async function updateProduct(id, data) {}

export async function deleteProduct(id) {}
