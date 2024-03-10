import { ParamsFinal } from "@/app/Interfaces/Private/interResultados";
import prisma from "@/libs/prisma";
import { NextResponse } from "next/server"
import { UpdateProductoSchema } from "../../Schemas/dashboard/updateProducto";


// put
export const PUT = async(req: Request, {params}:ParamsFinal)=>{
    const {nombreProducto, precio, userId} = await req.json()
    const {id} = params
    try {
        const updatedAllProductos = await prisma.producto.update({
            where:{
                id: id
            },
            data: UpdateProductoSchema.parse({
                nombreProducto,
                precio,
                userId
            })
        })
        return NextResponse.json(updatedAllProductos, {
            status: 201
        })
    } catch (error) {
        return NextResponse.json(error, {
            status: 500
        })
    }
}


// delete
export const DELETE = async(req: Request, {params}:ParamsFinal)=>{
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


// get One
export const GET = async(req:Request, {params}: ParamsFinal)=>{
    const {id} = params
    try {
        const getOneProducto = await prisma.producto.findUnique({
            where:{
                id: id
            }
        })
        return NextResponse.json(getOneProducto, {
            status: 200
        })
    } catch (error) {
        return NextResponse.json(error, {
            status: 500
        })
    }
}