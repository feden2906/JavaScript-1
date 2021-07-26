// - створити функцію яка обчислює та повертає площу прямокутника висотою NOT COMPLETE
function SquareRectangle(side_a, side_b) {
    return side_a * side_b;
}

let squareRectangle = SquareRectangle(4, 5);
document.write(`<div>SquareRectangle (4, 5) = ${squareRectangle}</div>`)



// - створити функцію яка обчислює та повертає площу кола
function SquareRound(radius) {
    // let Pi = 3.14;
    return Math.PI * Math.pow(radius, 2)
}

let squareRound = SquareRound(6);
document.write(`<div>SquareRound(6) = ${squareRound}</div>`);



// - створити функцію яка обчислює та повертає площу циліндру
let SquareCylinder = function (radius, height) {
    let lengthRound = 2 * 3.14 * radius;
    // return SquareRound(radius) + SquareRectangle(lengthRound, height);  //точность 2 знака после запятой??//
    return SquareRound(radius) + SquareRectangle(lengthRound, height).toFixed(2);
}

let squareCylinder = SquareCylinder(6, 10);
document.write(`<div>SquareCylinder(6, 10) = ${squareCylinder}</div>`);



// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let numbers = [3, 4, 2, 5, 1, 69, 9, 8, 7, 0, -100];

function minMaxNumbers(arguments) {
    let min = arguments[0];
    let max = arguments[0];
    for (let argument of arguments) {
        if (min > argument) {
            min = argument;
        }
        if (max < argument) {
            max = argument;
        }
    }
    console.log(`Max is ${max}`)
    return min;
}

console.log(minMaxNumbers(numbers));



// - створити функцію яка  створює блок з текстом. Текст задати через аргумент
function textMaker(content) {
    document.write(`<div><p>${content}</p></div>`);
}

textMaker("write some text");



// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulMaker(content) {
    document.write(`
    <ul>
        <li>${content}</li>
        <li>${content}</li>
        <li>${content}</li>
    </ul>
    `);
}

ulMaker("Text for Ul");



// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ulFuncMaker(content, count) {
    document.write("<ul>");                     //Тут нужны двойные кавычки?
    for (let i = 0; i < count; i++) {
        document.write(`<li>${content}</li>`);
    }
    document.write("</ul>");
}

ulFuncMaker("Text for funcUl", 3);



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let primArray = [100500, "Go and be drunk", true, 22, false];

function primArrayList(array) {
    document.write("<ul>");
    for (let arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`);
    }
    document.write("</ul>");
}

primArrayList(primArray);