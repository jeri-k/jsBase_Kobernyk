/*

    1. Создать объект Point, содержащий два свойства: "x" и "y" — координаты точки, и метод GetQuadrant,
     вычисляющий, в каком квадранте в декартовой системе координат находится данная точка. Протестируйте данный объект,
      изменяя значения его координат, и повторно вызавая метод GetQuadrant.

2. Создать объект Calculator, который должен содержать методы для расчета суммы, разности, произведения и частного двух чисел.
    Протестировать данный объект, принимая от пользователя значения двух операндов и знак операции.
    В зависимости от принятого знака операции, вызвать соответствующий метод.

3. Создать два произвольных массива:
    один массив - любимая спортивная команда / модели автомобилей / города,
    во втором - количество игроков в команде / объем двигателя / количество жителей в городе.
    Из двух массивов сделайте ассоциативный массив (объект).
    Массив, который будет выступать в качестве ключа - должен содержать уникальные значения

Например:
    let keys = ["id", "name"];
let values = [1, "Vlad"];

В результате должно получится следующее:
{
    "id": 1,
    "name": "Vlad"
}

4. Создать массив, который будет хранить в себе информацию о сотрудниках предприятия. Каждый элемент масива — объект,
    содержащий свойства: name, sName, age, occupation, и метод show, который выводит всю информацию о пользователе.
    Реализовать заполнение массива пользователем. По окончанию заполнения — вывести информацию о сотрудниках.

5. Для предыдущего задания создайте функцию, которая будет принимать в себя массив объектов-сотрудников, и каждому из объектов
будет добавлять новое свойство "salary", хранящее зарплату сотрудника.
    Зарплата расчитывается, исходя из значения свойства "occupation" следующим образом:
    • "director" — 3000;
           • "manager" — 1500;
           • "programmer" — 2000;
           • для остальных значений — 1000.
После выполнения функции — вывести информацию о сотрудниках.

// sort(function(a, b) { return a > b });
// 1, 2, 3, 5, 10, 14
// 1, 10, 14, 2, 3,


6. (*) Для задания 3 создать метод, позволяющий отсортировать массив сотрудников по одному из свойств: name, sName, age, occupation, salary.
    Параметр для сортировки принимается от пользователя.
    После выполнения функции — вывести информацию о сотрудниках.

*/

// 1. Создать объект Point, содержащий два свойства: "x" и "y" — координаты точки, и метод GetQuadrant,
//     вычисляющий, в каком квадранте в декартовой системе координат находится данная точка. Протестируйте данный объект,
//     изменяя значения его координат, и повторно вызавая метод GetQuadrant.

let a = prompt('Введіть кординати точка X');
let b = prompt('Введіть кординати точка Y');

let point = {
    x: a,
    y: b,
    getQuadrant: function (x, y) {

        if (point.x > 0 && point.y > 0) {
            console.log("Точка в першому квадранті");
        }
        else if (point.x > 0 && point.y < 0) {
            console.log("Точка у другому квадранті");
        }
        else if (point.x < 0 && point.y < 0) {
            console.log("Точка у третьому квадранті");
        }
        else if (point.x < 0 && point.y > 0) {
            console.log("Точка в четвертому квадранті");
        }
        else if (point.x === 0 && point.y === 0) {
            console.log("Начало координат");
        }
    }
};
point.getQuadrant()


// 2. Создать объект Calculator, который должен содержать методы для расчета суммы, разности, произведения и частного двух чисел.
//     Протестировать данный объект, принимая от пользователя значения двух операндов и знак операции.
//     В зависимости от принятого знака операции, вызвать соответствующий метод.

let a = prompt('Введіть число A',);
let b = prompt('Введіть число B');
let sign = prompt('Введіть арефметичеий знак');
let result;

let calculator = {
    sum: function (a, b) {
        result = a + b;
        console.log(`Обрахований результат: ${result}`);
    },
    sub: function (a, b) {
        result = a - b;
        console.log(`Обрахований результат: ${result}`);
    },
    mul: function (a, b) {
        result = a * b;
        console.log(`Обрахований результат: ${result}`);
    },
    div: function (a, b) {
        result = a / b;
        console.log(`Обрахований результат: ${result}`);
    },
}

if (isNaN(a) || isNaN(b)) {
    console.log('Ви ввели не число!!! Введіть число!')
}
else {

    if (sign === '+') {
        calculator.sum(a, b)
    }
    else if (sign === '-') {
        calculator.sub(a, b)
    }
    else if (sign === '*') {
        calculator.mul(a, b)
    }
    else if (sign === '/') {
        calculator.div(a, b)
    }
}

// 3. Создать два произвольных массива:
//     один массив - любимая спортивная команда / модели автомобилей / города,
//     во втором - количество игроков в команде / объем двигателя / количество жителей в городе.
//     Из двух массивов сделайте ассоциативный массив (объект).
//     Массив, который будет выступать в качестве ключа - должен содержать уникальные значения

let a = ['Sporting', 'BMW', 'Ericeira']
let b = ['24', '3,5', '123000']
let result = {};

 a.forEach((key, i) => result[key] = b[i]);
console.log(result);

// 4.Создать массив, который будет хранить в себе информацию о сотрудниках предприятия. Каждый элемент масива — объект,
//     содержащий свойства: name, sName, age, occupation, и метод show, который выводит всю информацию о пользователе.
//     Реализовать заполнение массива пользователем. По окончанию заполнения — вывести информацию о сотрудниках.

let company = [
    person_1 = {
        name: a = prompt("Введіть ім’я:"),
        sName: b = prompt("Введіть прізвище:"),
        age: c = prompt("Введіть вік:"),
        occupation: d = prompt("Введіть вашу посаду:"),
        show: function () {
            console.log("Імя: " + this.name);
            console.log("Прізвище: " + this.sName);
            console.log("Вік: " + this.age);
            console.log("Посада: " + this.occupation);
        }
    },
    person_2 = {
        name: a = prompt("Введіть ім’я:"),
        sName: b = prompt("Введіть прізвище:"),
        age: c = prompt("Введіть вік:"),
        occupation: d = prompt("Введіть вашу посаду:"),
        show: function () {
            console.log("Імя : " + this.name);
            console.log("Прізвище: " + this.sName);
            console.log("Вік: " + this.age);
            console.log("Посада: " + this.occupation);
        }
    },
    pwrson_3 = {
        name: a = prompt("Введіть ім’я:"),
        sName: b = prompt("Введіть прізвище:"),
        age: c = prompt("Введіть вік:"),
        occupation: d = prompt("Введіть вашу посаду:"),
        show: function () {
            console.log("Імя : " + this.name);
            console.log("Прізвище: " + this.sName);
            console.log("Вік: " + this.age);
            console.log("Посада: " + this.occupation);
        }
    }
]
for (let i = 0; i < company.length; i++) {
    company[i].show();
}

// 5. Для предыдущего задания создайте функцию, которая будет принимать в себя массив объектов-сотрудников, и каждому из объектов
// будет добавлять новое свойство "salary", хранящее зарплату сотрудника.
//     Зарплата расчитывается, исходя из значения свойства "occupation" следующим образом:
//     • "director" — 3000;
//            • "manager" — 1500;
//            • "programmer" — 2000;
//            • для остальных значений — 1000.
// После выполнения функции — вывести информацию о сотрудниках.


let company = [
    person_1 = {
        name: a = prompt("Введіть ім’я:"),
        sName: b = prompt("Введіть прізвище:"),
        age: c = prompt("Введіть вік:"),
        occupation: d = prompt("Введіть вашу посаду:"),
    },
       person_2 = {
           name: a = prompt("Введіть ім’я:"),
           sName: b = prompt("Введіть прізвище:"),
           age: c = prompt("Введіть вік:"),
           occupation: d = prompt("Введіть вашу посаду:"),
       },
       person_3 = {
           name: a = prompt("Введіть ім’я:"),
           sName: b = prompt("Введіть прізвище:"),
           age: c = prompt("Введіть вік:"),
           occupation: d = prompt("Введіть вашу посаду:"),
       }
]

function assignSalary(arr) {
    for (let i = 0; i < arr.length; i++) {

        if (arr[i].occupation === "director") {
            arr[i].salary = 3000 + ' $';
        }
        else if (arr[i].occupation === "manager") {
            arr[i].salary = 1500 + ' $';
        }
        else if (arr[i].occupation === "programmer") {
            arr[i].salary = 2000 + ' $';
        }
        else {
            arr[i].salary = 1000 + ' $';
        }


    }
}

assignSalary(company);

for (let i = 0; i < company.length; i++) {
    console.log("Імя : " + company[i].name);
    console.log("Прізвище: " + company[i].sName);
    console.log("Вік: " + company[i].age);
    console.log("Посада: " + company[i].occupation);
    console.log("Заробітння плата: " + company[i].salary);
}

/*6. (*) Для задания 3 создать метод, позволяющий отсортировать массив сотрудников по одному из свойств: name, sName, age, occupation, salary.
    Параметр для сортировки принимается от пользователя.
    После выполнения функции — вывести информацию о сотрудниках.*/


let company = [
    person_1 = {
        name: a = prompt("Введіть ім’я:"),
        sName: b = prompt("Введіть прізвище:"),
        age: c = prompt("Введіть вік:"),
        occupation: d = prompt("Введіть вашу посаду:"),
    },
    person_2 = {
        name: a = prompt("Введіть ім’я:"),
        sName: b = prompt("Введіть прізвище:"),
        age: c = prompt("Введіть вік:"),
        occupation: d = prompt("Введіть вашу посаду:"),
    },
    person_3 = {
        name: a = prompt("Введіть ім’я:"),
        sName: b = prompt("Введіть прізвище:"),
        age: c = prompt("Введіть вік:"),
        occupation: d = prompt("Введіть вашу посаду:"),
    }
]

function assignSalary(arr) {
    for (let i = 0; i < arr.length; i++) {

        if (arr[i].occupation === "director") {
            arr[i].salary = 3000 + ' $';
        }
        else if (arr[i].occupation === "manager") {
            arr[i].salary = 1500 + ' $';
        }
        else if (arr[i].occupation === "programmer") {
            arr[i].salary = 2000 + ' $';
        }
        else {
            arr[i].salary = 1000 + ' $';
        }


    }
}

assignSalary(company)

let category = prompt("Введіть категорію", 'name, sName, age, salary');

company.sort(function (a, b) {

    if (category === 'name') {
        if (a['name'] > b['name']) {
            return 1
        }
        else if (a['name'] < b['name']) {
            return -1
        }
        else {
            return 0
        }
    }
    else if (category === 'sName') {
        if (a['sName'] > b['sName']) {
            return 1
        }
        else if (a['sName'] < b['sName']) {
            return -1
        }
        else {
            return 0
        }
    }
    else if (category === 'age') {
        return a['age'] - b['age'];
    }
    else if (category === 'salary') {
        return a['salary'] - b['salary'];
    }
    else {
        console.log('NOT INFORMATION')
    }

})
console.log(company)