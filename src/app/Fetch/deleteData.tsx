

// lo usa dashboard/resultados/componenst/badgeresultado

import { InterDeleteData } from "../Interfaces/Private/interFetch"

export const deleteData = async({ruta,idProducto}:InterDeleteData)=>{
    try {
        const apiUrl = `http://localhost:3000/api/${ruta}/${idProducto}`

        const res = await fetch(apiUrl, {
            method: 'DELETE'
        })
        const desjson = await res.json()
        return desjson

    } catch (error) {
        console.log(error);
        
    }
}