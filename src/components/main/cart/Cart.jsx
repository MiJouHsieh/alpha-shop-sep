import styles from "./Cart.module.scss";
// import {minus.svg} from 'public/icons/minus.svg'
import minusIcon from "../../../assets/icons/minus.svg";
// import plusIcon from "assets/icons/plus.svg";
import plusIcon from "../../../assets/icons/plus.svg";
import {products} from "./cartProducts"

function Product ({...product}) {
  return (
    <div
      className={`${styles.productContainer} col col-12`}
      data-count="0"
      data-price={product.price}
    >
      <img
        className={styles.imgContainer}
        // src="src/assets/images/product-1.jpg"
        src={product.img}
        aria-label={product.name}
      />
      <div className={styles.productInfo}>
        <div className={styles.productName}>{product.name}</div>
        <div className={styles.productControlContainer}>
          <div className={styles.productControl}>
            <object
              className={`${styles.productAction} minus`}
              data={minusIcon}
              aria-label="minus-icon"
            ></object>

            <span className={styles.productCount}>{product.quantity}</span>
            <object
              className={`${styles.productAction} plus`}
              data={plusIcon}
              aria-label="plus-icon"
            ></object>
          </div>
        </div>
        <div className={styles.price}>${product.price}</div>
      </div>
    </div>
  );
}

export default function Cart() {
  return (
    <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
      <h3 className={styles.cartTitle}>購物籃</h3>

      <section
        className={`${styles.productList} col col-12`}
        data-total-price="0"
      >
        {products.map( product => 
          <Product {...product} key={product.id} />
        )}
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
