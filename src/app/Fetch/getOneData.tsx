import { InterGetOneData } from "../Interfaces/Private/interFetch"


export const getOneData =async({idProducto}:InterGetOneData)=>{
    try {
        const apiUrl = `http://localhost:3000/api/producto/${idProducto}`

        const res = await fetch(apiUrl)
        const desjson = await res.json()
        return desjson 
    } catch (error) {
        console.log(error);
        
    }
}