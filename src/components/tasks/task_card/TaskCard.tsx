import {
  getMemberCard,
  getMemberCardNonFungibleId,
  hasMemberCard,
} from '../../../helpers/memberUtils'
import styles from './task_card.module.css'
import { useEffect, useState } from 'react'
import { Button } from '../../base/button'
import { WalletDataStateAccount } from '@radixdlt/radix-dapp-toolkit'
import { Card } from '../../base/card'


const TaskCard = ({
  accounts,
  onSubmit,
  disableSendButton,
} : {
  accounts: WalletDataStateAccount[]
  onSubmit: (selectedAccount: string) => void
  disableSendButton?: boolean
}) => {
  const [{ selectedAccount }, setState] = useState<{
    selectedAccount?: string
  }>({})

  useEffect(() => {
    if (selectedAccount) {
      const selectedAccountExists = accounts.some(
        (account) => account.address === selectedAccount
      )
      if (!selectedAccountExists) setState({ selectedAccount: undefined })
    }
  }, [selectedAccount, accounts])

  const isButtonDisabled = !selectedAccount || accounts.length === 0

  return (
    <Card className={styles.card} outerClassName={styles['outer-card']}>
      <div className={styles.cardDescription}>
        This is a description
      </div>
    <Button
      icon="external-link"
      disabled={isButtonDisabled || disableSendButton}
      onClick={() => {
        if (selectedAccount) {
          onSubmit(selectedAccount)
        }
      }}
    >
        Send to the Radix Wallet
      </Button>
  </Card>
  )

}

export default TaskCard
