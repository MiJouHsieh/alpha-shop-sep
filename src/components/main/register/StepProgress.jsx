import styles from "./StepProgress.module.scss";

function ProgressGroup ({dataPhase,step, progressLabel}) {
  return (
    <span className={styles.progressGroup} data-phase={dataPhase}>
      <span className={styles.progressIcon}>
        <span className={styles.text}>{step}</span>
      </span>
      <span className={styles.progressLabel}>{progressLabel}</span>
    </span>
  );
}

export default function StepProgress() {
  return (
    <section className={`${styles.progressContainer} col col-12`}>
      {/* <span className={styles.progressGroup} data-phase="address">
        <span className={styles.progressIcon}>
          <span className={styles.text}>1</span>
        </span>
        <span className={styles.progressLabel}>寄送地址</span>
      </span> */}
      <ProgressGroup dataPhase="address" step="1" progressLabel="寄送地址" />

      <span className={styles.progressBar} data-order="1"></span>
      <ProgressGroup dataPhase="shipping" step="2" progressLabel="運送方式" />
      {/* <span className={styles.progressGroup} data-phase="shipping">
        <span className={styles.progressIcon}>
          <span className={styles.text}>2</span>
        </span>
        <span className={styles.progressLabel}>運送方式</span>
      </span> */}
      <span className={styles.progressBar} data-order="2"></span>
      <ProgressGroup
        dataPhase="credit-card"
        step="3"
        progressLabel="付款資訊"
      />

      {/* <span className={styles.progressGroup} data-phase="credit-card">
        <span className={styles.progressIcon}>
          <span className={styles.text}>3</span>
        </span>
        <span className={styles.progressLabel}>付款資訊</span>
      </span> */}
    </section>
  );
}
