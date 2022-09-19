import { Button, Burger, Image } from '@mantine/core';
import { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import cn from 'classnames';
// import searchbar from './searchbar';

const Navbar = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? 'Close navigation' : 'Open navigation';
  return (
    <div className={styles.navbar} >
      <ul className={styles.navbar}>
        <li className={styles.navbar}>
          <a href="/">
            <Image src="/logo.png" width={60} height={60} />
          </a>
        </li>
        <li className={styles.searchbar}>
          {/* <searchbar/>hahahahahaha */}
          <div className={styles.cover}>
            <form className={styles.form} method="get" action="">
              <div className={styles.tb}>
                <div className={styles.td}>
                    <input type="text" placeholder="Search" required/>
                </div>
                <div className={cn(styles.td, styles.s_cover)}>
                  <button className={styles.button} type="submit">
                    <div className={styles.s_circle}></div>
                    <span></span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>
        <li className={styles.navbar}>
          <div style={{ width: 140 }}>
            <Button fullWidth variant="outline" color="gray">
              sign up / log in
            </Button>
          </div>
        <li className={styles.navbar}>
          <Burger 
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              title={title}/>
        </li>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;