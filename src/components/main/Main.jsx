import { useState } from "react";
// import Register from "./components/main/register/Register";
import Register from "./register/Register";
import ProgressControl from "./progressControl/ProgressControl";
import styles from "./Main.module.scss";
import Cart from "./cart/Cart";

export default function Main() {
  const [progressStep, setProgressStep] = useState(1);

  function handleClick(e) {
    console.log(e.target.innerText);
    if (e.target.innerText === "下一步" && progressStep !== 3) {
      setProgressStep((n) => n + 1);
      console.log("next");
      console.log("progressStep", progressStep);
    } else if (e.target.innerText === "上一步" && progressStep !== 1) {
      setProgressStep((n) => n - 1);
      console.log("prev");
    }
  }
  console.log("current progressStep", progressStep);

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
