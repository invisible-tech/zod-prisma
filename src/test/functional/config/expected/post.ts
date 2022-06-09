import * as z from "zod"
import { CompleteUser, userSchema, CompleteSelectUser, userSchemaSelect } from "./index"

export const _postSchema = z.object({
  id: z.string(),
  title: z.string(),
  contents: z.string(),
  userId: z.string(),
})

/**
 * Prisma Model Select Zod Schema
 *
 */

export const _postSchemaSelect = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  contents: z.boolean().optional(),
  userId: z.boolean().optional(),
})

export interface CompletePost extends z.infer<typeof _postSchema> {
  author: CompleteUser
}

export interface CompleteSelectPost extends z.infer<typeof _postSchemaSelect> {
  author?: { select: CompleteSelectUser } | boolean
}

/**
 * postSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const postSchema: z.ZodSchema<CompletePost> = z.lazy(() => _postSchema.extend({
  author: userSchema,
}))

/**
 * postSchemaSelect contains a boolean type for all fields of the model and all its relations
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const postSchemaSelect: z.ZodSchema<CompleteSelectPost> = z.lazy(() => _postSchemaSelect.extend({
  author: z.object({ select: userSchemaSelect }).or(z.boolean()),
}))
