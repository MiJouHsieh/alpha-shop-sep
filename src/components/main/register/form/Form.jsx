import styles from "./Form.module.scss";

export default function Form({ children, dataPhase, formTitle }) {
  return (
    <form className="col col-12" data-phase={dataPhase}>
      <h3 className={styles.formTitle}>{formTitle}</h3>
      <section className={`${styles.formBody} col col-12`}>{children}</section>
    </form>
  );
}
