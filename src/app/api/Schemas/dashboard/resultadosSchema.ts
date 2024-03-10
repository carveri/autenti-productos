import { z } from "zod";

export const resultadosSchema = z.object({
    nombreProducto: z.string(),
    precio: z.number(),
    userId: z.string()
})