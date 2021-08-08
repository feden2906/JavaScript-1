let getId = new URL(location).searchParams.get('userId');       // Type is String
// console.log(`getId is ${getId} and has a "${typeof getId}" type`);
let userId = JSON.parse(getId);     // Type is Number
// console.log(`userId is ${userId} and has a "${typeof userId}" type`);


let userDiv = document.createElement('div');
userDiv.classList.add('userInfo');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(value => value.json())
    .then(user => {
        console.log(user);
        // userDiv.innerText = JSON.stringify(user);    // Delete this string of code
        let infoList = document.createElement('ul');

        for (let key in user) {
            let object = typeof user[key] === 'object';
            if (object) {
                let ul = document.createElement('ul');

                for (let value in user[key]) {
                    let stripUl = document.createElement('li');
                    stripUl.innerText = `${value} : ${user[key][value]} (${typeof user[key][value]})`;
                    ul.appendChild(stripUl);
                }

                infoList.appendChild(ul);
            } else {
                let strip = document.createElement('li');
                strip.innerText = `${key} : ${user[key]} (${typeof user[key]})`;
                infoList.appendChild(strip);
            }
        }

        userDiv.appendChild(infoList);
    })
    // Как?     Добавить обработку ошибки. Если ссылка не ликвидна, дать сообщение об этом.

document.body.appendChild(userDiv);