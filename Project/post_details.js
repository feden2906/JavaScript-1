let getUserID = new URL(location).searchParams.get('userID');   // В чем проблемма?
let userID = JSON.parse(getUserID);
let getPostID = new URL(location).searchParams.get('postID');   // Читнуть про эту функцию.
let postID = JSON.parse(getPostID);


let postDiv = document.createElement('div');
postDiv.classList.add('post');
let commentsDiv = document.createElement('div');
commentsDiv.classList.add('commentsBox');


fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
.then(value => value.json())
.then(post => {
    let infoPost = document.createElement('p');
    infoPost.innerText = `Post #${postID} of User_${userID}.`

    let titlePost = document.createElement('h4');
    titlePost.innerText = post.title;

    let bodyPost = document.createElement('p');
    bodyPost.innerText = post.body;

    postDiv.append(infoPost, titlePost, bodyPost);
})


fetch(`https://jsonplaceholder.typicode.com/posts/${postID}/comments`)
.then(value => value.json())
.then(comments => {
    for (let comment of comments) {
        let commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');

        let commentInfo = document.createElement('p');
        commentInfo.innerText = JSON.parse(comment);

        commentDiv.append(commentInfo);     // Сделать более красивую форму для Комента.
        commentsDiv.appendChild(commentDiv);
    }
})


document.body.append(postDiv, commentsDiv);