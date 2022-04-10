// **************************************** Задача 1 ********************************************************
let calculator = {
    // ... ваш код ...
    read: function () { this.firstNumber = prompt('first number', 22); this.secondNumber = prompt('second number', 15) },
    sum: function () { return +this.firstNumber + +this.secondNumber },
    mul: function () { return this.firstNumber * this.secondNumber }
};

// calculator.read();
// alert(calculator.sum());       закомментировал чтобы не мешали 
// alert(calculator.mul());

// **************************************** Задача 2 ********************************************************
// Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:

let ladder = {
    step: 0,
    up() {
        this.step++;
    },
    down() {
        this.step--;
    },
    showStep: function () { // показывает текущую ступеньку
        // alert(this.step);
    }
};
// Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

// ladder.up().up().down().showStep(); // 1
// **************************************** Задача 2 решение ********************************************************

let ladder2 = {
    step: 0,
    up: function () {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () { // показывает текущую ступеньку
        // alert(this.step); чтобы не мешал заменен console.log строка 54
    }
};
ladder2.up().up().down().showStep()// 1
console.log(ladder2.step);

// **************************************** Задача 3  ********************************************************
// Создайте функцию - конструктор Calculator, который создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.

// **************************************** Задача 3 решение ********************************************************
function Calculator2() {
    this.read = function () { this.oneVariable = +prompt('enter 1 variable', 5); this.twoVariable = +prompt('enter 2 variable', 5) }
    this.sum = function () { return this.oneVariable + this.twoVariable }
    this.mul = function () { return this.oneVariable * this.twoVariable }
}


// let calculator2 = new Calculator2();
// calculator2.read();

// alert("Sum=" + calculator2.sum());         закомментировал чтобы не мешали
// alert("Mul=" + calculator2.mul());


// **************************************** Задача 4 ********************************************************
// Напишите функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() использует prompt для получения числа и прибавляет его к свойству value.
// Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.

// **************************************** Задача 4 решение ********************************************************
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () { this.value += +prompt('add number please', 2) }
}



let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавит ввод prompt к текущему значению           закомментировал чтобы не мешали
// accumulator.read(); // прибавит ввод prompt к текущему значению     

// alert(accumulator.value); // выведет сумму этих значений

console.log(accumulator)


// *****test

let id = Symbol('id');

let obj = {
    'a': 'q'
}

obj[id] = 5;

console.log(obj)
for (key in obj) {
    console.log(obj.key)
}


let newobj = Object.assign({}, obj);
console.log(newobj);

let gid = Symbol.for('gid');
let g = Symbol.for('gid');
console.log(g)
obj[g] = 888;
console.log(obj)
let id2 = Symbol('id');

obj[id2] = 2;
console.log(obj)
console.log(Reflect.ownKeys(obj))