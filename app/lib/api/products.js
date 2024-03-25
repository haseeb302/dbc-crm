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

const ITEMS_PER_PAGE = 10;
export async function filteredProducts(query, page) {
  try {
    const offset = (page - 1) * ITEMS_PER_PAGE;
    let pool = await sql.connect(sqlConfig);
    let result = await pool.request().query(`SELECT * FROM Product 
      WHERE ProductName LIKE '%${query}%' OR
      CaseBarcode LIKE '%${query}%' OR
      ProductBarcode LIKE '%${query}%' ORDER BY ProductName DESC OFFSET ${offset} ROWS FETCH NEXT ${ITEMS_PER_PAGE} ROWS ONLY`);

    const { recordset: products } = result;
    return products;
  } catch (e) {
    console.log(e);
  } finally {
    // close();
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
}

export async function fetchProductsPages(query) {
  try {
    let pool = await sql.connect(sqlConfig);
    let result = await pool.request()
      .query(`SELECT COUNT(*) AS total FROM Product WHERE ProductName LIKE '%${query}%' OR
      CaseBarcode LIKE '%${query}%' OR
      ProductBarcode LIKE '%${query}%'`);
    const totalPages = Math.ceil(
      Number(result.recordset[0].total) / ITEMS_PER_PAGE
    );
    return totalPages;
  } catch (e) {
    console.log(e);
  } finally {
    // close();
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
}

export async function fetchProductById(id) {}

export async function updateProduct(id, data) {}

export async function deleteProduct(id) {}
