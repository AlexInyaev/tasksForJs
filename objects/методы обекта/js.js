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
        alert(this.step);
    }
};
ladder2.up().up().down().showStep()// 1
console.log(ladder2.step);