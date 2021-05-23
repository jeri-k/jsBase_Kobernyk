
// 1. Сделать собственные примеры методов применяемых для массивов.

let arr1 = ['Denver', 'Phoenix', 'Nuggets', 'Blazers'];
let arr2 = [1, 2, 3, 4, 5, 6, [3, 4, 56], [3, 4, 5]];

console.log(arr1.join(' - '))

console.log(arr1.reverse().join(' % '))

console.log(arr1.sort())

console.log(arr1.concat(arr2).join(' # '))

console.log(arr2.slice(4, -1))

console.log(arr1.splice(-2, 1, 'Tera'))

console.log(arr1.splice(-2, 1))

arr1.push('Laikerz')
console.log(arr1)

arr1.pop()

arr2.unshift(7, 2)

arr2.shift()

console.log(arr1)

console.log(arr2)

// 2. Создать программу, выполняющую вставку элемента в массив после элемента, значение которого укажет пользователь.
//     Описание:
// п.1 Создайте произвольный массив и заполните его данными, например: var cars = ["Mitsubishi", "Honda", "Toyota", "Suzuki", "Audi", "BMW", "Mercedes"];
// п.2 Запросите у пользователя название элемента массива
// п.3.1 Если в массиве такой элемент есть - то необходимо после него вставить новый элемент, который пользователь введет дальше
// п.3.2 Если в массиве такого элемента нет - добавить в конец массива
// п.4 Если в массиве есть одинаковые элементы (из. п.2), программа должна добавлять только после первого найденного элемента
// п.5 Запросите у пользователя новый элемент для массива и вставьте его после найденного элемента или же в конец массива (в зависимости от условий выше)
//

let cars = ["Mitsubishi", "Honda", "Toyota", "Suzuki", "Audi", "BMW", "Mercedes"];
let shareCar = 'Benz'
let addNewCar;


for (let i = 0; i <= cars.length; i++) {
    if (shareCar === cars[i]) {
        addNewCar = 'Infinity';
        cars.splice(i + 1, 0, addNewCar)
        break

    }
    if (!cars[i]) {
        cars.push(shareCar)
        break

    }


}
console.log(cars)

// 3. Создать многомерный массив, размер массива получить от пользователя.
// Каждый нечётный элемент массива заполнить подмассивом со значением 'odd', а чётный - 'even'.
//     Размер каждого вложенного массива - 3.
//
// Для массива размером 3
//     ['odd', 'odd', 'odd']       // 1й элемент
//     ['even', 'even', 'even']    // 2й элемент
//     ['odd', 'odd', 'odd']       // 3й элемент

let arr = []
let countI = 3
let countJ = 3


for (let i = 1; i <= countI; i++) {
    arr[i] = []
    for (let j = 1; j <= countJ; j++) {
        if (i % 2 === 1) {
            arr[i].push('odd')
        } else {
            arr[i].push('even')
        }
    }
}
console.log(arr)

