// src/components/Footer.js
import React from "react";
import "./Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <p className="footer-text">{t('footerText')}</p>
    </footer>
  );
};

export default Footer;
