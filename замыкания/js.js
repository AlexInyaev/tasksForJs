{
    function inBetween(a, b) {
        return function (x) {
            if (x >= a && x <= b) return true;
        }
    }

    function inArray(arr) {
        return function (arrX) {
            return arr.includes(arrX);
        }
    }

    /* .. ваш код для inBetween и inArray */
    let arr = [1, 2, 3, 4, 5, 6, 7];

    // alert(arr.filter(inBetween(3, 6))); // 3,4,5,6

    // alert(arr.filter(inArray([1, 2, 10]))); // 1,2
}
{
    let users = [
        { name: "John", age: 20, surname: "Johnson" },
        { name: "Pete", age: 18, surname: "Peterson" },
        { name: "Ann", age: 19, surname: "Hathaway" }
    ];
    //   Обычный способ был бы таким:

    // по имени (Ann, John, Pete)
    users.sort((a, b) => a.name > b.name ? 1 : -1);

    // по возрасту (Pete, Ann, John)
    users.sort((a, b) => a.age > b.age ? 1 : -1);
    //   Можем ли мы сделать его короче, скажем, вот таким?

    users.sort(byField('name'));
    users.sort(byField('age'));

    function byField(field) {
        return (a, b) => a[field] > b[field] ? 1 : -1;
    }



    // console.log(users.sort(byField('name')));
    // console.log(users.sort(byField('age')));


}
{
    function makeArmy() {
        let shooters = [];

        let i = 0;
        while (i < 10) {
            let x = i;
            let shooter = function () { // функция shooter
                console.log(x); // должна выводить порядковый номер
            };
            shooters.push(shooter);
            i++;
        }

        return shooters;
    }

    let army = makeArmy();

    army[0](); // у 0-го стрелка будет номер 10
    army[5](); // и у 5-го стрелка тоже будет номер 10
    // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
    globalThis.alert(3)
}