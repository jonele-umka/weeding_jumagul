import React from "react";
import styles from "./Adress.module.css";
import { useTranslation } from "react-i18next";
function Address() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className={styles.addressBlock}>
        <h1 className="headText">Локация:</h1>

        {/* <div className={styles.addressBgBox}>
          <div className={styles.address}>
            <p>
              Наша свадьба будет в ресторане «Palazzo» Ресторан находится по
              адрес «Сухэ-Батора, 3/2».
            </p>
          </div>
        </div> */}
        <div className={styles.address}>
          <p>{t("addressText")}</p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4992.970609900046!2d74.61855186682094!3d42.824814106875735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb708e0b27491%3A0xcabdc6e5af2469c2!2sPalazzo!5e0!3m2!1sru!2skg!4v1721054203944!5m2!1sru!2skg"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Address;
