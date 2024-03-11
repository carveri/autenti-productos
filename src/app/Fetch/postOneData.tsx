import { InterPostOneData } from "../Interfaces/Private/interFetch";


export const postOneData = async({ruta, data, id}:InterPostOneData)=>{
    console.log('ruta:', ruta);
    console.log('data:', data);
    console.log('id: ', id);
    
    try {
        const apiUrl = `http://localhost:3000/api/${ruta}/${id}`

        const res = await fetch(apiUrl,{
            method: 'PUT',
            body: JSON.stringify(data)
        })
        const desjson = await res.json()
        return desjson
    } catch (error) {
        console.log(error);
        
    }
}