// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
let contentText = document.getElementById('content');
console.log(contentText.innerText);



// -- отримує текст з блоку з id "rules"
let rulesText = document.getElementById('rules').innerText;
console.log(rulesText);



// -- замініть текст параграфа з id 'content' на будь-який інший
contentText.innerText = 'Any text..';
console.log(contentText.innerText);



// -- замініть текст параграфа з id 'rules' на будь-який інший
document.getElementById('rules').innerText = `Any ander text, new rules`;



// -- змініть кожному елементу колір фону на червоний
let elements = document.body.children;

for (let element of elements) {
    element.style.backgroundColor = 'pink';
}
// let elements = document.querySelectorAll('body > *');        //Новый способ выбора елементов..
// console.log(elements);
// for (let element of elements) {
//     element.style.backgroundColor = 'red';
// }

// let bodyElements = document.getElementsByTagName(`*`);           // Докапывается абсолютно до всех Тегов

// let bodyElements = document.body.getElementsByTagName(`*`);      // Докапывается до всех Тегов в Боди
// for (let bodyElement of bodyElements) {
//     bodyElement.style.backgroundColor = 'gray';
// }



// -- змініть кожному елементу колір тексту на синій
for (let element of elements) {
    element.style.color = 'blue';
}



// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log('List of class by id: rules, moving in array.',[...document.getElementById('rules').classList]);



// -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний text
let fc_rulesElements = document.getElementsByClassName('fc_rules');

for (let fc_RulesElement of fc_rulesElements) {
    fc_RulesElement.addEventListener('click', () => {console.log(fc_RulesElement.innerText)});
    fc_RulesElement.addEventListener('click', () => {console.log('Any ander text...')});

    // fc_RulesElement.onclick = function () {
    //     console.log(this.innerText);
    //     console.log('Any ander text..');
    // };
}



// -- поміняти колір тексту у всіх елементів fc_rules на червоний
for (let fc_RulesElement of fc_rulesElements) {
    fc_RulesElement.style.color = 'red';
}