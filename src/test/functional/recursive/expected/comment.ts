import * as z from "zod"

export const CommentModel = z.object({
  id: z.string(),
  author: z.string(),
  contents: z.string(),
  parentId: z.string(),
})

/**
 * Prisma Model Select Zod Schema
 *
 */

export const CommentModelSelect = z.object({
  id: z.boolean().optional(),
  author: z.boolean().optional(),
  contents: z.boolean().optional(),
  parentId: z.boolean().optional(),
})

export interface CompleteComment extends z.infer<typeof CommentModel> {
  parent: CompleteComment
  children: CompleteComment[]
}

export interface CompleteSelectComment extends z.infer<typeof CommentModelSelect> {
  parent?: { select: CompleteSelectComment } | boolean
  children?: { select: CompleteSelectComment } | boolean
}

/**
 * RelatedCommentModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCommentModel: z.ZodSchema<CompleteComment> = z.lazy(() => CommentModel.extend({
  parent: RelatedCommentModel,
  children: RelatedCommentModel.array(),
}))

/**
 * RelatedCommentModelSelect contains a boolean type for all fields of the model and all its relations
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCommentModelSelect: z.ZodSchema<CompleteSelectComment> = z.lazy(() => CommentModelSelect.extend({
  parent: z.object({ select: RelatedCommentModelSelect }).or(z.boolean()),
  children: z.object({ select: RelatedCommentModelSelect }).or(z.boolean()),
}))
