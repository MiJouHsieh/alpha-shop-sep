import styles from "components/main/register/Register.module.scss";

function InputGroup4({ inputLabel, placeholder }) {
  return (
    <div className={`${styles.inputGroup} input-w-lg-4 input-w-sm-full`}>
      <div className={styles.inputLabel}>{inputLabel}</div>
      <input type="text" placeholder={placeholder} />
    </div>
  );
}
function InputGroup3({ inputLabel, placeholder }) {
  return (
    <div className={`${styles.inputGroup} input-w-lg-3 input-w-sm-s3`}>
      <div className={styles.inputLabel}>{inputLabel}</div>
      <input type="text" placeholder={placeholder} />
    </div>
  );
}

export default function CreditCardForm() {
  return (
    <>
      <InputGroup4 inputLabel="持卡人姓名" placeholder="John Doe" />
      <InputGroup4 inputLabel="卡號" placeholder="1111 2222 3333 4444" />

      <div className={`${styles.row} col col-12`}>
        <InputGroup3 inputLabel="有效期限" placeholder="MM/YY" />
        <InputGroup3 inputLabel="CVC / CCV" placeholder="123" />
      </div>
    </>
  );
}
