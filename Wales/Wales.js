let canvas = document.getElementById("canvas");
const pi = 3.14159;
let amplitude = 30;

//if (canvas.getContext) {
let ctx = canvas.getContext("2d");

// Рисуем линию
for (n = 0; n > -145; n--) {
    paintSin(n);
}

function paintSin(n) {
    ctx.clearRect(0, 0, 400, 220)
    ctx.strokeStyle = "#3914AF"; //задаем цвет
    ctx.beginPath(); //указываем что рисуем новый элемент

    cx = n;
    cy = canvas.height / 4;
    ctx.moveTo(cx, cy); // позиционирование пера
    for (i = 1; i < 200; i++) {
        x = i * 4;
        y = amplitude * Math.sin(10 * i / 180 * Math.PI);
        ctx.lineTo(cx + x, cy + y); // нарисовать линию до координаты
    }
    ctx.lineWidth = 10; // толщина линии
    ctx.lineCap = "round"; // закруглить концы линии
    ctx.stroke(); // отрисовать 
    setInterval(paintSin, 1000, n--);
}

//
//
//    // Рисуем линию
//    ctx.strokeStyle = "#00CC00"; //задаем цвет
//    ctx.beginPath(); //указываем что рисуем новый элемент
//
//    cx = -145;
//    cy = canvas.height / 2.4;
//    ctx.moveTo(cx, cy); // позиционирование пера
//    for (i = 1; i < 200; i++) {
//        x = i * 4;
//        y = amplitude * Math.sin(10 * i / 180 * Math.PI);
//        ctx.lineTo(cx + x, cy + y); // нарисовать линию до координаты
//    }
//    ctx.lineWidth = 10; // толщина линии
//    ctx.stroke(); // отрисовать 
//
//    // Рисуем линию
//    ctx.strokeStyle = "#FFD300"; //задаем цвет
//    ctx.beginPath(); //указываем что рисуем новый элемент
//
//    cx = 0;
//    cy = canvas.height / 1.6;
//    ctx.moveTo(cx, cy); // позиционирование пера
//    for (i = 1; i < 200; i++) {
//        x = i * 4;
//        y = amplitude * Math.sin(10 * i / 180 * Math.PI);
//        ctx.lineTo(cx + x, cy + y); // нарисовать линию до координаты
//    }
//    ctx.lineWidth = 10; // толщина линии
//    ctx.stroke(); // отрисовать 
//
//    // Рисуем линию
//    ctx.strokeStyle = "#EB1111"; //задаем цвет
//    ctx.beginPath(); //указываем что рисуем новый элемент
//
//    cx = 0;
//    cy = canvas.height / 1.25;
//    ctx.moveTo(cx, cy); // позиционирование пера
//    for (i = 1; i < 200; i++) {
//        x = i * 4;
//        y = amplitude * Math.sin(10 * i / 180 * Math.PI);
//        ctx.lineTo(cx + x, cy + y); // нарисовать линию до координаты
//    }
//    ctx.lineWidth = 10; // толщина линии
//    ctx.stroke(); // отрисовать 
//}
