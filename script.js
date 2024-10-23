const monthNameEl = document.getElementById("months-name");
const dayNameEl = document.getElementById("days-name");
const dayNumberEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const currentDate = new Date();

monthNameEl.innerHTML = currentDate.toLocaleString("default", {
  month: "long",
});
dayNameEl.innerHTML = currentDate.toLocaleString("default", {
  weekday: "long",
});
dayNumberEl.innerHTML = currentDate.getDate();
yearEl.innerHTML = currentDate.getFullYear();
