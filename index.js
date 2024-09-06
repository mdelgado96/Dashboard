const api = 'https://dummyjson.com/users'

fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(console.log);