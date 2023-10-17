import StepProgress from "components/main/register/StepProgress";
import Form from "components/main/register/form/Form";
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
        <Form dataPhase="address" formTitle="寄送地址">
          <AddressForm />
        </Form>

        {/* <!-- shipping phase --> */}
        <Form dataPhase="shipping" formTitle="運送方式">
          <ShippingForm />
        </Form>

        {/* <!-- credit-card phase --> */}
        <Form dataPhase="credit-card" formTitle="付款資訊">
          <CreditCardForm />
        </Form>
        
      </section>
    </section>
  );
}