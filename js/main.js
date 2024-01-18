const shah = fetch("https://jsonplaceholder.typicode.com/users");
shah.then(response => response.json())
.then(function (json) {
  const sha= json.map((x)=>({name: x.name, email: x.email, phone: x.phone}));
  document.getElementById('data').innerHTML=JSON.stringify(sha);
  return console.log(sha);
} );