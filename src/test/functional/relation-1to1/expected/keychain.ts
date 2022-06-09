import * as z from "zod"
import { CompleteUser, RelatedUserModel, CompleteSelectUser, RelatedUserModelSelect } from "./index"

export const KeychainModel = z.object({
  userID: z.string(),
})

/**
 * Prisma Model Select Zod Schema
 *
 */

export const KeychainModelSelect = z.object({
  userID: z.boolean().optional(),
})

export interface CompleteKeychain extends z.infer<typeof KeychainModel> {
  owner: CompleteUser
}

export interface CompleteSelectKeychain extends z.infer<typeof KeychainModelSelect> {
  owner?: { select: CompleteSelectUser } | boolean
}

/**
 * RelatedKeychainModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedKeychainModel: z.ZodSchema<CompleteKeychain> = z.lazy(() => KeychainModel.extend({
  owner: RelatedUserModel,
}))

/**
 * RelatedKeychainModelSelect contains a boolean type for all fields of the model and all its relations
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedKeychainModelSelect: z.ZodSchema<CompleteSelectKeychain> = z.lazy(() => KeychainModelSelect.extend({
  owner: z.object({ select: RelatedUserModelSelect }).or(z.boolean()),
}))
