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