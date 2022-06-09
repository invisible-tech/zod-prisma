import * as z from "zod"
import { CompletePost, RelatedPostModel, CompleteSelectPost, RelatedPostModelSelect } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const UserModel = z.object({
  id: z.number().int(),
  meta: jsonSchema,
})

/**
 * Prisma Model Select Zod Schema
 *
 */

export const UserModelSelect = z.object({
  id: z.boolean().optional(),
  meta: z.boolean().optional(),
})

export interface CompleteUser extends z.infer<typeof UserModel> {
  posts?: CompletePost | null
}

export interface CompleteSelectUser extends z.infer<typeof UserModelSelect> {
  posts?: { select: CompleteSelectPost } | boolean
}

/**
 * RelatedUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserModel: z.ZodSchema<CompleteUser> = z.lazy(() => UserModel.extend({
  posts: RelatedPostModel.nullish(),
}))

/**
 * RelatedUserModelSelect contains a boolean type for all fields of the model and all its relations
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserModelSelect: z.ZodSchema<CompleteSelectUser> = z.lazy(() => UserModelSelect.extend({
  posts: z.object({ select: RelatedPostModelSelect }).or(z.boolean()),
}))
