import React from "react";
import styles from "./Dresscode.module.css";
import { useTranslation } from "react-i18next";

export const Dresscode = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.dresscode}>
      <div className="container">
        <div className={styles.headBlock}>
          <h1 className="headText">Дресс код:</h1>
          <p>{t("dresscodeText")}</p>
        </div>
        <div className={styles.colors}>
          <div className={styles.colorOne}></div>
          <div className={styles.colorTwo}></div>
          <div className={styles.colorThree}></div>
        </div>
      </div>
    </div>
  );
};
