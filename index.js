const api = "https://dummyjson.com/users";
const userIncomeTemplate = document.querySelector("[data-income-template]");
const userProfitTemplate = document.querySelector("[data-profit-template]");
const userViewsTemplate = document.querySelector("[data-views-template]");
const userRateTemplate = document.querySelector("[data-rate-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");

function openNav() {
  document.getElementById("side_bar").classList.remove("nav_column_closed");
  document.getElementById("side_bar").classList.add("nav_column_open");
  document.getElementById("sidebar_close").classList.add("none");
  document.getElementById("sidebar_open").classList.remove("none");
  document.getElementById("sidebar_icon_close").classList.add("none");
  document.getElementById("sidebar_icon_open").classList.remove("none");
}

function closeNav() {
  document.getElementById("side_bar").classList.remove("nav_column_open");
  document.getElementById("side_bar").classList.add("nav_column_closed");
  document.getElementById("sidebar_open").classList.add("none");
  document.getElementById("sidebar_close").classList.remove("none");
  document.getElementById("sidebar_icon_open").classList.add("none");
  document.getElementById("sidebar_icon_close").classList.remove("none");
}

fetch("https://dummyjson.com/users/1")
  .then((res) => res.json())
  .then((data) => {
    const incomeCard = userIncomeTemplate.content.cloneNode(true).children[0];
    const profitCard = userProfitTemplate.content.cloneNode(true).children[0];
    const viewCard = userViewsTemplate.content.cloneNode(true).children[0];
    const rateCard = userRateTemplate.content.cloneNode(true).children[0];

    const income = incomeCard.querySelector("[data-income-num]");
    const profit = profitCard.querySelector("[data-profit-num]");
    const view = viewCard.querySelector("[data-view-num]");
    const rate = rateCard.querySelector("[data-rate-num]");

    income.textContent = data.height;
    profit.textContent = data.age;
    view.textContent = data.lastName;
    rate.textContent = data.maidenName;

    const test = userIncomeTemplate.appendChild(income);
    // needs to append inside eache template instead of to the overall 
    userIncomeTemplate.appendChild(income)
    userCardContainer.append(profit);
    userCardContainer.append(view);
    userCardContainer.append(rate);

    // console.log(userCardContainer.append(income));
    console.log(test);
    console.log(data);
    console.log(incomeCard);
  });
