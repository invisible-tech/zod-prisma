import * as z from "zod"

export const PostModel = z.object({
  id: z.string(),
  title: z.string(),
  contents: z.string(),
  userId: z.string(),
})

/**
 * Prisma Model Select Zod Schema
 *
 */

export const PostModelSelect = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  contents: z.boolean().optional(),
  userId: z.boolean().optional(),
})
