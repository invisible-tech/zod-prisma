import * as z from "zod"

export const DocumentModel = z.object({
  id: z.string(),
  filename: z.string(),
  author: z.string(),
  contents: z.string(),
  created: z.date(),
  updated: z.date(),
})

/**
 * Prisma Model Select Zod Schema
 *
 */

export const DocumentModelSelect = z.object({
  id: z.boolean().optional(),
  filename: z.boolean().optional(),
  author: z.boolean().optional(),
  contents: z.boolean().optional(),
  created: z.boolean().optional(),
  updated: z.boolean().optional(),
})
