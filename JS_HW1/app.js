"use strict";

alert(+"2,5")

//Task 1
let Tc = prompt('Enter temperature in celsius: ');
let Tf = (9 / 5) * Tc + 32;
alert(Tf)

//Task 2
let admin;
let name = "Василий";
admin = name;
console.log(admin);

//Task 2
console.log(10 + 10 + "10");
/* 10 + 10 =20 
20 + "10" = "2010"*/

console.log(10 + "10" + 10);
/* 10 + "10" = "1010"
"1010" + 10 = "101010"*/

console.log(10 + 10 + +"10");
/* 10 + 10 = 20
+"10" = 10
20 + 10 = 30*/

console.log(10 / -"");
/* -"" = 0
10 / 0 = -Infinity */

console.log(10 / +"2,5");
/* +"2,5" = NaN
10 / NaN = NaN*/

Task 4 
let mode = "normal";  //да
let my_valu3 = 102;  //да
let 3my_value3 = "102";  // нет (начинается с цифры)
let __hello__ = "world";  // да
let $$$ = "money";  //  да
let !0_world = true; //нет (используется спецсимвол)
