// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.



function unique(arr) {
    /* ваш код */

    return Array.from(new Set(arr))
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values)); // Hare,Krishna,:-O