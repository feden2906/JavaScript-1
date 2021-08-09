let getId = new URL(location).searchParams.get('userId');       // Type is String
// console.log(`getId is ${getId} and has a "${typeof getId}" type`);
let userId = JSON.parse(getId);     // Type is Number
// console.log(`userId is ${userId} and has a "${typeof userId}" type`);


let userDiv = document.createElement('div');
userDiv.classList.add('userInfo');
let postsDiv = document.createElement('div');
postsDiv.classList.add('postsBox');


fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
.then(value => value.json())
.then(user => {
    console.log(user);
    let userUl = document.createElement('ul');

    for (let key in user) {
        let objectInUser = typeof user[key] === 'object';

        if (objectInUser) {             // Как сделать для этого рекурсию?
            let object = user[key];
            let objectUl = document.createElement('ul');

            for (let value in object) {
                let objectLi = document.createElement('li');
                objectLi.innerText = `${value} : ${object[value]} (${typeof object[value]})`;
                objectUl.appendChild(objectLi);
            }

            userUl.appendChild(objectUl);
        } else {
            let userLi = document.createElement('li');
            userLi.innerText = `${key} : ${user[key]} (${typeof user[key]})`;
            userUl.appendChild(userLi);
        }
    }

    userDiv.appendChild(userUl);
})      // Как?     Добавить обработку ошибки. Если ссылка не ликвидна, дать сообщение об этом.
.catch(() => console.log('Turn ON your Internet'));     // Так?))


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

                setTimeout(() => {
                    window.location.href = `post_details.html?userID=${JSON.stringify(userId)}, postID=${JSON.stringify(post.id)}`;
                }, 3000);
            });

            postDiv.append(postTitle, buttonPostDetails);
            postsDiv.appendChild(postDiv);
        }
    })
    .catch(() => console.log('Turn ON your Internet'));
});


document.body.append(userDiv, buttonPosts, postsDiv);
