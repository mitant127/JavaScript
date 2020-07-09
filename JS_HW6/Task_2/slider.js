document.head.insertAdjacentHTML("afterbegin", '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">');

// Получаем элемент со всеми слайдами
let slider = document.querySelector("div.slider");

// Создаем левую стрелку
let leftArrow = document.createElement('i');
leftArrow.classList.add('fas', 'fa-chevron-circle-left', 'slider-leftArrow');
slider.insertAdjacentElement("beforeend", leftArrow);

// Создаем правую стрелку
let rightArrow = document.createElement('i');
rightArrow.classList.add('fas', 'fa-chevron-circle-right', 'slider-rightArrow');
slider.insertAdjacentElement("beforeend", rightArrow);

// Получаем видимую часть слайда
let viewport = document.getElementById("viewport").offsetWidth;
// Получаем кнопку вперёд
//let btnNext = document.getElementById("next");
// Получаем кнопку назад
//let btnPrev = document.getElementById("prev");

// Получаем элементы показа слайда
let viewSliders = document.querySelectorAll(".viewSlide");
// Объявляем переменную номера слайда
let viewSlide = 0;
 
// Назначаем цвет индикатор слайда зелёный
viewSliders[0].style.backgroundColor = "green";
 
// Обработка клика на кнопку вперёд
rightArrow.addEventListener("click", function () {
    // Делаем индикатор слайда красный
    viewSliders[viewSlide].style.backgroundColor = "red";
    // Условие, если номер слайда меньше четырёх
    if (viewSlide < 2) { // Если верно то
        // Увеличиваем номер слайда на один
        viewSlide++;
    } else { // Иначе
        // Номер слайда равен нулю
        viewSlide = 0;
    }
    // Закрашиваем индикатор слайда в зелёный
    viewSliders[viewSlide].style.backgroundColor = "green";
    // Меняем позицию всего слайда
    slider.style.left = -viewSlide * viewport + "px";
});
 
// Обработка клика на кнопку назад
leftArrow.addEventListener("click", function () {
    // Делаем индикатор слайда красный
    viewSliders[viewSlide].style.backgroundColor = "red";
    // Условие, если номер слайда больше нуля
    if (viewSlide > 0) { // Если верно то
        // Уменьшаем номер слайда
        viewSlide--; 
    } else { // Иначе
        // Номер слайда равен четырём
        viewSlide = 2; 
    }
    // Закрашиваем индикатор слайда в зелёный
    viewSliders[viewSlide].style.backgroundColor = "green";
    // Меняем позицию всего слайда
    slider.style.left = -viewSlide * viewport + "px";
});
