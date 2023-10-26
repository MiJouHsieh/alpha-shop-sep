import { useContext } from "react";
import styles from "components/main/register/Register.module.scss";
import { OrderDataContext } from "components/main/OrderDataContext";

function InputGroup4() {
  const { cardValue, setCardValue } = useContext(OrderDataContext);
  // 監聽變更
  function handleCardValueChange(infoValue, infoId) {
    let nextValue = cardValue.map((info) => {
      if (info.id === infoId) {
        return {
          ...info,
          value: infoValue,
        };
      }
      return info;
    });
    setCardValue(nextValue);
  }
  return (
    <>
      {cardValue.map((info) => {
        if (info.id < 2) {
          return (
            <div
              key={info.id}
              className={`${styles.inputGroup} input-w-lg-4 input-w-sm-full`}
            >
              <div className={styles.inputLabel}>{info.label}</div>
              <input
                type="text"
                placeholder={info.placeholder}
                value={info.value}
                onChange={(e) => handleCardValueChange(e.target.value, info.id)}
              />
            </div>
          );
        }
        return null;
      })}
    </>
  );
}
function InputGroup3() {
  const { cardValue, setCardValue } = useContext(OrderDataContext);
  // 監聽變更
  function handleCardValueChange(infoValue, infoId) {
    let nextValue = cardValue.map((info) => {
      if (info.id === infoId) {
        return {
          ...info,
          value: infoValue,
        };
      }
      return info;
    });
    setCardValue(nextValue);
  }
  return (
    <>
      {cardValue.map((info) => {
        if (info.id > 1) {
          return (
            <div
              key={info.id}
              className={`${styles.inputGroup} input-w-lg-3 input-w-sm-s3`}
            >
              <div className={styles.inputLabel}>{info.label}</div>
              <input
                type="text"
                placeholder={info.placeholder}
                value={info.value}
                onChange={(e) => handleCardValueChange(e.target.value, info.id)}
              />
            </div>
          );
        }
        return null;
      })}
    </>
  );
}

export default function CreditCardForm() {
  return (
    <>
      <InputGroup4 />
      {/* <InputGroup4 /> */}

      <div className={`${styles.row} col col-12`}>
        <InputGroup3 />
        {/* <InputGroup3 /> */}
      </div>
    </>
  );
}
