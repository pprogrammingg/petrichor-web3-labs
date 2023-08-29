import { NavLink, Outlet } from 'react-router-dom';
import styles from './rootLayout.module.css';
import { RdtProvider } from '../rdt/RdtProvider'
import { rdt } from '../rdt/rdt'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'radix-connect-button': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >
    }
  }
}

function RootLayout() {
  console.log('Value of rdt:', rdt); // Log the value of rdt
  return (
    <>  
      <RdtProvider value={rdt}>
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
      </RdtProvider>
    </>
  );
}

export default RootLayout;
