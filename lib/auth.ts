import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  database: prismaAdapter,
  emailAndPassword: {
    enabled: true,
  },
  plugins: [nextCookies()],
});
