import React from 'react';
import styles from '../styles/Home.module.css';

function Sidebar() {
  return (
    <aside className={styles.aside}>
      <h3 className={styles.titulo}>Refine sua busca</h3>
      <p>Por preço</p>
      <section>
      <input className={styles.price} type="radio" name="Price" id="Quarenta" />
        <label htmlFor="Quarenta">Até R$40</label>
        <br />
        <input className={styles.price} type="radio" name="Price" id="Sessenta" />
        <label htmlFor="Sessenta">R$40 A R$60</label>
        <br />
        <input className={styles.price} type="radio" name="Price" id="Duzentos" />
        <label htmlFor="Duzentos">R$100 A R$200</label>
        <br />
        <input className={styles.price} type="radio" name="Price" id="Quinhentos" />
        <label htmlFor="Quinhentos">R$200 A R$500</label>
        <br />
        <input className={styles.price} type="radio" name="Price" id="Acima" />
        <label htmlFor="Acima">Acima de R$500</label>
      </section>
    </aside>
  )
}

export default Sidebar;
