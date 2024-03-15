import prisma from './../../../libs/prisma'

class Registro {

    // metodo post
    postRegistro = async(req:Request)=>{
        const {name, email, password} = await req.json()
        const saveUser = await prisma.user.create({
            data:{
                name,
                email,
                password
            }
        })
        return saveUser
    }

    // metodo get ALl
    getRegistro = async(req:Request)=>{
        const getAllUser = await prisma.user.findMany()
        return getAllUser
    }
}

export const registro1 = new Registro()