let getId = new URL(location).searchParams.get('userId');       // Type is String
// console.log(`getId is ${getId} and has a "${typeof getId}" type`);
let userId = JSON.parse(getId);     // Type is Number
// console.log(`userId is ${userId} and has a "${typeof userId}" type`);


let userDiv = document.createElement('div');
userDiv.classList.add('userInfo');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(value => value.json())
    .then(user => {console.log(user)})

document.body.appendChild(userDiv);