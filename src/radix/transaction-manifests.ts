import { ResourceAddresses } from '../config'

export const TransactionManifests = ({
  memberComponentAddress,
}: ResourceAddresses) => {
  const mintMemberCard = (accountAddress: string): string => {
    return `
        CALL_METHOD
            Address("${memberComponentAddress}")
            "mint_member_card";
        CALL_METHOD
            Address("${accountAddress}")
            "deposit_batch"
            Expression("ENTIRE_WORKTOP");
      `
  }

  const getRewardsWithReason = (
    accountAddress: string,
    amount: string,
    reason: string,
    memberCardResourceAddress: string,
    memberCardId: string,
  ): string => {
    console.log(`Issuing reward amount: ${amount}", for reason: ${reason}`)
//     console.log(`
//     CALL_METHOD
//         Address("${accountAddress}")
//         "create_proof_of_non_fungibles"
//         Address("${memberCardResourceAddress}")
//         Array<NonFungibleLocalId>(
//             NonFungibleLocalId("${memberCardId}")
//         );

//     CALL_METHOD
//         Address("${memberComponentAddress}")
//         "get_reward_with_reason"
//         ${amount}u64
//         "loving the users of this dApp";

//     CALL_METHOD
//         Address("${accountAddress}")
//         "deposit_batch"
//         Expression("ENTIRE_WORKTOP");
// `)

    return `
          CALL_METHOD
              Address("${accountAddress}")
              "create_proof_of_non_fungibles"
              Address("${memberCardResourceAddress}")
              Array<NonFungibleLocalId>(
                  NonFungibleLocalId("${memberCardId}")
              );

          CALL_METHOD
              Address("${memberComponentAddress}")
              "get_reward_with_reason"
              ${amount}u64
              "loving the users of this dApp";

          CALL_METHOD
              Address("${accountAddress}")
              "deposit_batch"
              Expression("ENTIRE_WORKTOP");
      `
  }

  return { mintMemberCard, getRewardsWithReason }
}
