let userId = + new URL(location).searchParams.get('userId');       // Type is String
// console.log(`getId is ${getId} and has a "${typeof getId}" type`);
// let userId = JSON.parse(getId);                                 // в тебе просто число стрічкою приходить. можна не парсити
// console.log(`userId is ${userId} and has a "${typeof userId}" type`);


let userDiv = document.createElement('div');
userDiv.classList.add('userInfo');
let postsDiv = document.createElement('div');
postsDiv.classList.add('postsBox');


fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
.then(value => value.json())
.then(user => {
    // let userUl = document.createElement('ul');

    recursiveFunc(user, userDiv)
    // for (let key in user) {
    //     let objectInUser = typeof user[key] === 'object';   // Если заменить на user.key ему будет ок?  ні, на це забей
    //
    //     if (objectInUser) {             // Как сделать для этого рекурсию?                                                  // стрічка 45, запуск на 18
    //         let object = user[key];     // Какая проблема, чего оно хочет?  пропонує використати hasOwnProperty, все норм
    //         let objectUl = document.createElement('ul');
    //
    //         for (let value in object) {
    //             let objectLi = document.createElement('li');
    //             objectLi.innerText = `${value} : ${object[value]} (${typeof object[value]})`;
    //             objectUl.appendChild(objectLi);
    //         }
    //
    //         userUl.appendChild(objectUl);
    //     } else {
    //         let userLi = document.createElement('li');
    //         userLi.innerText = `${key} : ${user[key]} (${typeof user[key]})`;
    //         userUl.appendChild(userLi);
    //     }
    // }
    //
    // userDiv.appendChild(userUl);
})      // Как?     Добавить обработку ошибки. Если ссылка не ликвидна, дать сообщение об этом.
.catch(() => console.log('Turn ON your Internet'));     // Так?)) так, або якусь функцію викликати в якій буде описана якась логіка яка має відпрацювати


const recursiveFunc = (obj, wrapper) => {
    let userUl = document.createElement('ul');
    for (let key in obj) {
        let objectLi = document.createElement('li');
        objectLi.innerText = `${key} : ${obj[key]} (${typeof obj[key]})`;
        userUl.appendChild(objectLi);
        wrapper.appendChild(userUl);

        if (typeof obj[key] === 'object') {
            recursiveFunc(obj[key], objectLi)
        }
    }
}



let buttonPosts = document.createElement('button');
buttonPosts.innerText = 'posts of current user';

buttonPosts.addEventListener('click', () => {
    console.log(`Tap Button of "posts of current user"`);
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then(value => value.json())
    .then(posts => {
        for (let post of posts) {
            let postDiv = document.createElement('div');

            let postTitle = document.createElement('h4');
            postTitle.innerText = `${post.title}`;

            let buttonPostDetails = document.createElement('button');
            buttonPostDetails.innerText = 'Details..';

            buttonPostDetails.addEventListener('click', () => {
                console.log(`Post ${JSON.stringify(post.id)} is chosen.`);
                console.log(`Sending data is userID=${JSON.stringify(userId)}, postID=${JSON.stringify(post.id)}...`);

                // setTimeout(() => {
                location.href = `post_details.html?userID=${JSON.stringify(userId)}&postID=${JSON.stringify(post.id)}`;
                // якщо хочеш передати два параметри (що в даному випадку не портібно), то пиши їх через &
                // }, 3000);
            });

            postDiv.append(postTitle, buttonPostDetails);
            postsDiv.appendChild(postDiv);
        }
    })
    .catch(() => console.log('Turn ON your Internet'));
});


document.body.append(userDiv, buttonPosts, postsDiv);
