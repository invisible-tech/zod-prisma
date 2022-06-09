import * as z from "zod"
import { CompleteUser, RelatedUserModel, CompleteSelectUser, RelatedUserModelSelect } from "./index"

export const PostModel = z.object({
  id: z.number().int(),
  authorId: z.number().int(),
})

/**
 * Prisma Model Select Zod Schema
 *
 */

export const PostModelSelect = z.object({
  id: z.boolean().optional(),
  authorId: z.boolean().optional(),
})

export interface CompletePost extends z.infer<typeof PostModel> {
  author: CompleteUser
}

export interface CompleteSelectPost extends z.infer<typeof PostModelSelect> {
  author?: { select: CompleteSelectUser } | boolean
}

/**
 * RelatedPostModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPostModel: z.ZodSchema<CompletePost> = z.lazy(() => PostModel.extend({
  author: RelatedUserModel,
}))

/**
 * RelatedPostModelSelect contains a boolean type for all fields of the model and all its relations
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPostModelSelect: z.ZodSchema<CompleteSelectPost> = z.lazy(() => PostModelSelect.extend({
  author: z.object({ select: RelatedUserModelSelect }).or(z.boolean()),
}))
