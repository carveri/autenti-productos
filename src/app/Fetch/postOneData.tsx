

export const postOneData = async({ruta, data})=>{
    try {
        const apiUrl = `http://localhost:3000/api/${ruta}/4`

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