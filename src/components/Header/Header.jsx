import React, { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";
import kg from "../../assets/image/Flag_of_Kyrgyzstan.svg.png";
import ru from "../../assets/image/Flag_of_Russia.svg.png";
import { FaPlay, FaPause } from "react-icons/fa";
import musicFile from "../../assets/music/music.mp3";

// i18next
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("kg");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Создаем новый экземпляр аудио только один раз
    audioRef.current = new Audio(musicFile);

    const audio = audioRef.current;

    // Добавляем обработчик для события окончания аудио
    const handleAudioEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", handleAudioEnded);

    // Останавливаем и сбрасываем аудио при размонтировании компонента
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
        audio.removeEventListener("ended", handleAudioEnded);
      }
    };
  }, []);

  const handleChangeLanguage = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };

  const handlePlayPause = () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((error) => {
        console.error("Ошибка воспроизведения:", error);
      });
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
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
        <div className={styles.playButton} onClick={handlePlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </div>
      </div>
    </header>
  );
};
