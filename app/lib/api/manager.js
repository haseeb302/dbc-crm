"use server";

import sql from "mssql";
import { sqlConfig } from "../db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import bcrypt from "bcrypt";

export async function createManager(formData) {
  try {
    let pool = await sql.connect(sqlConfig);
    let request = pool.request();

    request.input("FirstName", formData.get("FirstName"));
    request.input("LastName", formData.get("LastName"));
    request.input("PhoneNumber", formData.get("PhoneNumber"));
    request.input("Email", formData.get("Email"));
    request.input("Initials", formData.get("Initials"));
    const value = await bcrypt.hash(formData.get("StoredPassword"), 10);
    request.input("StoredPassword", value);

    await request.execute("App.Manager");

    sql.close();
  } catch (e) {
    console.log(e);
  }
  revalidatePath("/");
  redirect("/");
}
