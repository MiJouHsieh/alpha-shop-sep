// import styles from "./StepProgress.module.scss"; //無法從Register改變樣式
import { ReactComponent as PgCompleteIcon } from "assets/icons/pg-complete.svg";
import styles from "components/main/register/Register.module.scss";

function ProgressGroup ({dataPhase,step, progressLabel}) {
  return (
    <>
      <span className={styles.progressGroup} data-phase={dataPhase}>
        <span className={styles.progressIcon}>
          <span className={styles.text}>{step}</span>
          <PgCompleteIcon className={styles.icon} />
        </span>
        <span className={styles.progressLabel}>{progressLabel}</span>
      </span>
      {step !== 3 && (
        <span className={styles.progressBar} data-order={step}></span>
      )}
    </>
  );
}

export default function StepProgress() {
  return (
    <section className={`${styles.progressContainer} col col-12`}>
      <ProgressGroup dataPhase={"address"} step={1} progressLabel="寄送地址" />
      {/* <span className={styles.progressBar} data-order="1"></span> */}
      <ProgressGroup dataPhase={"shipping"} step={2} progressLabel="運送方式" />
      {/* <span className={styles.progressBar} data-order="2"></span> */}
      <ProgressGroup dataPhase={"credit-card"} step={3} progressLabel="付款資訊" />
    </section>
  );
}