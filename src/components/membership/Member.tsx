import { useAccounts } from '../../hooks/useAccounts'
import { useConnectButtonState } from '../../hooks/useConnectButtonState'
import { useSendTransactionManifest } from '../../hooks/useSendTransactionManifest'
import MembershipCard from './MembershipCard'

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
  const connectButtonState = useConnectButtonState()

  const {
    refresh,
    state: { accounts, status, hasLoaded: hasAccountsLoaded },
  } = useAccounts()

  console.log(`member.tsx: button status: ${connectButtonState}`)
  console.log(
    `member.tsx: accounts: ${JSON.stringify(
      accounts,
      null,
      2,
    )}, status: ${status}, hasLoaded: ${hasAccountsLoaded}`,
  )
  console.log('member.tsx: finished pre-return statements ')
  // const { mintMemberCard } =
  //   useSendTransactionManifest()()

  // if not connected - ask to connect first
  // if connected and 1 account loaded, if accounts has membership card show member profile
  // if no membership card, show mint card
  // if mint is clicked and transaction is in progress - show "Minting Membership card..."
  // if mint is success, show member profile

  return (
    <>
      <h1>Welcome Member!</h1>
      {/*<MembershipCard></MembershipCard>*/}
    </>
  )
}

export default Member
