const api = 'https://dummyjson.com/users';
const userCardTemplate = document.querySelector("[data-user-template]");

function openNav() {
    document.getElementById("side_bar").classList.remove('nav_column_closed');
    document.getElementById("side_bar").classList.add('nav_column_open');
    document.getElementById("sidebar_close").classList.add('none');
    document.getElementById("sidebar_open").classList.remove('none');
    document.getElementById("sidebar_icon_close").classList.add('none');
    document.getElementById("sidebar_icon_open").classList.remove('none');
}

function closeNav() {
    document.getElementById("side_bar").classList.remove('nav_column_open');
    document.getElementById("side_bar").classList.add('nav_column_closed');
    document.getElementById("sidebar_open").classList.add('none');
    document.getElementById("sidebar_close").classList.remove('none');
    document.getElementById("sidebar_icon_open").classList.add('none');
    document.getElementById("sidebar_icon_close").classList.remove('none');
}

fetch('https://dummyjson.com/users/1')
.then(res => res.json())
.then(data => {
    const card = userCardTemplate.content.cloneNode(true);
    const income = card.querySelector("[data-num]");
    income.textContent = data.income;
    
});