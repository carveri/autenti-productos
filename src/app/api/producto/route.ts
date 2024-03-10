
import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import { getUserSessionSever } from "@/auth/actions/auth-actions";
import { agregarSchema } from "../Schemas/dashboard/agregarSchema";



// post
export const POST = async(req: Request)=>{    
    const {nombreProducto, precio, userId} = await req.json()
    try {
        const saveProducto = await prisma.producto.create({
            data: agregarSchema.parse({
                nombreProducto, 
                precio, 
                userId
            })
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



