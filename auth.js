import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import sql from "mssql";
import { sqlConfig } from "./app/lib/db";

import { z } from "zod";
import bcrypt from "bcrypt";

async function getUser(email) {
  try {
    let pool = await sql.connect(sqlConfig);
    let result = await pool
      .request()
      .query(`SELECT * FROM Manager WHERE Email = '${email}'`);
    const { recordset: user } = result;
    return user[0];
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);

          if (!user) return null;

          const passwordsMatch = await bcrypt.compare(
            password,
            user.StoredPassword
          );

          if (passwordsMatch) return user;
        }
        console.log("Invalid Credentials");
        return null;
      },
    }),
  ],
});
