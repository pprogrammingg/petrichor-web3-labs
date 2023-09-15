import 'react'
import styles from './membership_card.module.css' // Import CSS file for styling
import { Form } from 'react-router-dom'

const MembershipCard = () => {
  return (
    <div className={styles.membershipCard}>
      <div className={styles.memberShipCardContent}>
        <div className={styles.topLeftText}>Rustasian</div>
        <div className={styles.bottomRightText}>
          <div>Level: 3</div>
          <div>Member Since: 28/02/2023</div>
        </div>
      </div>
    </div>
  )
}

export default MembershipCard
