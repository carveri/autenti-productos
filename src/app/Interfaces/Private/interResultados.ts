

export interface BadgeResultados {
    nombreProducto: string
    precio: number
    id: string
    setActivarModal: boolean
    activarModal: boolean
}


export interface ParamsBadgeResultados {
    id: string
}

export interface ParamsFinal {
    params: ParamsBadgeResultados
}


// BADGERESULTADOS
export interface InterBadgeResultados {
    nombreProducto: string
    precio: number
    id: string
}