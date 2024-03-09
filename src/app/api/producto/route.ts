'use server'

import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import { getUserSessionSever } from "@/auth/actions/auth-actions";



// post
export const POST = async(req: Request)=>{
    try {
        const saveProducto = await prisma.producto.create({
            data: await req.json()
        })
        return NextResponse.json(saveProducto)
    } catch (error) {
        return NextResponse.json(error, {
            status: 500
        })
    }
}


// get
export const GET = async(req: Request)=>{

    const id = await getUserSessionSever()
    console.log('sessionas:', id);
    

    try {
        const getAllProducto = await prisma.producto.findMany({
            where:{
                userId: id
            }
        })
        return NextResponse.json(getAllProducto)
    } catch (error) {
        return NextResponse.json(error, {
            status: 500
        })
    }
}



