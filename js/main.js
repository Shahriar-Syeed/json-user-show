// const shah = fetch("https://jsonplaceholder.typicode.com/users");
// shah.then(response => response.json())
// .then(function (json) {
//   const sha= json.map((x)=>({name: x.name, email: x.email, phone: x.phone}));
//   document.getElementById('data').innerHTML=JSON.stringify(sha);
//   return console.log(sha);
// } );


let userData = [];
let sum="";

function changeHTML(id, userData){

  
  
  
  for(let i=0;i < userData.length;i++){    
    sum =sum+`
    <div class="col-12 col-md-6 col-lg-4 col-xxl-3">
    <div class="card my-2">
      <div class="card-body">
        <p class="card-text">Name: ${userData[i].name}</p>
        <p class="card-text">Phone: ${userData[i].phone}</p>
        <p class="card-text">Email: ${userData[i].email}</p>
      </div>
    </div>
  </div>
  `;
}
document.getElementById(id).innerHTML = sum;
}

async function callApi(){
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    userData = data;
    
      changeHTML('row', userData);
  })

  // const response = await fetch('https://jsonplaceholder.typicode.com/users');
  // const data = await response.json();
  // console.log("data", data[0].name);
}

callApi();

