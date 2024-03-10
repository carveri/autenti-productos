import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters";
import prisma from "@/libs/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import { singInEmailPassword } from "@/auth/actions/auth-actions";


export const authOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,

    providers: [
        GithubProvider({
          clientId: process.env.GITHUB_ID ?? '',
          clientSecret: process.env.GITHUB_SECRET ?? '',
        }),

        CredentialsProvider({
          name: "Credentials",
          credentials: {
            email: { label: "Email", type: "email", placeholder: "jsmith@gmail.com" },
            password: { label: "Contraseña", type: "password", placeholder: "***********" }
          },
          async authorize(credentials, req) {
            
            const user = await singInEmailPassword(credentials!.email, credentials!.password)
      
            if (user) {
              
              return user
            } else {
              
              return null
      
              // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
            }
          }
        })

        
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
          if(dbUser?.isActive === false){
            throw Error('El usuario no esta activo!!')
          }

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