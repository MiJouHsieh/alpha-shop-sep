import { useState } from "react";
import styles from "./Cart.module.scss";
import { ReactComponent as MinusIcon } from "assets/icons/minus.svg";
import { ReactComponent as PlusIcon } from "assets/icons/plus.svg";
import { products } from "./cartProducts";

function Product({
  id,
  name,
  price,
  img,
  quantity,
  onIncreaseClick,
  onDecreaseClick,
}) {
  return (
    <div
      className={`${styles.productContainer} col col-12`}
      // data-count="0" //?
      data-count={id}
      data-price={price}
    >
      <img className={styles.imgContainer} src={img} aria-label={name} />
      <div className={styles.productInfo}>
        <div className={styles.productName}>{name}</div>
        <div className={styles.productControlContainer}>
          <div className={styles.productControl}>
            <MinusIcon
              className={`${styles.productAction} minus `}
              onClick={() => {
                onDecreaseClick(id);
              }}
            />
            <span className={styles.productCount}>{quantity}</span>
            <button
              onClick={() => {
                onIncreaseClick(id);
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
        <div className={styles.price}>${price}</div>
      </div>
    </div>
  );
}

export default function Cart() {
  const [productsData, setProductsData] = useState(products);
  const totalPrice = productsData.map(item => item.price * item.quantity).reduce((acc, cur) => acc+cur)

  function handleDecreaseClick(productId) {
    const nextProductData = productsData.map((item) => {
      if (item.id === productId) {
        //避免負數
        return {
          ...item,
          quantity: item.quantity - 1 > 0 ? item.quantity - 1 : 0,
        };
      } else {
        return item;
      }
    });
    setProductsData(nextProductData);
  }

  function handleIncreaseClick(productId) {
    const nextProductData = productsData.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      } else {
        return item;
      }
    });
    setProductsData(nextProductData);
  }

  return (
    <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
      <h3 className={styles.cartTitle}>購物籃</h3>

      <section
        className={`${styles.productList} col col-12`}
        data-total-price="0"
      >
        {productsData.map((product) => (
          <Product
            key={product.id}
            {...product}
            onIncreaseClick={handleIncreaseClick}
            onDecreaseClick={handleDecreaseClick}
          />
        ))}
      </section>

      <section className={`${styles.cartInfo} shipping col col-12`}>
        <div className={styles.text}>運費</div>
        <div className={styles.price}>免費</div>
      </section>

      <section className={`${styles.cartInfo} total col col-12`}>
        <div className={styles.text}>小計</div>
        <div className={styles.price}>$ {totalPrice}</div>
      </section>
    </section>
  );
}
