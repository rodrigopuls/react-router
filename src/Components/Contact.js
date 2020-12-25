import React from 'react';
import styles from './Contact.module.css';
import foto from '../img/contato.jpg';
import Head from './Head';

const Contact = () => {
  return (
    <section className={`${styles.contact} animeLeft`}>
      <Head title="Contact" description="Contact Us" />
      <img src={foto} alt="Typewriter" />
      <div>
        <h1>Contact Us</h1>
        <ul className={styles.info}>
          <li>email@email.com</li>
          <li>99999-9999</li>
          <li>Address, 123</li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
