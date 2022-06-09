import * as z from "zod"

export const PresentationModel = z.object({
  id: z.string(),
  filename: z.string(),
  author: z.string(),
  contents: z.string().array(),
  created: z.date(),
  updated: z.date(),
})

/**
 * Prisma Model Select Zod Schema
 *
 */

export const PresentationModelSelect = z.object({
  id: z.boolean().optional(),
  filename: z.boolean().optional(),
  author: z.boolean().optional(),
  contents: z.boolean().optional(),
  created: z.boolean().optional(),
  updated: z.boolean().optional(),
})
