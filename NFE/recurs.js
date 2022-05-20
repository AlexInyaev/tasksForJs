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

    alert(counter()); // 0
    alert(counter()); // 1

    counter.set(10); // установить новое значение счётчика

    alert(counter()); // 10

    counter.decrease(); // уменьшить значение счётчика на 1

    alert(counter()); // 10 (вместо 11)

}