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


      session: {
        strategy: 'jwt'
      },
      callbacks:{
        async signIn({user, account, profile, email, credentials}){
          return true
        },

        async jwt({ token, user, account, profile }){
          
          const dbUser = await prisma.user.findUnique({
            where:{
              email: token.email ?? 'No hay email'
            }
          })

          token.id = dbUser?.id ?? 'no-uuid'
          
          return token
        },
        async session({ session, token, user }){

          if(session && session.user){
            session.user.id = token.id
          }


          return session
        }
      }
}

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}