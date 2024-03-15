'use server'

import { getServerSession } from "next-auth/next";
import prisma from "./../../libs/prisma";
import bcrypt from "bcryptjs";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
//import { newAuth } from "@/app/api/auth/auth";


export const getUserSessionSever = async()=>{
    
    const session = await getServerSession(authOptions)

    return session?.user?.id
}

export const singInEmailPassword = async(email: string, password: string)=>{
    // si no me manda el email o el password, no se puede autenticar
    if(!email || !password) return null

    const user = await prisma.user.findUnique({
        where:{
            email
        }
    })

    // ahora veo si el usuario existe o no
    if(!user){
        const dbUser = await createUser(email, password)
        return dbUser
    }


    // ahora si el usuario si existe
    if(!bcrypt.compareSync(password, user.password ?? '')){
        return null
    }
    // pero si existe, retorna al usuario
    return user




}

// si el usuario no existe, lo voy a crear
const createUser = async(email: string, password: string)=>{
    const user = await prisma.user.create({
        data:{
            email: email,
            password: bcrypt.hashSync(password),
            name: email.split('@')[0],

        }
    })

    return user
}