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
