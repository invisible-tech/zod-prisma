import * as z from "zod"
import { CompletePresentation, RelatedPresentationModel, CompleteSelectPresentation, RelatedPresentationModelSelect } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const SpreadsheetModel = z.object({
  id: z.string(),
  filename: z.string(),
  author: z.string(),
  contents: jsonSchema,
  created: z.date(),
  updated: z.date(),
})

/**
 * Prisma Model Select Zod Schema
 *
 */

export const SpreadsheetModelSelect = z.object({
  id: z.boolean().optional(),
  filename: z.boolean().optional(),
  author: z.boolean().optional(),
  contents: z.boolean().optional(),
  created: z.boolean().optional(),
  updated: z.boolean().optional(),
})

export interface CompleteSpreadsheet extends z.infer<typeof SpreadsheetModel> {
  presentations: CompletePresentation[]
}

export interface CompleteSelectSpreadsheet extends z.infer<typeof SpreadsheetModelSelect> {
  presentations?: { select: CompleteSelectPresentation } | boolean
}

/**
 * RelatedSpreadsheetModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedSpreadsheetModel: z.ZodSchema<CompleteSpreadsheet> = z.lazy(() => SpreadsheetModel.extend({
  presentations: RelatedPresentationModel.array(),
}))

/**
 * RelatedSpreadsheetModelSelect contains a boolean type for all fields of the model and all its relations
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedSpreadsheetModelSelect: z.ZodSchema<CompleteSelectSpreadsheet> = z.lazy(() => SpreadsheetModelSelect.extend({
  presentations: z.object({ select: RelatedPresentationModelSelect }).or(z.boolean()),
}))
