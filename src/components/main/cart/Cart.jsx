import { useState } from "react";
import styles from "./Cart.module.scss";
import minusIcon from "assets/icons/minus.svg";
// import minusIcon from "../../../assets/icons/minus.svg";
// import plusIcon from "assets/icons/plus.svg";
import { ReactComponent as PlusIcon } from "assets/icons/plus.svg";
import { products } from "./cartProducts";

function Product({ ...product }, onIncreaseClick, onDecreaseClick) {
// function Product(id,name,price,img, onIncreaseClick, onDecreaseClick) {
  return (
    <div
      className={`${styles.productContainer} col col-12`}
      data-count="0"
      data-price={product.price}
    >
      <img
        className={styles.imgContainer}
        src={product.img}
        aria-label={product.name}
      />
      <div className={styles.productInfo}>
        <div className={styles.productName}>{product.name}</div>
        <div className={styles.productControlContainer}>
          <div className={styles.productControl}>
            {/* <button
              onClick={() => {
                onDecrease(product.id)
              }}
              className={styles.productButton}
            >
              <object
                className={`${styles.productAction} minus`}
                data={minusIcon}
                aria-label="minus-icon"
              ></object>
            </button> */}
            <span
              onClick={() => {
                onDecreaseClick(product.id);
              }}
            >
              <span className={styles.productAction}>
                <img src={minusIcon} alt="minus icon" />
              </span>
            </span>

            <span className={styles.productCount}>{product.quantity}</span>
            <button
              onClick={() => {
                onIncreaseClick(product.id);
              }}
              className={styles.productButton}
            >
              <PlusIcon className={`${styles.productAction} plus`} />
              {/* <object
                className={`${styles.productAction} plus`}
                data={plusIcon}
                aria-label="plus-icon"
              ></object> */}
            </button>
          </div>
        </div>
        <div className={styles.price}>${product.price}</div>
      </div>
    </div>
  );
}

export default function Cart() {
  const [productsData, setProductsData] = useState(products);

  function handleDecreaseClick(productId) {
    let nextProductData = productsData.map((item) => {
      if (item.id === productId) {
        //避免負數
        return {
          ...item,
          quantity: (item.quantity - 1 > 0) ? (item.quantity - 1) : 0,
        }
      } else {
        return item;
      }
    })
    setProductsData(nextProductData)
  }

  function handleIncreaseClick(productId) {
    setProductsData(
      productsData.map((item) => {
        if (item.id === productId) {
          return {
            ...item,
            quantity: item.quantity + 1
          };
        } else {
          return item
        }
      })
    );
  }

  return (
    <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
      <h3 className={styles.cartTitle}>購物籃</h3>

      <section
        className={`${styles.productList} col col-12`}
        data-total-price="0"
      >
        {products.map((product) => (
          <Product
            {...product}
            key={product.id}
            onIncreaseClick={handleIncreaseClick}
            onDecreaseClick={handleDecreaseClick}
          />
        ))}
      </section>

      <section className={`${styles.cartInfo} shipping  col col-12`}>
        <div className={styles.text}>運費</div>
        <div className={styles.price}>免費</div>
      </section>

      <section className={`${styles.cartInfo} total col col-12`}>
        <div className={styles.text}>小計</div>
        <div className={styles.price}>$0</div>
      </section>
    </section>
  );
}
