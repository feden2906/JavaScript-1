fetch('https://jsonplaceholder.typicode.com/')
.then(value => value.json())
.then(value => {
    console.log(value);
});
