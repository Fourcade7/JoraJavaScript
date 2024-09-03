let monthName = document.getElementById("monthname");
let arrowright = document.getElementById("arrowright");
let arrowleft = document.getElementById("arrowleft");
let daysTag = document.querySelector(".cal-days");

const monthlist = [
  "Январь", // January
  "Февраль", // February
  "Март", // March
  "Апрель", // April
  "Май", // May
  "Июнь", // June
  "Июль", // July
  "Август", // August
  "Сентябрь", // September
  "Октябрь", // October
  "Ноябрь", // November
  "Декабрь", // December
];

let date = new Date();
let currentYear = date.getFullYear();
let currentMonthIndex = date.getMonth();
monthName.textContent = `${monthlist[currentMonthIndex]} ${currentYear}`;

arrowleft.addEventListener("click", () => {
  currentMonthIndex--;
  if (currentMonthIndex < 0) {
    date = new Date(currentYear, currentMonthIndex);
    currentYear = date.getFullYear();
    currentMonthIndex = date.getMonth();
  }
  renderCalendar();
  monthName.textContent = `${monthlist[currentMonthIndex]} ${currentYear}`;
});
arrowright.addEventListener("click", () => {
  currentMonthIndex++;

  if (currentMonthIndex > 11) {
    date = new Date(currentYear, currentMonthIndex);
    currentYear = date.getFullYear();
    currentMonthIndex = date.getMonth();
  }

  renderCalendar();

  monthName.textContent = `${monthlist[currentMonthIndex]} ${currentYear}`;
});

renderCalendar();

function renderCalendar() {
  let lastDayofMonth = new Date(currentYear,currentMonthIndex + 1,0).getDate();
  let lastdayofLastMonth = new Date(currentYear,currentMonthIndex,0).getDate();
  let firstdayofMonth = new Date(currentYear, currentMonthIndex, 0).getDay();
  let lastweekdayOfMonth = new Date(currentYear,currentMonthIndex,lastDayofMonth).getDay();

  let dtag = "";

  for (let i = firstdayofMonth; i > 0; i--) {
    dtag += `<button class="btn cal-btn" disabled type="button">${lastdayofLastMonth - i + 1}</button>`;
    //dtag+=`<button class="btn cal-btn" disabled type="button">0</button>`;
    //daysTag.insertAdjacentHTML("beforeend", dtag);
  }

  for (let i = 1; i <= lastDayofMonth; i++) {
    if(date.getMonth()==currentMonthIndex && i==date.getDate()){
      dtag += `<button class="btn cal-btn bg-primary text-light" type="button">${i}</button>`;
    }else{
      dtag += `<button class="btn cal-btn" type="button">${i}</button>`;
    }
    
    //daysTag.insertAdjacentHTML("beforeend", dtag);
  }

  console.log(lastweekdayOfMonth);

  for (let i = lastweekdayOfMonth; i <= 6; i++) {
    if (lastweekdayOfMonth === 0) {
      break;
    }
    dtag += `<button class="btn cal-btn" disabled type="button">${i - lastweekdayOfMonth + 1}</button>`;
    //daysTag.insertAdjacentHTML("beforeend", dtag);
  }

  daysTag.innerHTML = dtag;
}
