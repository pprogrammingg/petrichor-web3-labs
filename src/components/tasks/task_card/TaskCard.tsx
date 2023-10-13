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
  description,
  onSubmit,
  disableSendButton,
} : {
  accounts: WalletDataStateAccount[],
  description: string,
  onSubmit: () => void
  disableSendButton?: boolean
}) => {

  const [isCompleted, setIsCompleted] = useState(false); // State to track completion status
  const isButtonDisabled = accounts.length === 0 || isCompleted;

  const handleButtonClick = async () => {
    // Call the onSubmit function and handle completion logic here
    try {
      await onSubmit();
      setIsCompleted(true); // Mark the task as completed
    } catch (error) {
      console.error(error);
    }
  };

  console.log(`isButtonDisabled ${isButtonDisabled}`)
  return (
    <Card className="task_card">
      <div className={styles.cardDescription}>
        {description}
      </div>
      <Button
        disabled={isButtonDisabled || disableSendButton}
        onClick={handleButtonClick}
        className="task"
      >
          {isCompleted ? 'Claimed' : 'Complete'}
      </Button>
  </Card>
  )

}

export default TaskCard
