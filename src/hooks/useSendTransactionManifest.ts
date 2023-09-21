import { useCallback } from 'react'
import { TransactionManifests } from '../radix/transaction-manifests'
import { config } from '../config'
import { useSendTransaction } from './useSendTransaction'

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
        memberCardResourceAddress: string,
        memberCardId: string,
      ) =>
        sendTransaction(
          transactionManifests.getRewardsWithReason(
            accountAddress,
            amount,
            reason,
            memberCardResourceAddress,
            memberCardId,
          ),
        ),
    }),
    [sendTransaction, transactionManifests],
  )
}
