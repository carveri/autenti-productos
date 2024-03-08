
import { InterProducto } from "../Interfaces/Private/interProductos"

// lo usa
// app/private/components/formulario
export const getData = async({ruta}: InterProducto)=>{
    try {
        const apiUrl = `http://localhost:3000/api/${ruta}`

        const res = await fetch(apiUrl)
        const desjson = await res.json()
        return desjson
    } catch (error) {
        console.log(error);
        
    }
}