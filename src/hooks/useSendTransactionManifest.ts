import { useCallback } from 'react'
import { TransactionManifests } from '../radix/transaction-manifests'
import { config } from '../config'
import { useSendTransaction } from './useSendTransaction'
import { NonFungibleResource } from '../transformers/addTokens'

export const useSendTransactionManifest = () => {
  const transactionManifests = TransactionManifests(config.addresses)
  const sendTransaction = useSendTransaction()

  return useCallback(
    () => ({
      mintMemberCard: (accountAddress: string) =>
        sendTransaction(transactionManifests.mintMemberCard(accountAddress)),
      getRewardsWithReason: (
        accountAddress: string,
        amount: string,
        reason: string,
        memberCard: NonFungibleResource,
      ) =>
        sendTransaction(
          transactionManifests.getRewardsWithReason(
            accountAddress,
            amount,
            reason,
            memberCard,
          ),
        ),
    }),
    [sendTransaction, transactionManifests],
  )
}
