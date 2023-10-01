// import Register from "./components/main/register/Register";
import Register from "./register/Register";
import ProgressControl from './progressControl/ProgressControl'
import styles from './Main.module.scss'
import Cart from './cart/Cart'

export default function Main() {
  return (
    <main className={styles.siteMain}>
      <div className={styles.mainContainer}>
        <Register />
        <Cart />
        <ProgressControl />
      </div>
    </main>
  );
}
