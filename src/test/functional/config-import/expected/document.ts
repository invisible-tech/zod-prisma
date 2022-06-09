import * as z from "zod"
import * as imports from "../prisma/zod-utils"

export const DocumentModel = z.object({
  id: z.string(),
  filename: z.string(),
  author: z.string(),
  contents: z.string(),
  size: imports.decimalSchema,
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
  size: z.boolean().optional(),
  created: z.boolean().optional(),
  updated: z.boolean().optional(),
})
