import { useState } from "react";
import Register from "components/main/register/Register";
import ProgressControl from "components/main/progressControl/ProgressControl";
import styles from "components/main/Main.module.scss";
import Cart from "components/main/cart/Cart";

export default function Main() {
  const [progressStep, setProgressStep] = useState(1);

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
        <Register progressStep={progressStep} />
        <Cart />
        <ProgressControl onClick={handleClick} />
      </div>
    </main>
  );
}
