"use server";

import sql from "mssql";
import { sqlConfig } from "../db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function createProducts(formData) {
  try {
    let pool = await sql.connect(sqlConfig);
    let request = pool.request();

    for (let [key, value] of formData.entries()) {
      if (
        key == "ProductName" ||
        key == "CaseBarcode" ||
        key == "ProductBarcode"
      )
        request.input(key, value);
    }

    await request.execute("App.Product");

    await sql.close();
  } catch (e) {
    console.log(e);
    await sql.close();
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
}

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
