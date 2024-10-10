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
    console.log(data);
    const incomeCard = userIncomeTemplate.content.cloneNode(true).children[0]; 
    const profitCard = userProfitTemplate.content.cloneNode(true).children[0];
    const viewCard = userViewsTemplate.content.cloneNode(true).children[0];
    const rateCard = userRateTemplate.content.cloneNode(true).children[0];

    console.log(incomeCard);

    const income = incomeCard.querySelector("[data-income-num]");
    const profit = profitCard.querySelector("[data-profit-num]");
    const view = viewCard.querySelector("[data-view-num]");
    const rate = rateCard.querySelector("[data-rate-num]");

    console.log(income);

    income.children = data.height;
    profit.textContent = data.age;
    view.textContent = data.lastName;
    rate.textContent = data.maidenName;

    userCardContainer.getElementsByClassName("gcn_text").textContent = income;
    // must append the whole card and not just one line
    // still searching this issue
    userCardContainer.append(profit); // 28
    userCardContainer.append(view);   // Johnson
    userCardContainer.append(rate);   // Smith

    console.log(incomeCard);
  });
