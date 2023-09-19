import { config } from '../config'
import { AccountWithTokens } from '../hooks/useAccounts'
import { NonFungibleResource } from '../transformers/addTokens'

export const hasMemberCard = (accounts: AccountWithTokens[]) =>
  accounts.some(
    (account) =>
      Object.values(
        account.nonFungibleTokens[config.addresses.memberCardResourceAddress] ||
          {},
      ).length > 0,
  )

export const getMemberCard = (
  account: AccountWithTokens,
): NonFungibleResource | undefined => {
  const memberCards =
    account.nonFungibleTokens[config.addresses.memberCardResourceAddress]
  return memberCards ? memberCards[0] : undefined
}

export const getMemberCardJsonData = (
  memberCard: NonFungibleResource | undefined,
): Record<string, any> | undefined => {
  // Initialize an empty result object
  const result: Record<string, any> = {}

  // Use optional chaining to safely access memberCard.data
  memberCard?.data?.programmatic_json?.fields?.forEach(
    (item: Record<string, any>) => {
      const { field_name, ...rest } = item
      result[field_name] = { ...rest }
    },
  )

  // Return the result
  return result
}
