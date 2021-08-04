// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/comments

const jsonPlaceHolder = 'https://jsonplaceholder.typicode.com';
const postsAPI = '/posts';
const commentsAPI = '/comments';
const albumsAPI = '/albums';
const photosAPI = '/photos';
const todosAPI = '/todos';
const usersAPI = '/users';


fetch(jsonPlaceHolder + usersAPI)
.then(value => value.json())
.then(users => {
    for (let user of users) {
        let divUser = document.createElement('div');
        divUser.classList.add('User');

        let title = document.createElement('h2');
        title.innerText = `${user.id} - ${user.name} is hier.`;
        divUser.appendChild(title);

        let text = document.createElement('p');
        text.innerText = `From - ${user.address.street}.`;      //Почему не выводит адресс улицы?
        text.appendChild(divUser);

        document.body.appendChild(divUser);
    }
});

fetch(jsonPlaceHolder + commentsAPI)
    .then(value => value.json())
    .then(comments => {
        let count = 10;
        for (let comment of comments) {
            if (!count) {break;} else {--count}

            let divComment = document.createElement('div');
            divComment.classList.add('Comment');

            let title = document.createElement('h3');
            title.innerText = `${comment.email}`;
            divComment.appendChild(title);

            let text = document.createElement('p');
            text.innerText = `${comment.body}`;
            divComment.appendChild(text);

            document.body.appendChild(divComment);
        }
    });
