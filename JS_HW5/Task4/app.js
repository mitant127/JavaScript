'use strict';

// 1. получите все кнопки и сохраните в переменную
const buttons = document.querySelectorAll('button');
//let buttons = document.getElementsByTagName('button');

// 1.1 затем проитерируйтесь по кнопкам и каждой из
// них добавьте обработчик клика - функцию handleClick
buttons.forEach(function(button) {
    button.addEventListener('click', handleClick);
});

/**
 * Функция обрабатывает клик по кнопке в карточке товара и попеременно вызывает
 * функции для показа или скрытия текста о товаре.
 * @param {MouseEvent} clickedButtonEvent 
 */
function handleClick(clickedButtonEvent) {
//        console.log('click');
//        console.log(clickedButtonEvent);
//        console.log(clickedButtonEvent.path[1]);

    // 2. из объекта события получите ссылку на .product и
    // сохраните в переменную:
     const cardNode = clickedButtonEvent.path[1];
//    console.log(cardNode);
    
    // 3. создайте литерал объекта со следующими свойствами:
    const card = {
        wrap: cardNode, // здесь элемент с классом .product
        img: cardNode.children[1], // здесь картинка внутри .product
        productName: cardNode.children[0], // здесь .productName, который внутри .product
        button: cardNode.children[2], // здесь button, который внутри .product
    };

    console.log(card);
    
    // 4. получаем текст на кнопке, которая внутри .product
    
    let buttonText = card.button.innerText
    
    console.log(buttonText);
    
    if (buttonText == 'Подробнее') { // 4.1 проверяем равняется ли этот текст строке "Подробнее"
        // 4.2 если да, то передаем объект card в функцию showMoreText
        showMoreText(card);
    } else if (buttonText == 'Отмена') { // 4.3 проверяем равняется ли текст на кнопке строке "Отмена"
        // 4.4 если да, то передаем объект card в функцию hideMoreText
        hideMoreText(card);
    }
}

/**
 * Функция скрывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button
 */
function hideMoreText(card) {
    // 5. картинке внутри .product ставим стиль display: block

    card.img.style.display = "block";
    
    // 5.1 внутри .product находим элемент с классом .desc и удаляем его
    
    //    card.classList.remove("desc");
    
    // 5.2 кнопке, которая внутри .product ставим текст "Подробнее"
    
    card.button.innerText = 'Подробнее';
    
}

/**
 * Функция показывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button 
 */
function showMoreText(card) {
    // 6. картинке внутри .product ставим display: none

    card.img.style.display = "none";
    
    // 6.1 сохраняем произвольный текст в переменную
    
    const descText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea obcaecati sed eos eveniet ipsum itaque aut vitae illo molestias eligendi.';
    
    // 6.2 внутри .product есть .productName, после него вставляем div.desc и текстом из переменной из п. 6.1
    
    let product = card.wrap.querySelector('.productName').parentNode;
//    console.log(product);
    let childElem = product.querySelectorAll("button");
//     console.log(childElem);
    let dive = document.createElement('div');
    dive.className = "desc";
    product.insertBefore(dive, childElem[0]);
    dive.innerText = descText;
    
    // 6.3 внутри .product у кнопки текст ставим "Отмена"
    
    card.button.innerText = 'Отмена';
}