import styles from "components/main/register/Register.module.scss";
import { useState } from "react";
export default function ShippingForm() {
  const [selected, setSelected] = useState("standard-shipping");
  const handleChange = (event) => {
    setSelected(event.target.value);
  };
  return (
    <>
      <label className={`${styles.radioGroup} col col-12`} data-price="0">
        <input
          id="shipping-standard"
          value="shipping-standard"
          type="radio"
          name="shipping"
          checked={selected === "shipping-standard"}
          onChange={handleChange}
        />
        <div className={styles.radioInfo}>
          <div className={`${styles.row} col col-12`}>
            <div className={styles.text}>標準運送</div>
            <div className={styles.price}>免費</div>
          </div>
          <div className={`${styles.period} col col-12`}>約 3~7 個工作天</div>
        </div>
        <div className={styles.radioBoxBorder}></div>
      </label>

      <label className={`${styles.radioGroup} col col-12`} data-price="500">
        <input
          id="shipping-dhl"
          value="shipping-dhl"
          type="radio"
          name="shipping"
          checked={selected === "shipping-dhl"}
          onChange={handleChange}
        />
        <div className={styles.radioInfo}>
          <div className={`${styles.row} col col-12`}>
            <div className={styles.text}>DHL 貨運</div>
            <div className={styles.price}>500</div>
          </div>
          <div className={`${styles.period} col col-12`}>48 小時內送達</div>
        </div>
        <div className={styles.radioBoxBorder}></div>
      </label>
    </>
  );
}
