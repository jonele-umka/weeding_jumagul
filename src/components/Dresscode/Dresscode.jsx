import React from "react";
import styles from "./Dresscode.module.css";
import { useTranslation } from "react-i18next";

export const Dresscode = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.dresscode}>
      <div className="container">
        <div data-aos="fade-up" className={styles.headBlock}>
          <h1 className="headText">Дресс код:</h1>
          <p>{t("dresscodeText")}</p>
        </div>
        <div className={styles.colors}>
          <div data-aos="fade-right" className={styles.colorOne}></div>
          <div data-aos="zoom-in" className={styles.colorTwo}></div>
          <div data-aos="fade-left" className={styles.colorThree}></div>
        </div>
      </div>
    </div>
  );
};
