let users = [
    {name: "Vova", age: 22, status: false},
    {name: "Secret 1", age: 21, status: true},
    {name: "Nastya", age: 25, status: false},
    {name: "Secret 2", age: 27, status: true},
];

for (let user of users) {           // Look Elements of Array
    console.log(user);              // Output Element (Object)
    // console.log(JSON.stringify(user));
}

for (let user of users) {           // Look Elements(Object) of Array
    for (let key in user) {         // Look Keys of Object's
        // console.log(key);        // Output Key of Object
        // console.log(user[key]);  // Output Element of Object
        console.log(key, user[key]);
    }
    console.log("---------------")
}

