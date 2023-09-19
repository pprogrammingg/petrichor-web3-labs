import { hasMemberCard } from '../../helpers/memberUtils'
import { useAccounts } from '../../hooks/useAccounts'
import { useConnectButtonState } from '../../hooks/useConnectButtonState'
import { usePersona } from '../../hooks/usePersona'
import { useSendTransactionManifest } from '../../hooks/useSendTransactionManifest'
import { Button } from '../base/button'
import { CardProps, Card, Card2 } from '../base/card'
import styles from './cardList.module.css'

/**
 * cardLis for now is not really used, maybe in future an API or another process will
 * send cardList to it to populate
 * @param param0
 * @returns
 */
const CardList = ({ cardList }: { cardList: CardProps[] }) => {
  console.log('rendering member')
  // const connectButtonState =
  useConnectButtonState()

  const {
    refresh,
    state: { accounts, status, hasLoaded: hasAccountsLoaded },
  } = useAccounts()

  const { mintMemberCard } = useSendTransactionManifest()()

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

  return (
    <div className={styles.cardListContainer}>
      <Card2
        description="Complete this task to get 20 REW points"
        buttonText="Complete"
      ></Card2>

      <Card2
        description="Complete this task to get 20 REW points"
        buttonText="Complete"
      ></Card2>

      <Card2
        description="Complete this task to get 20 REW points"
        buttonText="Complete"
      ></Card2>

      <Card2
        description="Complete this task to get 20 REW points"
        buttonText="Complete"
      ></Card2>

      <Card2
        description="Complete this task to get 20 REW points"
        buttonText="Complete"
      ></Card2>

      <Card2
        description="Complete this task to get 20 REW points"
        buttonText="Complete"
      ></Card2>

      <Card2
        description="Complete this task to get 20 REW points"
        buttonText="Complete"
      ></Card2>

      <Card2
        description="Complete this task to get 20 REW points"
        buttonText="Complete"
      ></Card2>

      <Card2
        description="Complete this task to get 20 REW points"
        buttonText="Complete"
      ></Card2>

      <Card2
        description="Complete this task to get 20 REW points"
        buttonText="Complete"
      ></Card2>

      <Card2
        description="Complete this task to get 20 REW points"
        buttonText="Complete"
      ></Card2>

      <Card2
        description="Complete this task to get 20 REW points"
        buttonText="Complete"
      ></Card2>
    </div>
  )
}

export default CardList
