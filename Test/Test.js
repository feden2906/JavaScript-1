let users = [
    {name: "Vova", age: 22, status: false},
    {name: "Secret 1", age: 21, status: true},
    {name: "Nastya", age: 25, status: false},
    {name: "Secret 2", age: 27, status: true},
];

for (let user of users) {           // Look Elements of Array
    console.log(user);              // Output Element (Object)
}

for (let user of users) {           // Look Elements(Object) of Array
    for (let key in user) {         // Look Keys of Object's
        // console.log(key);        // Output Key of Object
        // console.log(user[key]);  // Output Element of Object
        console.log(key, user[key]);
    }
    console.log("---------------")
}

// function foo() {
//     for (let i = 0; i < arguments.length; i++) {
//         console.log(arguments[i]);
//     }
// }
// foo(2, 4, 6, 8, 10);

function foo() {
    for (let argument of arguments) {
        console.log(argument);
    }
}
foo(2, 4, 6, 8, 10);


function buyCandy(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money < 500) {
                console.log('Buy SMALL candy');
                reject("SmallCandy");
            } else {
                console.log('Buy BIG candy');
                resolve('BigCandy');
            }
        }, 5000);
    });
}

function eat () {
    return new Promise(resolve => {
        for (let wait = 3; wait > 0; wait--) {
            setTimeout(() => {
                console.log(`Eating..`, wait);
            }, 1000);
        }
        resolve('Candy is finished..');
    });
}

async function makeHappy(money) {
    try {
        // console.log('Go to the candy-shop.');
        await buyCandy(money);
        await eat();
        console.log('Be happy!');
    } catch (resolve) {
        console.log(`something wrong: ${resolve}`);
    }
}
makeHappy(600).then();


