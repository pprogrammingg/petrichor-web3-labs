import { ResourceAddresses } from '../config'
// import { NonFungibleResource } from '../transformers/addTokens'

export const TransactionManifests = ({
  memberComponentAddress,
}: ResourceAddresses) => {
  const mintMemberCard = (accountAddress: string) => 
    `
        CALL_METHOD
            Address("${memberComponentAddress}")
            "mint_member_card";
        CALL_METHOD
            Address("${accountAddress}")
            "deposit_batch"
            Expression("ENTIRE_WORKTOP");
    `

  const getRewardWithReason = (
    accountAddress: string,
    reason?: string,
    // memberCard: NonFungibleResource
  ) => {
            `
                CALL_METHOD
                    Address("${accountAddress}")
                    "create_proof_of_non_fungibles"
                    Address("resource_tdx_e_1ngay4xny3eg06635sld0lfkzf2jr7se3mrkph5pdvglse6qxva8qra")
                    Array<NonFungibleLocalId>(
                        NonFungibleLocalId("#1#")
                    );

                CALL_METHOD
                    Address("${memberComponentAddress}")
                    "get_reward_with_reason"
                    17u64
                    "loving the users of this dApp";

                CALL_METHOD
                    Address("${accountAddress}")
                    "deposit_batch"
                    Expression("ENTIRE_WORKTOP");
            `
  }

  return { mintMemberCard, getRewardWithReason  }
}
