
export interface PostData {
    nombreProducto: string
    precio: number
    userId?: string
}

export interface InterPostData {
    ruta: string
    data: PostData
}


export interface InterGetData {
    ruta: string
}

export interface InterGetOneData {
    idProducto: string
}


export interface InterDeleteData {
    ruta: string
    idProducto: string
}