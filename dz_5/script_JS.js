/*
Задание 1
1. Поиск в интернете (бесплатные api примеры).
2. Найти любые данные, на произвольную тему.
3. Создать файл data.js.
4. Создать переменную которая будет хранить данные из публичных api.
*/


/*
Задание 2
1. Создать файл index.html.
2. Подключить data.js.
3. Сформировать контент из данных (картинка загловок и параграф).
4. Добавить данный контент в вёрстку.
5. * Добавить стили при необходимости (по желанию).
*/

import { data } from "./data_JS.js";

const newData = [];

data.forEach(elem => {
    if (elem.id <= 10) {
        newData.push(elem)
    }
});

console.log(newData);

/*
albumId: 1
id: 1
thumbnailUrl: "https://via.placeholder.com/150/92c952"
title: "accusamus beatae ad facilis cum similique qui sunt"
url: "https://via.placeholder.com/600/92c952"
*/

const divContent = document.querySelector('.content');

newData.forEach(e => {
// карточка
const card = document.createElement('div');
card.classList.add('card');
divContent.appendChild(card);

// картинка карточки
const divImg = document.createElement('div');
divImg.classList.add('card__image');
// создаем элемент с картинкой и добавляем в divImg
const img = document.createElement('img')
divImg.appendChild(img);
img.src = e.thumbnailUrl;
card.appendChild(divImg);


// содержимое карточки
const divCont = document.createElement('div');
divCont.classList.add('card__content');
// заголовки карточки
const headerCard = document.createElement('h5');
divCont.prepend(headerCard);
card.appendChild(divCont);
headerCard.textContent = `Название альбома: ${e.title}`;
// id альбома
const paragCard = document.createElement('p');
paragCard.classList.add('paragraph');
divCont.appendChild(paragCard);
paragCard.textContent = `Номер альбома: ${e.id}`;   
})
