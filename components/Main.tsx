import React from 'react';
import Sidebar from './Sidebar';
import Produto from './Produto';
import styles from '../styles/Home.module.css';

function Main() {
  return (
    <section className={styles.catalogo}>
      <Sidebar />
      <main>
        <div>
          <Produto />
        </div>
      </main>
    </section>
  )
}

export default Main;