import { useState, useContext } from "react";
import Register from "components/main/register/Register";
import ProgressControl from "components/main/progressControl/ProgressControl";
import styles from "components/main/Main.module.scss";
import Cart from "components/main/cart/Cart";
import { CartProductContext } from "components/main/cart/CartContext.js";
// import { OrderDataContext } from "components/main/cart/OrderDataContext.js";
import { OrderDataProvider } from "components/main/OrderDataContext.js";

export default function Main() {
  const [progressStep, setProgressStep] = useState(1);
  const cartProduct = useContext(CartProductContext);

  function handleClick(e) {
    if (e.target.innerText === "下一步" && progressStep !== 3) {
      setProgressStep((n) => n + 1);
    } else if (e.target.innerText === "上一步" && progressStep !== 1) {
      setProgressStep((n) => n - 1);
    }
  }

  return (
    <main className={styles.siteMain}>
      <div className={styles.mainContainer}>
        {/* <OrderDataContext.Provider value={providerValue}> */}
        <OrderDataProvider>
          <Register progressStep={progressStep} />

          <CartProductContext.Provider value={cartProduct}>
            <Cart />
          </CartProductContext.Provider>
          <ProgressControl onClick={handleClick} />
        </OrderDataProvider>
        {/* </OrderDataContext.Provider> */}
      </div>
    </main>
  );
}
