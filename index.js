const api = 'https://dummyjson.com/users'

fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(console.log);

function openNav() {
    document.getElementById("side_bar").classList.remove('nav_column_closed');
    document.getElementById("sidebar_close").classList.add('none');
    document.getElementById("nav_btn_id").classList.add('nav_column_open');
    document.getElementById("sidebar_open").classList.remove('none');

}