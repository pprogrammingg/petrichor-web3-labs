import { useEffect } from 'react';
import { config } from '../../../config';
import { hasMemberCard, getMemberCardNonFungibleId, getMemberCard } from '../../../helpers/memberUtils';
import { useAccounts } from '../../../hooks/useAccounts';
import { useConnectButtonState } from '../../../hooks/useConnectButtonState';
import { usePersona } from '../../../hooks/usePersona';
import { useSendTransactionManifest } from '../../../hooks/useSendTransactionManifest';
import TaskCard from './TaskCard';
import styles from './task_list.module.css'

const TaskList = ({

 
}) => {
    console.log("render tasks list");
    const {
        refresh,
        state: { accounts, status, hasLoaded: hasAccountsLoaded },
      } = useAccounts()

    const { getRewardsWithReason } = useSendTransactionManifest()()

    const connectButtonState = useConnectButtonState()
    const isConnectButtonPending = connectButtonState === 'pending'
    
    const { hasLoaded: hasPersonaLoaded } = usePersona()

    const isLoading =
        !hasAccountsLoaded || accounts.length !== 1 || !hasPersonaLoaded
    
    if (isLoading) {
        return (
            <>
                <h3>Connect to an account to reveal tasks!</h3>
            </>
        )
    }
    
    console.log("tasks.tsx: account loaded")
    
    const selectedAccount: string = accounts[0].address
    const hasMemberShip = hasMemberCard(accounts)
    const memberCard = getMemberCard(accounts[0])
    const memberCardId = getMemberCardNonFungibleId(memberCard)

    const rewardFungibleToken = accounts[0].
    fungibleTokens[config.addresses.rewardTokenResourceAddress]

    let rewardAmount = "0";
    if (rewardFungibleToken) {
    rewardAmount = rewardFungibleToken.value;
    // Handle fungible token amount, for example, set it to state or do further processing
    console.log('Fungible Token Amount:', rewardAmount);
    }

    let hasLargeAmount = parseInt(rewardAmount) > 50;
    console.log(`hasLargeAmount ${hasLargeAmount}`)
    
    return(
        <>
            <div className={styles.taskGrid}>
                {hasMemberShip && (
    
                        
                            <TaskCard 
                                accounts={accounts}
                                description="Complete to earn 100 reward points"
                                disableSendButton={isConnectButtonPending}
                                onSubmit={() => {
                                    getRewardsWithReason(
                                            selectedAccount,
                                            '100',
                                            'User completed task',
                                            config.addresses.memberCardResourceAddress,
                                            memberCardId,
                                        ).map(refresh)
                                    }}
                            />
                )}
                {hasMemberShip && hasLargeAmount && (
                            <TaskCard 
                                accounts={accounts}
                                description="As a token of our appreciation, complete bonus task to EARN additional 50 additional points."
                                disableSendButton={isConnectButtonPending}
                                onSubmit={() => {
                                    getRewardsWithReason(
                                            selectedAccount,
                                            '50',
                                            'User bonus point',
                                            config.addresses.memberCardResourceAddress,
                                            memberCardId,
                                        ).map(refresh)
                                    }}
                            />
    
                )}
            </div>
        </>
    )
}

export default TaskList
