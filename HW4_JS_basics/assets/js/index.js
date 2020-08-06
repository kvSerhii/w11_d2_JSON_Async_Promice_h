"use strict"

// Таски на переменные:
// 1) Создайте две переменные a и b. Выведите в консоль результ их умножения.
// let a, b;
// a = +prompt("Enter num1");
// b = +prompt("Enter num2");
// console.log(a * b);

// 2) Создайте две переменные c и d. Выведите в консоль результат деления.
// let c, d;
// c = +prompt("Enter num1");
// d = +prompt("Enter num2");
// console.log(c / d);

// 3) Создайте две переменные e и f. Выведите в консоль результат сложения.
// let e, f;
// e = +prompt("Enter num1");
// f = +prompt("Enter num2");
// console.log(e + f);

// 4) Определите переменные со значениями 11, true, "java script", "100" и выведите их в консоль
// let varOne = 11;
// let varTwo = true;
// let varThree = "java script";
// let varFour = "100";

// console.log(varOne);
// console.log(varTwo);
// console.log(varThree);
// console.log(varFour);

// 5) Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --
// let num = 1;
// num = num + 11;
// num = num - 11;
// num = num * 11;
// num = num / 11;
// num = num + 1;
// num = num - 1;
//
// let num = 1;
// num += 11;
// num -= 11;
// num *= 11;
// num /= 11;
// num++;
// num--;


// Таски на prompt:
// 1) Запросить число у пользователя и возвести его в квадрат
// let userNumber = +prompt("Enter a number");
// // console.log(userNumber *= userNumber);
// console.log(Math.pow(userNumber, 2));

// 2) Вывести среднее арифметическое двух чисел. Числа спрашивать у пользователя.
// let userNumberOne = +prompt("Enter a number");
// let userNumberTwo = +prompt("Enter a number");
// console.log((userNumberOne + userNumberTwo) / 2);


// 3) Перевести число минут в секунды. Число спрашивать у пользователя.
// let userMinutes = +prompt("Enter a number");
// console.log(userMinutes * 60);

/* 4) Создайте переменные greeting со значением'Hello, ' и userName.
   Спросите имя пользователя и занесите данное значение в переменную
   userName. С помощью диалога выведите сообщение с приветствием.
   Например, 'Hello, Vasya!'. */
/* let greeting = "Hello",
    userName = prompt("Enter your name");
console.log(`${greeting} ${userName}`); // Что подразумевалось под выведением с помощью диалога - непонятно, потому два варианта!!
alert(`${greeting} ${userName}`); */

/* Таски на условия:
1) Спросить переменную у юзера. Если переменная равна числу 10,
   то выведите 'Верно', иначе выведите 'Неверно'.*/
/* let userNum = +prompt("Enter a number");

if (userNum === 10) {
    // Опять же, вывести куда?!
    console.log(`Вы ввели ${userNum}. Верно`); // Что подразумевалось под выведением с помощью диалога - непонятно, потому два варианта!!
    alert(`Вы ввели ${userNum}. Верно`);
} else {
    console.log(`Вы ввели ${userNum}. Неверно`); // Что подразумевалось под выведением с помощью диалога - непонятно, потому два варианта!!
    alert(`Вы ввели ${userNum}. Неверно`);
} */

/*  2) Напишите две проверки.
 Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'.  
 Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'
Проверьте работу скрипта при test, равном true, false. */
/* let test = false;
if (test) {
    console.log("Верно");
} else {
    console.log("Неверно");
}
if (!test) {
    console.log("Верно");
} else {
    console.log("Неверно");
}let test = false;
if (test) {
    console.log("Верно");
} else {
    console.log("Неверно");
}
if (!test) {
    console.log("Верно");
} else {
    console.log("Неверно");
} */

/* 3) Вычислить сумму покупки с учетом скидки. Скидка 3% предоставляется,
   если сумма покупки больше 500 грн., а скидка 5% - если сумма покупки больше 800 грн.
   Сумму покупки вводит юзер.*/
/* let sum = +prompt("Enter a sum");
console.log(sum);
if (sum >= 500 && sum < 800) {
    alert(`Ваша скидка ${parseInt(sum/100*3)}`);
} else if (sum >= 800) {
    alert(`Ваша скидка ${parseInt(sum/100*5)}`);
} else {
    alert("Скидки нет!");
} */

/*  Таски на циклы. Каждую задачу решить всеми тремя циклами!
    1) Вывод чисел от 25 до 0 (порядок уменьшения)*/
/* //For
console.log("For");
for (let i = 25; i >= 0; i--) {
    console.log(i);
}
// While
console.log("While");
let i = 25; // Заново объявляем, т.к. объявлення в цикле for уже не существует
while (i >= 0) {
    console.log(i);
    i--;
}
// Do..While
console.log("Do..While");
i = 25; // Заново инициализируем, т.к. повторно используем ту же переменную
do {
    console.log(i);
    i--;
} while (i >= 0); */

/*  2) Вывод чисел от 10 до 50, которые кратны 5*/
/* // For
console.log("For");
for (let it = 10; it <= 50; it += 5) {
    console.log(it);
}
// While
console.log("While");
let it = 10; // Предыдущий it уже не существует
while (it <= 50) {
    console.log(it);
    it += 5;
}
// Do..While
console.log("Do..While");
it = 10; // повторно используем ту же переменную
do {
    console.log(it);
    it += 5;
} while (it <= 50); */

/*  3)  Найти сумму чисел в пределах от 1 до 100.*/
/* // For
console.log("For");
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);
// While
console.log("While");
sum = 0; // Используем повтороно
let i = 1;
while (i <= 100) {
    sum += i;
    i++;
}
console.log(sum);
// Do..While
console.log("Do..While");
i = 1;
sum = 0;
do {
    sum += i;
    i++;
} while (i <= 100);
console.log(sum); */

/* 4) предлагать пользователю решить пример (2 + 2 * 2)
   до тех пор, пока он его не решит*/
/* // fun for
let result;
for (let i = 0; i < 26; i++) {
    result = +prompt("Решите задачу: 2 + 2 * 2 = ?");
    if (result === 6) {
        alert("Верно! Вы наверное гений.");
        break;
    } else if (result !== 6 && i < 20) {
        alert("Неверно! Попробуйте еще раз.");
        console.log(i);
        continue;
    } else if (i >= 20 && i < 25) {
        alert("Может снова в школу?");
        console.log(i);
        continue;
    } else {
        alert("Это уже смешно!");
        break;
    }
} */

/* // just fot
let result;
for (;;) {
    result = +prompt("Решите задачу: 2 + 2 * 2 = ?");
    if (result === 6) {
        alert("Верно! Вы наверное гений.");
        break;
    } else {
        alert("Неверно! Попробуйте еще раз.");
        continue;
    }
} */
/* // While
let result = 0;
while (result !== 6) {
    result = +prompt("Решите задачу: 2 + 2 * 2 = ?");
} */
/* // Do..While
let result;
do {
    result = +prompt("Решите задачу: 2 + 2 * 2 = ?");
} while (result !== 6); */

/*  Таска на функции
1) Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие.
Ожидаемый вывод:
    isAdult(20); // true
    isAdult(4); // false*/

/* isAdult(+prompt("Enter your age"));

function isAdult(age) {
    if (age >= 18) {
        console.log(true);
    } else {
        console.log(false);
    }
} */