import React from "react";
import styles from "./Timing.module.css";
import Countdown from "../Countdown/Countdown";
import { useTranslation } from "react-i18next";
export const Timing = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.timing}>
      <div className="container">
        <h1 className="headText">Тайминг:</h1>
        <div className={styles.timingBlock}>
          <div className={styles.timingBox}>
            <h1>11:00</h1>
            <h2>{t("timingHead1")}</h2>
            <p>{t("timing1")}</p>
          </div>
          <div className={styles.timingBox}>
            <h1>13:00</h1>
            <h2>{t("timingHead2")}</h2>
            <p>{t("timing2")}</p>
          </div>
          <div className={styles.timingBox}>
            <h1>18:00</h1>
            <h2>{t("timingHead3")}</h2>
            <p>{t("timing3")}</p>
          </div>
          <div className={styles.timingBox}>
            <h1>19:00</h1>
            <h2>{t("timingHead4")}</h2>
            <p>{t("timing4")}</p>
          </div>
          <div className={styles.timingBox}>
            <h1>00:00</h1>
            <h2>{t("timingHead5")}</h2>
            <p>{t("timing5")}</p>
          </div>
        </div>
        <Countdown />
      </div>
    </div>
  );
};
