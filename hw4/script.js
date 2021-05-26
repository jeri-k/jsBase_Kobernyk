
// 1.	Создать функцию calculate(a, b, sign), где a и b — два числа, sign — знак арифметической операции.
//     Функция должна расчитывать результат операции, исходя из переданного ей знака.
//     Функция должна проверять корректность введенных чисел и знака операции.
//     Все аргументы для функции принять от пользователя.

let a;
let b;
let sign;

function calculate(a, b, sign) {
    a = +prompt('Введіть число A',)
    b = +prompt('Введіть число B')
    if (Number.isInteger(a) && (b)) {

        sign = prompt('Введіть арефметичеий знак')

        if (sign === '+') {
            console.log(a + b)
        }
        else if (sign === '-') {
            console.log(a - b)
        }
        else if (sign === '*') {
            console.log(a * b)
        }
        else if (sign === '/') {
            console.log(a / b)
        }
        else {
            console.log('Значення невірне!!! Наприклад:"+,-,*,/"')
        }
    }
    else {
        console.log('Ви ввели не число!!! Введіть число!')
    }
    setTimeout(
        function repeatCalc() {

            let conf = confirm('Обрахувати ще раз?')
            conf ? calculate() : console.log('Я ще пригоджусь))')

        }, 3000)

}

calculate()

// 2.	Создать функцию, возводящую число в степень, число и сама степень вводится пользователем
// Проверить числа на корректность

function pow(a, n) {

    let total = a
    for (let i = 1; i < n; i++) {
        total *= a
    }
    console.log(total)
}

let a =prompt('Введіть число яке треба піднести до сепення');
let n = prompt('Введіть степінь')

if (n < 1) {
    console.log('Неможу піднести до степення!!!')
}
else {
    pow(a, n)
}


// 3.	Допишите функцию, которая определит, парное ли число (решение должно быть в одну строку).
// Функция должна вернуть "Even" или "Odd";

// function isEven(num) {
//     // your code here
// }


function isEven(num) {
    num % 2 === 0 ? console.log('Even') : console.log('Odd')
}
isEven(3)


// 4.	Напишите функцию, которая возвращает n-е число Фибоначчи.
//     Число, которое должна вернуть функция вводит пользователь.
//     Для решения используйте цикл.
//
//     Пользователь ввел: 6
// Ряд Фибоначчи: 1, 1, 2, 3, 5, 8, 13, ...
// Функция должна вернуть: 8


function fib(n) {
    let a = 1;
    let b = 1;

    for (let i = 3; i <= n; i++) {
        let c = a + b
        a = b
        b = c
    }
    return b
}

console.log(fib(98))

// Выбор компьютера определяется строкой:
//
//     var computerChoice = Math.random();
// alert(computerChoice);
//
// Math.random() выдает произвольное число в промежутке от 0 до 1, на основании этого можно построить принцип выбора решения компьютера.
//     Запросить у пользователя один из трех вариантов "Камень-Ножницы-Бумага"
// Сравнить ответ пользователя и компьютера, определить кто выиграл (или ничья)
// Спросить пользователя, хочет ли он повторить, если "да", запустить игру заново


let countUser = 0;
let countComputer = 0;

function goGame() {
    let userChoice = prompt('Виберіть "Камінь","Ножниці" або "Бумага"');
    let computerChoice = Math.random();

    if (computerChoice < 0.35) {
        computerChoice = 'Камінь'
    }
    else if (computerChoice <= 0.65) {
        computerChoice = 'Бумага'
    }
    else {
        computerChoice = 'Ножниці'
    }
    if (userChoice === computerChoice) {
        console.log('Нічія')
    }
    else {

        if (userChoice === 'Камінь') {

            if (computerChoice === 'Ножниці') {
                console.log('Ви виграли')
                countUser++
            }
            else {
                console.log('Компютер переміг')
                countComputer++
            }
        }
        else if (userChoice === 'Бумага') {

            if (computerChoice === 'Камінь') {
                console.log('Ви виграли')
                countUser++
            }
            else {
                console.log('Компютер переміг')
                countComputer++
            }
        }
        else if (userChoice === 'Ножниці') {

            if (computerChoice === 'Камінь') {
                console.log('Компютер переміг')
                countComputer++
            }
            else {
                console.log('Ви виграли')
                countUser++
            }

        }
        else if (userChoice === null) {
            console.log('Гра відмінена')
            console.log(`Очки Гравця  ${countUser},      Очки Компютера ${countComputer}`)
        }
    }
    setTimeout(
        function repeatGame() {
            let repeat = prompt('Бажаєш зіграти ще раз? Введи: Y/N ')
            if (repeat === 'Y') {
                goGame()
            }
            else {
                console.log(`Очки Гравця  ${countUser},      Очки Компютера ${countComputer}`)
            }

        }, 3000
    )
}

goGame()

