// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// Зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

const jsonPlaceHolder = 'https://jsonplaceholder.typicode.com';
const postsAPI = '/posts';
const commentsAPI = '/comments';
const albumsAPI = '/albums';
const photosAPI = '/photos';
const todosAPI = '/todos';
const usersAPI = '/users';


fetch(jsonPlaceHolder + postsAPI)
.then(value => value.json())
.then(posts => {
    for (let post of posts) {
        let postsBox = document.getElementsByClassName('posts-box')[0];
        let post1 = document.createElement('div')

        let title = document.createElement('h3');
        title.innerText = `${post.title}`;

        let commentsButton = document.createElement('button');
        commentsButton.innerText = `Comments`;
        commentsButton.addEventListener('click', () => {
            console.log(`Print comments to post - ${post.id}.`);


            fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
            .then(value => value.json())
            .then(comments => {
                let commentsBox = document.getElementsByClassName('comments-box')[0];
                commentsBox.innerHTML = '';
                for (let comment of comments) {
                    let text = document.createElement('li');
                    text.innerText = comment.body;
                    commentsBox.appendChild(text);
                }
            })
        });

        post1.append(title, commentsButton);
        postsBox.appendChild(post1);
    }
});

