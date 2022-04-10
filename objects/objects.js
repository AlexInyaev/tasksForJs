// **************************************** Задача 1 ********************************************************

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

let user = new Object();
console.log(typeof user);
user.name = 'John';
user.surname = 'Smith';
console.log(user);
user.name = 'Pete';
console.log(user);
delete user.name;
console.log(user);

// **************************************** Задача 2 ********************************************************
console.log('task2');
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// Должно работать так:

let schedule = {};

console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log(isEmpty(schedule)); // false

// **************************************** Решение 2 ********************************************************

function isEmpty(obj) {
    for (key in obj) {
        return false;
    }
    return true;
}
// **************************************** Задача 3 ********************************************************
console.log('task3');
// У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.

let out2 = 0;

for (key in salaries) {
    out2 += salaries[key];
}
console.log(out2);

// **************************************** Задача 4 ********************************************************
console.log('task4');

// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// Например:

// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции
console.log(menu);
// menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
// };

function multiplyNumeric(menu) {
    for (key in menu) {
        if (typeof menu[key] == 'number') menu[key] *= 2;

    }
}