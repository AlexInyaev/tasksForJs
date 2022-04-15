// **************************************** Задача 1 ********************************************************



function camelizeMyVersion() {
    let str = document.querySelector('#taskArr1').value; //получаю строку из поля
    let arr = str.split(''); //разбиваю строку в массив по буквам
    let out = '';

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == '-') { //если элемент массива дефис 
            out += arr[i + 1].toUpperCase(); //то следующий элемент должен быть заглавной буквой 
            i++;
            continue;
        }

        out += arr[i]; //собираем все элементы в строку
    }
    document.querySelector('.outArr1').textContent = out;
}

document.querySelector('.btnTaskArrMyVersion1').onclick = camelizeMyVersion;

// -------------------------------------------------- решение из learn js ---------------------------------------
function camelize(str) {
    return str
        .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
        .map(
            // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
            // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
}

// далее код позволяет используя наше поле ввода - вывода запустить функцию из учебника
document.querySelector('.btnTaskArr1').onclick = () => {
    let str = document.querySelector('#taskArr1').value;
    document.querySelector('.outArrMyVersion1').textContent = camelize(str);
};

// console.log('-webkit-transition'.split('-')) -> ['', 'webkit', 'transition']


// **************************************** Задача 2 ********************************************************
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function filterRange(arr, a, b) {
    return arr.filter((item) => a < item && item < b)
}
console.log(filterRange(array, 2, 5));
// **************************************** Задача 3 ********************************************************
// Сортировать в порядке по убыванию

let arr = [5, 2, 1, -10, 8];

// ... ваш код для сортировки по убыванию  
arr.sort((a, b) => b - a);

// ... ваш код для сортировки по убыванию окончен

console.log(arr); // 8, 5, 2, 1, -10
// **************************************** Задача 4 ********************************************************
console.log('task - 4');
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

// Создайте функцию copySorted(arr), которая будет возвращать такую копию.
let arr4 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr4);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr4); // HTML, JavaScript, CSS (без изменений)

// решение
function copySorted(arr) {
    let bufferArray = arr.slice();
    bufferArray.sort();
    return bufferArray;
}

// **************************************** Задача 5 ********************************************************
console.log('task - 5');
// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.



let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = /* ... ваш код */users.map(item => item.name)


// alert(names); // Вася, Петя, Маша

// **************************************** Задача 6 ********************************************************
console.log('task - 6');

// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.



let vasya6 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya6 = { name: "Петя", surname: "Иванов", id: 2 };
let masha6 = { name: "Маша", surname: "Петрова", id: 3 };

let users6 = [vasya6, petya6, masha6];

let usersMapped = /* ... ваш код ... */ users6.map((item) => (
    { 'fullName': item.name + ' ' + item.surname, 'id': item.id }
))

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

// alert(usersMapped[0].id) // 1
// alert(usersMapped[0].fullName) // Вася Пупкин


// **************************************** Задача 7 ********************************************************
console.log('task - 7');
// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

let vasya7 = { name: "Вася", age: 25 };
let petya7 = { name: "Петя", age: 30 };
let masha7 = { name: "Маша", age: 28 };

let arr7 = [vasya, petya, masha];
const sortByAge = (arr) => arr.sort((a, b) => a.age - b.age);

sortByAge(arr7);

// теперь: [vasya, masha, petya]
alert(arr7[0].name); // Вася
alert(arr7[1].name); // Маша
alert(arr7[2].name); // Петя