import { useState } from 'react'
import {
  getMemberCard,
  getMemberCardNonFungibleId,
  getNftData,
  hasMemberCard,
} from '../../helpers/memberUtils'
import { useAccounts } from '../../hooks/useAccounts'
import { useConnectButtonState } from '../../hooks/useConnectButtonState'
import { usePersona } from '../../hooks/usePersona'
import { useSendTransactionManifest } from '../../hooks/useSendTransactionManifest'
import { Button } from '../base/button'
import MembershipCard from './MembershipCard'
import styles from './member.module.css'

/**
 * When member first mounts, default state values are used for useConnectButtonState
 * and useAccounts custom hooks. After it is rendered, each of the hooks are called respectively.
 * useAccoutns state will set default state to pending and then to success, each will
 * cause a re-render on member. An empty dependency array is provided to useEffect inside
 * useConnectButtonState to prevent re-running this latter hook whenever the 2 setStates of
 * of useAccounts is triggered.
 * This way useConnectButtonState only sets state and causes re-render whenever the button state
 * observable emits new state data. Without the empty dependency array it would have been triggerred
 * as the result of operations inside useAccount, which seemed like a wrong coupling.
 *
 * @returns
 */
function Member() {
  console.log('rendering member')

  const [memberLevel, setMemberLevel] = useState(null);
  const [memberSinceLocal, setMemberSinceLocal] = useState("null");
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
    return (
      <>
          <h3>Connect to an account to reveal tasks!</h3>
      </>
    )
  }

  console.log('Loading is complete')

  // expecting maximum one account address
  const selectedAccount: string = accounts[0].address
  const hasMemberShip = hasMemberCard(accounts)

  if (!hasMemberShip) {
    console.log('no member card')

    return (
      <div className={styles.containerGrid}>
        <div className={styles.mintButtonContainer}>
          <h3>Mint your membershipcard first!</h3>
          <Button
            onClick={() => {
              if (selectedAccount) {
                mintMemberCard(selectedAccount).map(refresh)
              }
            }}
            className='mint'
          >
            Mint NFT
          </Button>
        </div>
      </div>
    )
  }

  console.log('User has membership!')
  const memberCard = getMemberCard(accounts[0])
  const memberCardId = getMemberCardNonFungibleId(memberCard)

  getNftData(memberCardId)
    .then((result: Record<string, any>) => {
      console.log(`memberCardData inside Member.tsx ${JSON.stringify(result, null, 2)}`)
      const level = result?.level?.value 
      const memberSinceUnixEpoch = result?.join_date_time?.value
      const memberSinceUTC = new Date(memberSinceUnixEpoch * 1000)
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
    
      const localDateString = memberSinceUTC?.toLocaleDateString(undefined, options)

      setMemberLevel(level);
      setMemberSinceLocal(localDateString);
    })
    .catch(() => {
      console.log("unable to extract member card data!")
    })

  return (
    <>
      {
      hasMemberShip && (
        <div className={styles.containerGrid}>
          <h1 className="memberPageHeading">Welcome Member!</h1>
          <div className={styles.memberCardContainer}>
            <MembershipCard></MembershipCard>
          </div>
          <div className={styles.memberCardInfo}>
            {
              (memberLevel && memberSinceLocal)?
              (
                <>
                  <p> Member joined on: {memberSinceLocal} </p>
                  <p> Member Level : {memberLevel} </p>
                </> 
              ):
              (
                <>
                  <p> Failed to retrieve member level and joined date</p>
                </>
              )

            }

            <p> Member Card ID: {memberCardId} </p>
          </div>
        </div>
      )}
    </>
  )
}

export default Member
