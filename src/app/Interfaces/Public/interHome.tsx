
export interface User {
    name: string | undefined | null
    email: string |undefined
    image?: string | undefined

}

export interface Session {
    user: User 
}

