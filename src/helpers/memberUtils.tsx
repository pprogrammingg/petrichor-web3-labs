import { config } from '../config'
import { AccountWithTokens } from '../hooks/useAccounts'
import { useDappToolkit } from '../hooks/useDappToolkit'
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
): NonFungibleResource => {
  const memberCards =
    account.nonFungibleTokens[config.addresses.memberCardResourceAddress]
  return memberCards[0]
}

export const getNftData = async (ids: string ) => {
  const dAppToolkit = useDappToolkit()
  const stateApi = dAppToolkit.gatewayApi.state;
 
  try {
    const res = await stateApi.getNonFungibleData(config.addresses.memberCardResourceAddress, ids);
    console.log("asynch complete")
    const result: Record<string, any> = {}

    const fields = (res?.data?.programmatic_json as { fields?: Record<string, any>[] })?.fields || [];

    fields.forEach((item: Record<string, any>) => {
      const { field_name, ...rest } = item;
      result[field_name] = { ...rest };
    });

    return result;
  } catch (error) {
    // Handle errors if necessary
    console.error(error);
    return {}; // Return an empty object in case of error
  }
}

export const getMemberCardNonFungibleId = (
  memberCard: NonFungibleResource,
): string => {
  return memberCard.id
}
