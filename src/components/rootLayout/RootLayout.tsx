import { NavLink, Outlet } from 'react-router-dom';
import styles from './rootLayout.module.css';

function RootLayout() {
  return (
    <>  
        <nav className={styles.navBar}>
            <NavLink to="/" className={styles.navBarItem}>Home</NavLink> 
            <NavLink to="/member" className={styles.navBarItem}>Member</NavLink>
            <NavLink to="/tasks" className={styles.navBarItem}>Tasks</NavLink>
            <span className={styles.navBarConnectWallet}>
              <radix-connect-button></radix-connect-button>
            </span>
        </nav>
        <div className={styles.mainContainer}>
          <div className={styles.mainContent}>
              <Outlet />
          </div>
        </div>
    </>
  );
}

export default RootLayout;
