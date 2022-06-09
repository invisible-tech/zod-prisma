import * as z from "zod"
import { CompletePost, postSchema, CompleteSelectPost, postSchemaSelect } from "./index"

export const _userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
})

/**
 * Prisma Model Select Zod Schema
 *
 */

export const _userSchemaSelect = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
})

export interface CompleteUser extends z.infer<typeof _userSchema> {
  posts: CompletePost[]
}

export interface CompleteSelectUser extends z.infer<typeof _userSchemaSelect> {
  posts?: { select: CompleteSelectPost } | boolean
}

/**
 * userSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const userSchema: z.ZodSchema<CompleteUser> = z.lazy(() => _userSchema.extend({
  posts: postSchema.array(),
}))

/**
 * userSchemaSelect contains a boolean type for all fields of the model and all its relations
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const userSchemaSelect: z.ZodSchema<CompleteSelectUser> = z.lazy(() => _userSchemaSelect.extend({
  posts: z.object({ select: postSchemaSelect }).or(z.boolean()),
}))
