import styles from "components/main/register/Register.module.scss";
import { Areas } from "components/main/register/form/Areas"
export default function AddressForm() {
  return (
    <>
      <div className={`${styles.row} col col-12`}>
        <div className={`${styles.inputGroup} input-w-lg-2 input-w-sm-s1`}>
          <div className={styles.inputLabel}>稱謂</div>
          <div className={styles.selectContainer}>
            <select>
              <option value="mr" defaultValue>
                先生
              </option>
              <option value="ms">女士</option>
              <option value="mx">不明</option>
            </select>
          </div>
        </div>
        <div className={`${styles.inputGroup} input-w-lg-4 input-w-sm-s2`}>
          <div className={styles.inputLabel}>姓名</div>
          <input type="text" placeholder="請輸入姓名" />
        </div>
      </div>
      <div className={`${styles.row} col col-12`}>
        <div className={`${styles.inputGroup} input-w-lg-3 input-w-sm-full`}>
          <div className={styles.inputLabel}>電話</div>
          <input type="tel" placeholder="請輸入行動電話" />
        </div>
        <div className={`${styles.inputGroup} input-w-lg-3 input-w-sm-full`}>
          <div className={styles.inputLabel}>Email</div>
          <input type="email" placeholder="請輸入電子郵件" />
        </div>
      </div>
      <div className={`${styles.row} col col-12`}>
        <div className={`${styles.inputGroup} input-w-lg-2 input-w-sm-full`}>
          <div className={styles.inputLabel}>縣市</div>
          <div className={styles.selectContainer}>
            <select required>
              <Areas />
            </select>
          </div>
        </div>
        <div className={`${styles.inputGroup} input-w-lg-4 input-w-sm-full`}>
          <div className={styles.inputLabel}>地址</div>
          <input type="text" placeholder="請輸入地址" />
        </div>
      </div>
    </>
  );
}
