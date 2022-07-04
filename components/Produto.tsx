import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { connect } from 'react-redux';
import { UseApiAction, shoppingBagAction } from '../redux/action';
import PageNumber from './Pagination';


function Produto(props: any) {
  const { apiResponse, UseApiResponse, productBag, shoppingCart } = props;
  const [actualPage, usePageActual] = useState(1);

  useEffect(() => {
    const myApi = async () => {
      const data = await fetch(
        `https://wine-back-test.herokuapp.com/products?page=1&limit=9`
      );
      const res = await data.json();
      apiResponse(res);
    };

    myApi();
  }, [apiResponse, actualPage]);

  const { items, itemsPerPage, page, totalItems, totalPages } = UseApiResponse;

  const addItem = (wine: any) => {
    shoppingCart(wine)
  }

  if(items === undefined) return (
    <h1 className={styles.loading}>
      Loading...
    </h1>)

  return (
    <section>
    <p className={styles.catalogo}>
      <span>{totalItems}</span>
      produtos encontrados
    </p>

    <main className={ styles.adega }>
    {items.map((item: any, index: any) => (
      <div key={item.id}>
        <div className={styles.productDiv}>
          <div className={styles.productWine}>
            <Image
              className={styles.imagem}
              src={item.image}
              alt={item.name}
              width="140px"
              height="180px"
            />
          </div>

          <h3 className={styles.wineName}>
            {item.name}
          </h3>

          <div className={styles.desconto}>
            <p className={styles.valorSemDesconto}>R${item.price.toFixed(2).toString().replace(".", ",")}</p>
            <h5 className={styles.descontoOff}>{item.discount}% OFF</h5>
          </div>

          <div className={styles.desconto}>
            <h5 className={styles.socio}>SÓCIO WINE</h5>
            <p className={styles.descontoSocio}>
              R$
              <span
                className={styles.sizePrice}
              >
                {item.priceMember.toFixed(0).toString().replace(".", "")}
              </span>
               ,{item.priceMember.toFixed(3).toString().replace(".", "").substring(3, 5)}
            </p>
          </div>

          <div className={styles.nonMember}>
            <p className={styles.naoSocio}>NÃO SÓCIO R$ {item.priceNonMember.toFixed(2).toString().replace(".", ",")}</p>
          </div>
        </div>

        <input 
          className={styles.botaoAdicionar}
          type="button" 
          value="ADICIONAR"
          onClick={ () => addItem(item) }
        />
      </div>
    ))}
    </main>
    <PageNumber
      usePageActual={ usePageActual }
    />
  </section>
  )
}

const mapStateToProps = (state: any) => ({
  UseApiResponse: state.apiReducer.data,
  productBag: state.shoppingBagReducer,
});

const mapDispatchToProps = (dispatch: any) => (
  {
    apiResponse: (state: any) => dispatch(UseApiAction(state)),
    shoppingCart: (state: any) => dispatch(shoppingBagAction(state))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Produto);
