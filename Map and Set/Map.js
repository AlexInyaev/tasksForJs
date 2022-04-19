// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.



function unique(arr) {
    /* ваш код */

    return Array.from(new Set(arr))
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values)); // Hare,Krishna,:-O


// **************************************** Задача 2 ********************************************************
console.log('task - 2');
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

function aclean(arr) {
    let map = new Map();
    let out = [];


    arr.forEach(value => {
        map.set(Array.from(value.toLowerCase()).sort().join(''), value)

    });
    for (let item of map.values()) {
        out.push(item)
    }
    console.log(map.entries());
    return out;

}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"
// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

//Решение из книги

// function aclean(arr) {
//     let map = new Map();

//     for (let word of arr) {
//         // разбиваем слово на буквы, сортируем и объединяем снова в строку
//         let sorted = word.toLowerCase().split("").sort().join(""); // (*)
//         map.set(sorted, word);
//     }

//     return Array.from(map.values());
// }

// **************************************** Задача 3 ********************************************************
console.log('task - 3');

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

alert(sumSalaries(salaries)); // 650

function sumSalaries(obj) {
    return Object.values(obj).reduce((out, val) => out + val, 0)
}

let user = {
    name: 'John',
    age: 30
};

alert(count(user)); // 2

function count(obj) {
    return Object.keys(obj).length
}


