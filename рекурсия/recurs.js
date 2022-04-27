task_1();
function task_1() {
    // Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
    // Например:
    // sumTo(1) = 1
    // sumTo(2) = 2 + 1 = 3
    // sumTo(3) = 3 + 2 + 1 = 6
    // sumTo(4) = 4 + 3 + 2 + 1 = 10
    // ...
    // sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
    // Сделайте три варианта решения:
    // С использованием цикла.
    // Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
    // С использованием формулы арифметической прогрессии.

    function sumToCircle(x) {
        let sum = 0;

        for (let i = 0; i <= x; i++) {
            sum += i;
        }

        return sum;
    }
    console.log(sumToCircle(100));

    function sumToRec(a) {
        if (a == 1) {
            return a;
        } else {
            return a + sumToRec(a - 1);
        }
    }
    console.log(sumToRec(100))

}