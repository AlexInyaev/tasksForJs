// **************************************** Задача 1 ********************************************************
let calculator = {
    // ... ваш код ...
    read: function () { this.firstNumber = prompt('first number', 22); this.secondNumber = prompt('second number', 15) },
    sum: function () { return +this.firstNumber + +this.secondNumber },
    mul: function () { return this.firstNumber * this.secondNumber }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

