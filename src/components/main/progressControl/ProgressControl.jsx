import rightArrow from "../../../assets/icons/right-arrow.svg";
// import rightArrow from 'assets/icons/right-arrow.svg'

import styles from "./ProgressControl.module.scss";
export default function ProgressControl() {
  return (
    <section
      className={`${styles.progressControlContainer} col col-lg-6 col-sm-12`}
    >
      <section
        className={`${styles.buttonGroup} col col-12`}
        data-phase="address"
      >
        <button className={`${styles.next} ${styles.cursorPoint}`}>
          下一步
          <object
            // data="./public/icons/right-arrow.svg"
            data={rightArrow}
            className={styles.cursorPoint}
            aria-label="right-arrow"
          ></object>
        </button>
      </section>

      {/* <section
        className={`${styles.buttonGroup} col col-12`}
        data-phase="shipping"
      >
        <button className={styles.prev}>
          <object
            data={leftArrow}
            className={styles.cursorPoint}
            aria-label="left-arrow"
          ></object>
          上一步
        </button>
        <button className={styles.next}>
          下一步
          <object
            data={rightArrow}
            className={styles.cursorPoint}
            aria-label="right-arrow"
          ></object>
        </button>
      </section>
      <section
        className={`${styles.buttonGroup} col col-12`}
        data-phase="credit-card"
      >
        <button className={styles.prev}>
          <object
            data={leftArrow}
            className={styles.cursorPoint}
            aria-label="left-arrow"
          ></object>
          上一步
        </button>
        <button className={styles.next}>確認下單</button>
      </section> */}
    </section>
  );
}
