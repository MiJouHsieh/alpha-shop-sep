import styles from "./Form.module.scss";

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
      {/* <InputGroup4 inputLabel="持卡人姓名" placeholder="John Doe" /> */}
      <div className="col col-12">
        <div className={`${styles.inputGroup} input-w-lg-4 input-w-sm-full`}>
          <div className="input-label">持卡人姓名</div>
          <input type="text" placeholder="John Doe" />
        </div>
      </div>
      <div className="col col-12">
        <div className={`${styles.inputGroup}  input-w-lg-4 input-w-sm-full`}>
          <div className="input-label">卡號</div>
          <input type="text" placeholder="1111 2222 3333 4444" />
        </div>
      </div>
      <div className="col col-12">
        <div className={`${styles.inputGroup} input-w-lg-3 input-w-sm-s3`}>
          <div className="input-label">有效期限</div>
          <input type="text" placeholder="MM/YY" />
        </div>
        <div className={`${styles.inputGroup} input-w-lg-3 input-w-sm-s3`}>
          <div className="input-label">CVC / CCV</div>
          <input type="text" placeholder="123" />
        </div>
      </div>
    </>
  );
}