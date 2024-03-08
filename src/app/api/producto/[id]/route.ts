import { NextResponse } from "next/server"
import prisma from "@/libs/prisma";


interface Params{
    params: {
        id: string
    }
}
// put
export const PUT =async(req: Request, {params}:Params)=>{
    const {id} = params
    const {nombreProducto, precio, userId} = await req.json()

    try {
        const updatedOneProducto = await prisma.producto.update({
            where:{
                id:id
            },
            data:{
                nombreProducto,
                precio, 
                userId
            }
        })
        return NextResponse.json(updatedOneProducto, {
            status: 201
        })

    } catch (error) {
        return NextResponse.json(error, {
            status: 500
        })
    }
}


// delete 
export const DELETE = async(req: Request, {params}: Params)=>{
    const {id} = params
    try {
        const deleteOneProducto = await prisma.producto.delete({
            where:{
                id
            }
        })
        return NextResponse.json(deleteOneProducto, {
            status: 201
        })
    } catch (error) {
        return NextResponse.json(error, {
            status: 500
        })
    }
}


// get ONE
export const GET = async(req: Request, {params}:Params)=>{
    const {id} = params
    try {
        const getOneProducto = await prisma.producto.findUnique({
            where:{
                id
            }
        })
        return NextResponse.json(getOneProducto,{
            status: 200
        })
    } catch (error) {
        return NextResponse.json(error, {
            status: 500
        })
    }
}