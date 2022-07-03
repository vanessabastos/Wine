import React from 'react';
import Sidebar from './Sidebar';
import styles from '../styles/Home.module.css';

function Main() {
  return (
    <section className={styles.catalogo}>
      <Sidebar />
    </section>
  )
}

export default Main;