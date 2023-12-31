// import rightArrow from "../../../assets/icons/right-arrow.svg";
import rightArrow from 'assets/icons/right-arrow.svg'
import leftArrow from "assets/icons/left-arrow.svg";
import styles from "components/main/register/Register.module.scss";
import { useContext } from 'react';
import { OrderDataContext } from "components/main/OrderDataContext"
function ButtonGroup({dataPhase,children}) {
  return (
    <section
      className={`${styles.buttonGroup} col col-12`}
      data-phase={dataPhase}
      key={dataPhase}
    >
      {children}
    </section>
  );
}

function PrevButton({ onClick }) {
  return (
    <button className={`${styles.prev} ${styles.cursorPoint}`} onClick={onClick}>
      <object
        data={leftArrow}
        className={styles.cursorPoint}
        aria-label="left-arrow"
      ></object>
      上一步
    </button>
  );
}

function NextButton({ onClick }) {
  return (
    <button
      className={`${styles.next} ${styles.cursorPoint}`}
      onClick={onClick}
    >
      下一步
      <object
        data={rightArrow}
        className={styles.cursorPoint}
        aria-label="right-arrow"
      ></object>
    </button>
  );
}

function SubmitButton() {
  const { onSubmitButton } = useContext(OrderDataContext);
  return (
    <button
      value="Submit"
      className={`${styles.next} ${styles.cursorPoint}`}
      onClick={(e) => {
        e.preventDefault();
        onSubmitButton(e.target.value);
      }}
    >
      確認下單
    </button>
  );
}
export default function ProgressControl({onClick}) {
  return (
    <section
      className={`${styles.progressControlContainer} col col-lg-6 col-sm-12`}
    >
      <ButtonGroup dataPhase="address" key="address">
        {/* <ButtonGroup dataPhase="1" key="1"> 透過SCSS條件呈現 不是帶入數字 */}
        <NextButton onClick={onClick} />
      </ButtonGroup>

      <ButtonGroup dataPhase="shipping" key="shipping">
        <PrevButton onClick={onClick} />
        <NextButton onClick={onClick} />
      </ButtonGroup>

      <ButtonGroup dataPhase="credit-card" key="credit-card">
        <PrevButton onClick={onClick} />
        <SubmitButton/>
        {/* <button
          className={`${styles.next} ${styles.cursorPoint}`}
          onClick={onClick}
        >
          確認下單
        </button> */}
      </ButtonGroup>
    </section>
  );
}