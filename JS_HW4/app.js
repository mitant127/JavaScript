'use strict';
//Task 1    Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],  
//мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
//- единицы (в свойстве units)
//- десятки (в свойстве tens)
//- сотни (в свойстве hundereds)
//Например, для числа 45 мы должны получить следующий объект:
//{
//units: 5, //это единицы
//tens: 4, //это десятки
//hundreds: 0, //это сотни
//}
//Если число было передано вне [0, 999] диапазона, не целое число или вообще не число, 
//необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

function checkNumb() {
    while (true) {
        let numb = prompt('Введите число от 0 до 999');
        if ((numb - numb) != 0) {
            console.log("Вы ввели не число.\nПопробуйте еще раз");
        } else if ((numb - Math.floor(numb)) != 0) {
            console.log("Вы ввели дробное число.\nПопробуйте еще раз");
        } else if (numb > 999 || numb < 0) {
            console.log("Вы ввели значение вне диапазона.\nПопробуйте еще раз");
        } else {
            return numb;
        }
    }
}

function objectGenerator() {
    let num = checkNumb();
    let numObj = {};
    numObj.units = num % 10;
    numObj.tens = ((num - (num % 10)) / 10) % 10;
    numObj.hundreds = (num - (num % 100)) / 100;
    return numObj;
}

console.log(objectGenerator());

//Task 1.1  Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока), 
//конструктор Product, который принимает параметры name и price, сохраните их 
//как свойства объекта. Также объекты типа Product должны иметь метод 
//make25PercentDiscount, который будет уменьшать цену в объекте на 25%.

function Product(name, price) {
    this.name = name;
    this.price = price;
    this.make25PercentDiscount = function (discount) {
        this.price = this.price - (this.price * 0.25);
    }
}


const phone = new Product('Phone', 100);
console.log(phone.name);
console.log(phone.price);
phone.make25PercentDiscount(25);
console.log('Price of discount ' + phone.price);

class Product2 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount(Discount) {
        this.price -= this.price * (Discount / 100);
    }
}

//Product2.prototype.make25PercentDiscount = function (discount) {
//    this.price = this.price - (this.price * 0.25);
//}

const phone2 = new Product2('Phone', 100);
console.log(phone2.name);
console.log(phone2.price);
phone2.make25PercentDiscount(25);
console.log('Price of discount ' + phone2.price);


//Task 1.2  Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока),
//а) конструктор Post, который принимает параметры author, text, date и сохраняет 
//их как свойства объекта. Объекты типа Post должны иметь метод edit, который 
//будет принимать текст и записывать его в свойство text объекта.

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
    this.edit = function (text) {
        this.text = text;
    }
}

const message = new Post('Alex', 'Hi to all!', '20,03,2020');
console.log(message);
message.edit("Hello world!");
console.log(message);

class Post2 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
}

Post2.prototype.edit = function (text) {
    this.text = text;
}

const message2 = new Post('Alex', 'Hi to all!', '20,03,2020');
console.log(message2);
message2.edit("Hello world!");
console.log(message2);

//б) конструктор AttachedPost, который принимает параметры author, text, date. 
//Проинициализируйте эти свойства с помощью конструктора Post, чтобы не 
//дублировать код. Также в конструкторе AttachedPost должно создаваться 
//свойство highlighted со значением false. Унаследуйте в объектах типа 
//AttachedPost методы из Post.
//Объекты типа AttachedPost должны иметь метод makeTextHighlighted, 
//который будет назначать свойству highlighted значение true.

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
    this.makeTextHighlighted = function () {
        this.highlighted = true;
    }
}

const message3 = new AttachedPost('Lex', 'Hi', '13,03,2020');
console.log(message3);
message3.makeTextHighlighted();
console.log(message3.author);
console.log(message3.text);
console.log(message3.date);
console.log(message3.highlighted);


class AttachedPost2 extends Post2 {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

const message4 = new AttachedPost2('Lex', 'Hi', '13,03,2020');
console.log(message4);
message4.makeTextHighlighted();
console.log(message4.author);
console.log(message4.text);
console.log(message4.date);
console.log(message4.highlighted);


//Task 2   (это задание по желанию). Для игры бродилка, добавить 
//возможность ходить по диагонали цифрами 1, 3, 7, 9. Также необходимо 
//сделать так, чтобы пользователь не мог совершить шаг в стенку, т.е. 
//при направлении в стенку и игрок оставался на том же месте где стоял.

//Task 3  (это задание по желанию). На базе игры (приняв за пример), 
//созданной на уроке, реализовать игру «Кто хочет стать миллионером?».
//Т.е. у вас должен быть главный объект содержащий всю логику игры, 
//который будет иметь методы, например метод run, возможно метод init и т.д.
//В игре должны быть заранее подготовлены список вопросов и ответов 
//(как минимум 5 вопросов).
//Игра должна приветствовать пользователя, после чего задавать вопросы 
//пользователю и предлагать варианты ответов в виде теста, например:
//Сколько букв в слове "привет":
//a. Пять.
//b. Шесть.
//c. Семь.
//d. Куда я попал?
//Проверять правильный вариант выбрал пользователь или нет, необходимо вести счет.
//По окончании игры, когда было задано 5 вопросов, вы должны сообщить 
//пользователю его счет и предложить сыграть снова.
//Также должна быть возможность выхода из игры заранее, если пользователю 
//надоело играть.
