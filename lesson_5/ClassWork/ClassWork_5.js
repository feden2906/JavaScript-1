// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
let colorText = document.getElementById('main_header');
colorText.style.color = 'green';       // Что это за тип цвета "(mon-year)"?


// b) робить шириниу елементу ul 400px
let ulWidth = document.getElementsByTagName('ul');
ulWidth[0].style.width = '400px';
ulWidth[0].style.backgroundColor = 'gray';


// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkLists = document.getElementsByClassName('linkList');
for (let link of linkLists) {
    link.innerHTML = `<h2>gggggggg</h2>`
    // link.style = 'width: 50%'                                                                                <--|
    // link.style.width = '200px';         //Как сделать ширину 50% ?// Записать иначе и в документе CSS! Или так -|
    link.style.backgroundColor = 'yellow';
}


// d) отримує текст який зберігається в елементі з класом listElement2
let listElement2 = document.getElementsByClassName('listElement2')[0].innerText;
console.log(listElement2);


// e) отримує всі елементи li та змінює ім колір фону на сірий
let liElements = document.getElementsByTagName('li');
for (let liElement of liElements) {
    liElement.style.backgroundColor = 'gray';
}


// f) отримує всі елементи 'a' та додає їм клас anchor
let aElements = document.getElementsByTagName('a');
// let aElements = [...document.getElementsByTagName('a')];         //Способ вернуть их в массиве а не CollectionHTML
for (let aElement of aElements) {
    aElement.classList.add('anchor');
}


// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (let aElement of aElements) {
    if (aElement.innerText === 'link3') {
        aElement.style.fontSize = '40px';
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (let aElement of aElements) {
    let aTextContent = aElement.innerText;
    aElement.classList.add(`element_${aTextContent}`);
}


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subHeaderElements = document.getElementsByClassName('sub-header');
let colorHeader = prompt('giv me color (yellow)');
for (let subHeaderElement of subHeaderElements) {
    subHeaderElement.style.backgroundColor = colorHeader;
}


// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
for (let subHeaderElement of subHeaderElements) {
    if (subHeaderElement.innerText === 'content 2 segment') {
        subHeaderElement.style.color = prompt('give me color (green)');
    }
}


// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let content_1 = document.getElementsByClassName('content_1');
content_1[0].innerText = prompt('give me random text');


// l) отримати елементи p та змінити їм padding на 20px
let pElements = document.getElementsByTagName('p');
for (let pElement of pElements) {
    pElement.style.padding = '20px';
}


// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
let text_2_Elements = document.getElementsByClassName('text2');
for (let text_2_Element of text_2_Elements) {
    text_2_Element.innerText = 'sgsdgdsfgdsgsdfg';          // текст на назву групи (mon-year) как это?
}

// changed !

