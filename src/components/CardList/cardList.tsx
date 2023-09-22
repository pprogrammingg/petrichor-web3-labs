import {
  getMemberCard,
  getMemberCardNonFungibleId,
  hasMemberCard,
} from '../../helpers/memberUtils'
import { useAccounts } from '../../hooks/useAccounts'
import { useConnectButtonState } from '../../hooks/useConnectButtonState'
import { usePersona } from '../../hooks/usePersona'
import { useSendTransactionManifest } from '../../hooks/useSendTransactionManifest'
import { Button } from '../base/button'
import { CardProps, Card } from '../base/card'
import { config } from '../../config'
import styles from './cardList.module.css'
import { useState } from 'react'

/**
 * cardLis for now is not really used, maybe in future an API or another process will
 * send cardList to it to populate
 * @param param0
 * @returns
 */
const CardList = ({ cardList }: { cardList: CardProps[] }) => {
  console.log('rendering cardList')

  const [isButtonDisabled, setIsButtonDisabled] = useState(false)
  const [cardClassName, setCardClassName] = useState(styles.card)

  useConnectButtonState()

  const {
    refresh,
    state: { accounts, status, hasLoaded: hasAccountsLoaded },
  } = useAccounts()

  const { getRewardsWithReason } = useSendTransactionManifest()()

  const { hasLoaded: hasPersonaLoaded } = usePersona()

  const isLoading =
    !hasAccountsLoaded || accounts.length !== 1 || !hasPersonaLoaded

  // console.log(
  //   `member.tsx: accounts: ${JSON.stringify(
  //     accounts,
  //     null,
  //     2,
  //   )}, status: ${status}, hasLoaded: ${hasAccountsLoaded}`,
  // )
  // console.log(`hasPersonaLoaded : ${hasPersonaLoaded} `)

  if (isLoading) {
    return null
  }

  console.log('Loading is complete')

  // expecting maximum one account address
  const selectedAccount: string = accounts[0].address
  const hasMemberShip = hasMemberCard(accounts)

  let onClick = () => {}

  if (hasMemberShip) {
    console.log('User has membership card!')
    const memberCard = getMemberCard(accounts[0])
    const memberCardId = getMemberCardNonFungibleId(memberCard)

    onClick = () => {
      setIsButtonDisabled(true)
      setCardClassName(`${styles.card} ${styles.cardDisabled}`)

      if (selectedAccount) {
        getRewardsWithReason(
          selectedAccount,
          '23',
          'User completed task',
          config.addresses.memberCardResourceAddress,
          memberCardId,
        ).map(refresh)
      }
    }
  }

  return (
    <>
      <div className={styles.cardListContainer}>
        <Card className={cardClassName}>
          <div className={styles.cardDescription}>
            Lorem ipsum dolor sit amet,
          </div>
          <Button
            disabled={isButtonDisabled}
            onClick={onClick}
            className={styles.cardButton}
          >
            Complete
          </Button>
        </Card>
      </div>
    </>
  )
}

export default CardList
