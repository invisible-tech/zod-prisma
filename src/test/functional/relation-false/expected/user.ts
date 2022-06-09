import * as z from "zod"

export const UserModel = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
})

/**
 * Prisma Model Select Zod Schema
 *
 */

export const UserModelSelect = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
})
