// - створити функцію яка обчислює та повертає площу прямокутника висотою NOT COMPLETE
function SquareRectangle(side_a, side_b) {
    return side_a * side_b;
}
document.write(`<div>SquareRectangle (4, 5) = ${SquareRectangle(4, 5)}</div>`)


// - створити функцію яка обчислює та повертає площу кола
function SquareRound(radius) {
    let Pi = 3.14;
    return Pi * Math.pow(radius, 2)
}
document.write(`<div>SquareRound(6) = ${SquareRound(6)}</div>`);


// - створити функцію яка обчислює та повертає площу циліндру
let SquareCylinder = function (radius, height) {
    let lenghtRound = 2 * 3.14 * radius;
    let SquareCylinder = SquareRound(radius) + SquareRectangle(lenghtRound, height);
    return SquareCylinder;  // как сократить точность до 2 знаков после запятой??
}
document.write(`<div>SquareCylinder(6, 10) = ${SquareCylinder(6, 10)}</div>`);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// - створити функцію яка  створює блок з текстом. Текст задати через аргумент
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
