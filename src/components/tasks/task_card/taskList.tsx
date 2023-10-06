import { config } from '../../../config';
import { useAccounts } from '../../../hooks/useAccounts';
import { usePersona } from '../../../hooks/usePersona';
import { useSendTransactionManifest } from '../../../hooks/useSendTransactionManifest';
import TaskCard from './TaskCard';
import styles from './task_list.module.css'
const TaskList = ({

 
}) => {

    const {
        refresh,
        state: { accounts, status, hasLoaded: hasAccountsLoaded },
      } = useAccounts()

    const { getRewardsWithReason } = useSendTransactionManifest()()

    const { hasLoaded: hasPersonaLoaded } = usePersona()

    const isLoading =
        !hasAccountsLoaded || accounts.length !== 1 || !hasPersonaLoaded
    
    if (isLoading) {
        return null
    }
    
    let hasMemberShip = true;
    let isConnectButtonPending = false;
    <>
        {hasMemberShip && (
            <div className={styles.taskGrid}>
                <TaskCard 
                    disableSendButton={isConnectButtonPending}
                    accounts={accounts}
                    onSubmit={(selectedAccount: string) => {
                        getRewardsWithReason(
                                selectedAccount,
                                '23',
                                'User completed task',
                                config.addresses.memberCardResourceAddress,
                                "123",
                            ).map(refresh)
                        }}
                />
            </div>
        )}
    </>
    
}

export default TaskList
