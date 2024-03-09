
// lo usa

import { InterGetData } from "../Interfaces/Private/interFetch"

// app/private/components/formulario
export const getData = async({ruta}:InterGetData)=>{
    try {
        const apiUrl = `http://localhost:3000/api/${ruta}`

        const res = await fetch(apiUrl)
        const desjson = await res.json()
        return desjson
    } catch (error) {
        console.log(error);
        
    }
}