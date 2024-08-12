// src/components/Invitation.js
import React from "react";

import styles from "./Main.module.css";
import { useTranslation } from "react-i18next";

const Main = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.main}>
      <div className="container">
        <div className={styles.mainBlock}>
          <div className={styles.mainText}>
            <h1>-- {t("mainWeeding")} --</h1>
            <div className={styles.names}>
              <h1>Урмат</h1>
              <h1>&</h1>
              <h1>Жумагуль</h1>
            </div>
            <h1>-- Weeding day --</h1>
          </div>
          <div className={styles.mainBottomText}>
            <div className={styles.description}>
              <p>{t("mainP")}</p>
            </div>
            <div className={styles.date}>
              <h1>19.09.2024</h1>
            </div>
            <div className={styles.address}>
              <h1>Ресторан: "Palazzo"</h1>
              <h2>{t("mainAddress")}: Сухэ-Батора, 3/2</h2>
            </div>
          </div>
        </div>
        {/* <div className={styles.main_content}>
        <div className={styles.svg_border}>
          <svg width="100%" height="100%">
            <rect
              className="line"
              x="0"
              y="0"
              width="100%"
              height="100%"
            ></rect>
          </svg>
        </div>
       
      </div> */}
      </div>
    </div>
  );
};

export default Main;
