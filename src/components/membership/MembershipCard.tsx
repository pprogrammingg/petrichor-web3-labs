import 'react'
import styles from './memberCard.module.css'

const MembershipCard = () => {
  return (
    <div className={styles.membershipCard}>
      <div className={styles.memberShipCardContent}>
        <div className={styles.topLeftText}>SENECA COLLEGE</div>
        <div className={styles.bottomRightText}>
          <div>Rustasian</div>
        </div>
      </div>
    </div>
  )
}

export default MembershipCard
