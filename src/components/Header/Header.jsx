// react
import React, { useState } from "react";
import styles from "./Header.module.css";
import kg from "../../assets/image/Flag_of_Kyrgyzstan.svg.png";
import ru from "../../assets/image/Flag_of_Russia.svg.png";

// i18next
import { useTranslation } from "react-i18next";

export const Header = () => {
  // i18n
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("kg");

  const handleChangeLanguage = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <header className={styles.header}>
      <div className={styles.languageSelector}>
        <img
          src={kg}
          alt="Kyrgyzstan Flag"
          className={`${styles.flag} ${
            selectedLanguage === "kg" ? styles.selected : ""
          }`}
          onClick={() => handleChangeLanguage("kg")}
        />
        <img
          src={ru}
          alt="Russia Flag"
          className={`${styles.flag} ${
            selectedLanguage === "ru" ? styles.selected : ""
          }`}
          onClick={() => handleChangeLanguage("ru")}
        />
      </div>
    </header>
  );
};
