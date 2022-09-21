import { Button, Burger, Image } from '@mantine/core';
import { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import Searchbar from './Searchbar';

const Navbar = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? 'Close navigation' : 'Open navigation';
  return (
    <nav className={styles.navbar} >
      <ul>

        <li className={styles.logoSearch}>
          <a href="/">
            <Image src="/logo.png" width={60} height={60} />
          </a>
          <Searchbar/>
        </li>

        <li className={styles.rightButtons}>
            <Button fullWidth variant="outline" color="gray">
              sign up / log in
            </Button>
            <Burger 
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              title={title}/>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;