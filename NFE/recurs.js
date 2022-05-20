{
    function makeCounter() {
        let count = 0;

        // ... ваш код ...
        function f() {
            return count++;
        }
        f.set = function (a) {
            count = a;
        }
        f.decrease = function () {
            count--;
        }
        return f;
    }

    let counter = makeCounter();

    // alert(counter()); // 0
    // alert(counter()); // 1

    counter.set(10); // установить новое значение счётчика

    // alert(counter()); // 10

    counter.decrease(); // уменьшить значение счётчика на 1

    // alert(counter()); // 10 (вместо 11)

}
{

    function sum(a) {
        let count = a;
        function f(x) {
            count += x;
            return f;
        }
        f.toString = function () {
            return count;
        }
        return f;
    }
    console.log(sum(1)(2) == 3);
    sum(1)(2) == 3; // 1 + 2
    sum(1)(2)(3) == 6; // 1 + 2 + 3
    sum(5)(-1)(2) == 6
    sum(6)(-1)(-2)(-3) == 0
    sum(0)(1)(2)(3)(4)(5) == 15


}