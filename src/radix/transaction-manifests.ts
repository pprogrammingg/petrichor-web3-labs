import { ResourceAddresses } from '../config'
import { NonFungibleResource } from '../transformers/addTokens';
// import { NonFungibleResource } from '../transformers/addTokens'

export const TransactionManifests = ({
  memberComponentAddress,
}: ResourceAddresses) => {
  const mintMemberCard = (accountAddress: string) : string => {
    return `
        CALL_METHOD
            Address("${memberComponentAddress}")
            "mint_member_card";
        CALL_METHOD
            Address("${accountAddress}")
            "deposit_batch"
            Expression("ENTIRE_WORKTOP");
      `;
  }

  const getRewardsWithReason = (
    accountAddress: string,
    amount: string,
    reason: string,
    memberCard: NonFungibleResource
  ): string => {
    return  `
          CALL_METHOD
              Address("${accountAddress}")
              "create_proof_of_non_fungibles"
              Address("${memberCard}")
              Array<NonFungibleLocalId>(
                  NonFungibleLocalId("#1#")
              );

          CALL_METHOD
              Address("${memberComponentAddress}")
              "get_reward_with_reason"
              ${amount}
              "loving the users of this dApp";

          CALL_METHOD
              Address("${accountAddress}")
              "deposit_batch"
              Expression("ENTIRE_WORKTOP");
      `;
  }

  return { mintMemberCard, getRewardsWithReason  }
}
