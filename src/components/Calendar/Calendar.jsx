// src/components/Calendar.js
import React from "react";
import "./Calendar.css";
import { CiHeart } from "react-icons/ci";
const Calendar = () => {
  // Дни недели (начинаем с понедельника)
  const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  // Даты для сентября 2024
  const month = 8; // Сентябрь (месяцы в JavaScript начинаются с 0)
  const year = 2024;

  // Получаем первый день месяца и количество дней в месяце
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Корректируем день недели, чтобы неделя начиналась с понедельника
  const adjustedFirstDayOfMonth =
    firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  // Создаем массив для отображения дат
  const dates = [];
  for (let i = 0; i < adjustedFirstDayOfMonth; i++) {
    dates.push(null); // Пустые ячейки для предыдущих месяцев
  }
  for (let i = 1; i <= daysInMonth; i++) {
    dates.push(i);
  }

  return (
    <div className="calendar">
      <div className="header">Сентябрь 2024</div>
      <div className="days-of-week">
        {daysOfWeek.map((day) => (
          <div className="day" key={day}>
            {day}
          </div>
        ))}
      </div>
      <div className="dates">
        {dates.map((date, index) => (
          <div
            key={index}
            className={`date ${date === 19 ? "highlighted" : ""}`}
          >
            {date}
            {date === 19 && <CiHeart className="heart" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
