import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <NavLink
            activeClassName={styles.active}
            className={styles.link}
            to="/"
            end="true"
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName={styles.active}
            className={styles.link}
            to="contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
