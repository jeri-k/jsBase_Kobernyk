


// 1. По координатам двух точек, которые вводит пользователь, определить уравнение прямой, проходящей через эти точки.
// Общий вид уравнения: y = kx + b; где k = (y1 - y2) / (x1 - x2), b = y2 - k*x2.
let x1 = 3,
    x2 = 4,
    y1 = 8,
    y2 = 9,
    x = 4;

let k = (y1 - y2) / (x1 - x2),
    b = y2 - k * x2,
    y = k * x + b;
console.log(y)

// 2. Обменять значения двух переменных, используя третью (буферную) переменную. Вывести значение переменных до и после обмена.
let a = 5,
    b = 7,
    bof;
bof = a
a = b
b = bof
// b = [a, a = b][0]
console.log(a, b)

// 3.  Объявите две переменные: admin и name.
// 	Запишите строку "Джон" в переменную name.
// 	Скопируйте значение из переменной name в admin.
// 	Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).
let name = 'Джон',
    admin;
admin = name
alert(admin)

// 4. Получить от пользователя данные о пользователе: имя, фамилию, возраст. Обработать их и вывести на экран.
let lastName = prompt('Enter your last name'),
    firstName = prompt('Enter your first name'),
    age = prompt('Enter your age');

document.write('You Name: ' + lastName + '<br>' + 'You First Name: ' + firstName + '<br>' + 'You age: ' + age + ' year')


// 5. Запросите у пользователя его возраст, после чего выведите на экран модальное окно с вопросом:
// "Ваш возраст ...(введеное пользователем число) лет?". Далее в зависимости от выбора пользователя выводится
// модальное окно с информацией true или false.
let age = prompt('Enter your age'),
    conFirm = confirm(`Ваш возраст ${age} лет?`)
alert(conFirm)






