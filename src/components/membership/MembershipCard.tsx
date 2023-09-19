import 'react'
import styles from './memberCard.module.css'

const MembershipCard = () => {
  return (
    <div className={styles.membershipCard}>
      <div className={styles.memberShipCardContent}>
        <div className={styles.topLeftText}>Rustasian</div>
        <div className={styles.bottomRightText}>
          <div>Company Name</div>
        </div>
      </div>
    </div>
  )
}

export default MembershipCard
