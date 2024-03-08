import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";


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
export const GET = async(req:Request)=>{
    try {
        const getAllProducto = await prisma.producto.findMany()
        return NextResponse.json(getAllProducto)
    } catch (error) {
        return NextResponse.json(error, {
            status: 500
        })
    }
}


