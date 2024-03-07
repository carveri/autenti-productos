import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters";
import prisma from "@/libs/prisma";




export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,

    providers: [
        GithubProvider({
          clientId: process.env.GITHUB_ID ?? '',
          clientSecret: process.env.GITHUB_SECRET ?? '',
        }),
      ],
}

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}