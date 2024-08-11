import React from "react";
import styles from "./Content.module.css";
import { ContentImages } from "../ContentImages/ContentImages";
import { useTranslation } from "react-i18next";

// import Slider from "../Slider/Slider";
function Content() {
  const { t } = useTranslation();

  return (
    <div className={styles.content}>
      <div className="container">
        <h1 className="headText">{t("contentHeadText")}</h1>
        <div className={styles.content_title}>
          <p>{t("contentText")}</p>
        </div>
        <ContentImages />
      </div>
      {/* <Slider /> */}
    </div>
  );
}

export default Content;
