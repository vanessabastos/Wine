import Image from 'next/image'
import React from 'react'
import Wine from '../public/images/Wine.png';
import Busca from '../public/images/Busca.png';
import Perfil from '../public/images/Perfil.png';
import Carrinho from '../public/images/Carrinho.png';
import styles from '../styles/Home.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <Image 
        src={Wine}
        alt="Wine"
        width="103px"
        height="31px"
      />
    <nav className={styles.nav}>
      <a href="">Clube</a>
      <a href="">Loja</a>
      <a href="">Produtores</a>
      <a href="">Ofertas</a>
      <a href="">Eventos</a>
    </nav>
    <div className={styles.menu}>
      <Image
      src={Busca}
      alt="Busca"
      width="56px"
      height="56px"
      />
      <Image
      src={Perfil}
      alt="Busca"
      width="56px"
      height="56px"
      />
      <Image
      src={Carrinho}
      alt="Carrinho"
      width="56px"
      height="56px"
      />
    </div>
    </header>
  )
}

export default Header;