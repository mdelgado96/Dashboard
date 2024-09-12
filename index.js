const api = 'https://dummyjson.com/users'

fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(console.log);

function closeNav() {
    document.getElementById("nav_column_open").remove;
    document.append("");
}