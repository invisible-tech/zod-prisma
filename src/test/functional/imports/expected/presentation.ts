import * as z from "zod"
import { CompleteSpreadsheet, RelatedSpreadsheetModel, CompleteSelectSpreadsheet, RelatedSpreadsheetModelSelect } from "./index"

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

export interface CompletePresentation extends z.infer<typeof PresentationModel> {
  spreadsheets: CompleteSpreadsheet[]
}

export interface CompleteSelectPresentation extends z.infer<typeof PresentationModelSelect> {
  spreadsheets?: { select: CompleteSelectSpreadsheet } | boolean
}

/**
 * RelatedPresentationModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPresentationModel: z.ZodSchema<CompletePresentation> = z.lazy(() => PresentationModel.extend({
  spreadsheets: RelatedSpreadsheetModel.array(),
}))

/**
 * RelatedPresentationModelSelect contains a boolean type for all fields of the model and all its relations
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPresentationModelSelect: z.ZodSchema<CompleteSelectPresentation> = z.lazy(() => PresentationModelSelect.extend({
  spreadsheets: z.object({ select: RelatedSpreadsheetModelSelect }).or(z.boolean()),
}))
