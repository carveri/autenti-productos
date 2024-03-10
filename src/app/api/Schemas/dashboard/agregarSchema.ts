import { z } from "zod";

export const agregarSchema = z.object({
    nombreProducto: z.string(),
    precio: z.number(),
    userId: z.string()
})