import React from "react";
import { useState, useEffect } from "react";
import "./ourDayPage.css";

const OurDayPage = () => {
  const beginDate = new Date("2022-07-27T16:00:00Z");
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const timeDiff = currentDate.getTime() - beginDate.getTime();
  const secondsDiff = Math.floor(timeDiff / 1000);

  const years = currentDate.getFullYear() - beginDate.getFullYear();
  const months =
    years == 0
      ? currentDate.getMonth() - beginDate.getMonth()
      : currentDate.getDate() < 27
      ? 11 - beginDate.getMonth() + currentDate.getMonth() + (years - 1) * 12
      : 12 - beginDate.getMonth() + currentDate.getMonth() + (years - 1) * 12;

  const today = new Date();
  const year = today.getFullYear();
  const lastDayOfMonth = new Date(year, today.getMonth() + 1, 0).getDate();

  const days = Math.floor(secondsDiff / (60 * 60 * 24));
  const daysDiff = lastDayOfMonth - today.getDate();
  const hours = Math.floor((secondsDiff % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((secondsDiff % (60 * 60)) / 60);
  const seconds = secondsDiff % 60;
  return (
    <div className="ourDayPage" id="ourDay">
      <div className="ourDayTiltle">
        <h1>
          Wednesday, 27<span>July</span> 2022
        </h1>
      </div>
      <div className="countContainer">
        <div className="count">
          <span className="number">{months}</span>
          <span className="countTitle">Months</span>
        </div>
        <div className="count">
          <span className="number">{daysDiff}</span>
          <span className="countTitle">Days</span>
        </div>
        <div className="count">
          <span className="number">{hours}</span>
          <span className="countTitle">Hours</span>
        </div>
        <div className="count">
          <span className="number">{minutes}</span>
          <span className="countTitle">Minutes</span>
        </div>
        <div className="count">
          <span className="number">{seconds}</span>
          <span className="countTitle">Second</span>
        </div>
      </div>
      <div className="description">
        <p>
          There is <span>{days}</span> days that we have been together from the
          first day we are belong together. That day was beautiful day for our
          initiation but that day was the first seperation of us, the day is a
          fist day we are in long distance love. I know we have been through
          been together for long time but i always appreciate you as the love of
          my life. Keep fighting my girl. This is a small gift from myself to my
          love.
        </p>
      </div>
    </div>
  );
};

export default OurDayPage;
