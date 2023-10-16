import StepProgress from "components/main/register/StepProgress";
// import Form from "components/main/register/form/Form";
import AddressForm from "components/main/register/form/AddressForm";
import ShippingForm from "components/main/register/form/ShippingForm";
import CreditCardForm from "components/main/register/form/CreditCardForm";

import styles from "components/main/register/Register.module.scss";

export default function Register({ progressStep }) {
  return (
    //  <!-- register -->  //progressStep 帶入數字
    <section
      className={`${styles.registerContainer} col col-lg-6 col-sm-12`}
      data-phase={progressStep}
      data-total-price="0"
    >
      {/* <!-- register-title --> */}
      <h2 className={`${styles.registerTitle} col col-12`}>結帳</h2>

      {/* <!-- register-progress --> */}
      <StepProgress />

      {/* <!-- register-form --> */}
      {/* 透過 progressStep 條件顯示內容 */}
      <section
        className={`${styles.formContainer}  col col-12`}
        data-phase={progressStep}
      >
        {/* <!-- address phase --> */}
        {/* 使用Form 元件 browser無法出現 data-phase ??*/}
        {/* <Form data-phase="address" formTitle="寄送地址">
          <AddressForm />
        </Form> */}
        <form className="col col-12" data-phase="address">
          <h3 className={styles.formTitle}>寄送地址</h3>
          <section className={`${styles.formBody} col col-12`}>
            <AddressForm />
          </section>
        </form>

        {/* <!-- shipping phase --> */}
        {/* <Form data-phase="shipping" formTitle="運送方式">
          <ShippingForm />
        </Form> */}
        <form className="col col-12" data-phase="shipping">
          <h3 className={styles.formTitle}>運送方式</h3>
          <section className={`${styles.formBody} col col-12`}>
            <ShippingForm />
          </section>
        </form>

        {/* <!-- credit-card phase --> */}
        {/* <Form data-phase="credit-card" formTitle="付款資訊">
          <CreditCardForm />
        </Form> */}
        <form className="col col-12" data-phase="credit-card">
          <h3 className={styles.formTitle}>付款資訊</h3>
          <section className={`${styles.formBody} col col-12`}>
            <CreditCardForm />
          </section>
        </form>
      </section>
    </section>
  );
}