// --створити масив з: NOT COMPLETE
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let numbersArray = [1,2,3,4,5];
let stringsArray = ["ein","zwei","drei","fier","funf"];
let objectsArray = [
    {int: 11, str: "dasWort1", bool: true},
    {int: 12, str: "dasWort2", bool: true},
    {int: 13, str: "dasWort3", bool: false},
    {int: 14, str: "dasWort4", bool: false},
    {int: 15, str: "dasWort5", bool: true, id: 12, sesdssdsdId: 21, isdsadaad: 12, asdfsdf: 21, sdfasdf: 12, sesasdfsadfId: 234, isadfasdfd: 12, sesasdfasdfaId: 21}
];

console.log(numbersArray);
console.log(stringsArray);
console.log(objectsArray);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let emptyArray = [];
emptyArray[0] = 1;
emptyArray[1] = 2;
emptyArray[2] = 3;
emptyArray[3] = 4;
emptyArray[4] = 5;


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
for (let i = 0; i < 5; i++) {
    document.write("<div> any text</div>");
}

for (let num = 0; num < 5; num++) {
    document.write(`<div> text number ${num}</div>`);
}

let whileVar = 0;
while (whileVar < 20) {
    document.write("<h1> any while text</h1>");
    whileVar++;
}

whileVar = 0;
while (whileVar < 20) {
    document.write(`<h1> while text number ${whileVar}</h1>`);
    whileVar++;
}


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let numbersArray2 = ["1","2","3","4","5","6","7","8","9","10"];
let stringsArray2 = ["ein","zwei","drei","fier","funf","sechs","sieben","acht","neun","zehn"];
let strangeArray2 = [1,true,"ein",2,false,"zwei",3,true,"drei","End of strangeArray"];

for (let element of numbersArray2) {
    console.log(element)
}

for (let element of stringsArray2) {
    console.log(element)
}

for (let element of strangeArray2) {
    console.log(element)
}


for (let element of strangeArray2) {
    if (typeof element === "boolean") {
        console.log(element)
    }
}

for (let element of strangeArray2) {
    if (typeof element === "number") {
        console.log(element)
    }
}

for (let element of strangeArray2) {
    if (typeof element === "string") {
        console.log(element)
    }
}


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
//      Вивести в консоль всі його елементи в циклі.
let emptyArray2 = [];

emptyArray2[0] = true;
emptyArray2[1] = false;
emptyArray2[2] = false;
emptyArray2[3] = true;
emptyArray2[4] = 4;
emptyArray2[5] = 5;
emptyArray2[6] = 6;
emptyArray2[7] = 7;
emptyArray2[8] = "neun";
emptyArray2[9] = "zehn";

for (let i = 0; i < 10; i++) {
    console.log(emptyArray2[i]);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write("<div>" + i + "</div>")
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
//
//
//
//
//
//
//
//
//
//
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
let usersAndCitiesWithId = [];

for (let userId of usersWithId) {
    for (let citiesId of citiesWithId) {
        if (userId.id === citiesId.user_id) {
            usersAndCitiesWithId.push({...userId, ...citiesId});
            // usersAndCitiesWithId.add({userId[id]});
        }
    }
}

// for (let user of usersWithId) {
//     for (let city of citiesWithId) {
//         if (user.id === city.user_id) {
//             let object = {};
//             for (let cityKey in city) {
//                 object.cityKey = city.cityKey;
//             }
//             for (let userKey in user) {
//                 object.userKey = user.userKey;
//             }
//             usersAndCitiesWithId.push(object);
//         }
//     }
// }

console.log(usersAndCitiesWithId);



// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]