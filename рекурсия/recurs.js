task_1();
task_2();
task_3()
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
    console.log(sumToRec(100));

    function sumToMath(n) {
        // Sn = (a1 + an)/2*n;
        // n * (n + 1) / 2;   из learn js
        // a = 1;
        let sn = (1 + 1 * n) / 2 * n;
        return sn;
    }
    console.log(sumToMath(100));
}

function task_2() {
    // Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.
    // 1! = 1
    // 2! = 2 * 1 = 2
    // 3! = 3 * 2 * 1 = 6
    // 4! = 4 * 3 * 2 * 1 = 24
    // 5! = 5 * 4 * 3 * 2 * 1 = 120

    function factorial(n) {
        if (n == 1) {
            return n;
        } else {
            return n * factorial(n - 1);
        }
    }

    console.log(factorial(4))


}

function task_3() {
    function fib(n) {
        /* ваш код */
        // return n <= 1 ? n : fib(n - 1) + fib(n - 2); //через рекурсию медленно
        let a = 1;
        let b = 1;
        for (let i = 3; i <= n; i++) {
            let c = a + b;
            a = b;
            b = c;
        }
        return b;

    }

    alert(fib(3)); // 2
    alert(fib(7)); // 13
    alert(fib(77)); // 5527939700884757


}