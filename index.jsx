"use-strict";

const hourDiv = document.querySelector("#hour");
const minDiv = document.querySelector("#min");
const secDiv = document.querySelector("#sec");
const dateDiv = document.querySelector("#date");
const monthDiv = document.querySelector("#month");
const yearDiv = document.querySelector("#year");
const timeDiv = document.querySelector("h1");
const date2 = document.querySelector("#date2");

setInterval(function () {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const seconds = date.getSeconds();
  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();
  let day2 = date.getUTCDay();

  if (day2 === 0) {
    date2.innerHTML = "MONDAY";
  }
  if (day2 === 1) {
    date2.innerHTML = "TUESDAY";
  }
  if (day2 === 2) {
    date2.innerHTML = "WEDNESDAY";
  }
  if (day2 === 3) {
    date2.innerHTML = "THURSDAY";
  }
  if (day2 === 4) {
    date2.innerHTML = "FRIDAY";
  }
  if (day2 === 5) {
    date2.innerHTML = "SATURDAY";
  }
  if (day2 === 6) {
    date2.innerHTML = "SUNDAY";
  }

  if (hour >= 12) {
    timeDiv.innerHTML = "PM";
  } else {
    timeDiv.innerHTML = "AM";
  }
  if (hour === 0) {
    hourDiv.textContent = 12;
  }
  if (hour === 12) {
    hourDiv.textContent = hour;
  }
  minDiv.textContent = min;
  secDiv.textContent = seconds;
  dateDiv.textContent = `${day}/`;
  monthDiv.textContent = ` ${month + 1}/`;
  yearDiv.textContent = `${year}|`;
}, 1000);
