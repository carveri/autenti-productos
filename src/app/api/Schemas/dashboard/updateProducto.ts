import { z } from "zod";


export const UpdateProductoSchema = z.object({
    nombreProducto: z.string(),
    precio: z.number(),
    userId: z.string()
})