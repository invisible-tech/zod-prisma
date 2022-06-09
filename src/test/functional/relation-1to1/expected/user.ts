import * as z from "zod"
import { CompleteKeychain, RelatedKeychainModel, CompleteSelectKeychain, RelatedKeychainModelSelect } from "./index"

export const UserModel = z.object({
  id: z.string(),
})

/**
 * Prisma Model Select Zod Schema
 *
 */

export const UserModelSelect = z.object({
  id: z.boolean().optional(),
})

export interface CompleteUser extends z.infer<typeof UserModel> {
  keychain?: CompleteKeychain | null
}

export interface CompleteSelectUser extends z.infer<typeof UserModelSelect> {
  keychain?: { select: CompleteSelectKeychain } | boolean
}

/**
 * RelatedUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserModel: z.ZodSchema<CompleteUser> = z.lazy(() => UserModel.extend({
  keychain: RelatedKeychainModel.nullish(),
}))

/**
 * RelatedUserModelSelect contains a boolean type for all fields of the model and all its relations
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserModelSelect: z.ZodSchema<CompleteSelectUser> = z.lazy(() => UserModelSelect.extend({
  keychain: z.object({ select: RelatedKeychainModelSelect }).or(z.boolean()),
}))
