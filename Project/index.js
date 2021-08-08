let usersDiv = document.createElement('div');
usersDiv.classList.add('usersBox');

fetch('https://jsonplaceholder.typicode.com/users')
.then(value => value.json())
.then(users => {
    for (let user of users) {
        let userDiv = document.createElement('div');
        userDiv.classList.add('user');

        let title = document.createElement('h3');
        title.innerText = `User ${user.id} is ${user.name}.`;

        let button = document.createElement('button');
        button.innerText = 'Details..';
        button.addEventListener('click', () => {
            console.log(`User ${user.id} is chosen.`);
            console.log(`Sending data is ${JSON.stringify(user.id)}...`);
            // window.location.href = `user_details.html?userId=${JSON.stringify(user.id)}`;
            setTimeout(() => {
                window.location.href = `user_details.html?userId=${JSON.stringify(user.id)}`;
            }, 3000);
        });

        userDiv.append(title, button);
        usersDiv.appendChild(userDiv);
    }
})

document.body.appendChild(usersDiv);