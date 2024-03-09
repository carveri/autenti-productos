

export const getOneData =async({idProducto})=>{
    try {
        const apiUrl = `http://localhost:3000/api/producto/${idProducto}`

        const res = await fetch(apiUrl)
        const desjson = await res.json()
        return desjson 
    } catch (error) {
        console.log(error);
        
    }
}