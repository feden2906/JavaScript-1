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
// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний ьексь
// -- поміняти колір тексту у всіх елементів fc_rules на червоний