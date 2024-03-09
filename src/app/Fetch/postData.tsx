import { InterPostData } from "../Interfaces/Private/interFetch"

// lo usa
// app/private/components/formulario
export const postData =async({ruta, data}:InterPostData)=>{
    //console.log(ruta);
    try {
        const apiUrl = `http://localhost:3000/api/${ruta}`

        const res = await fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify(data)
        })
        const desjson = await res.json()
        return desjson
        
    } catch (error) {
        console.log(error);
        
    }
}