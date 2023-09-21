import styles from './Card2.module.css'

export const Card2 = () => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h2>01</h2>
        <h3>Card One</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>
        <a href="#">Read More</a>
      </div>
    </div>
  )
}
