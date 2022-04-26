task_1();
task_2();

function task_1() {
    // Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

    let user = {
        name: "Василий Иванович",
        age: 35
    };

    let jsonFormat = JSON.stringify(user);
    console.log(jsonFormat);
    let objectFormat = JSON.parse(jsonFormat);
    console.log(objectFormat)
}

function task_2() {
    // Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:

    let room = {
        number: 23
    };

    let meetup = {
        title: "Совещание",
        occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
        place: room
    };

    // цикличные ссылки
    room.occupiedBy = meetup;
    meetup.self = meetup;

    alert(JSON.stringify(meetup, function replacer(key, value) {
        /* ваш код */
        console.log(key)
        return (key == 'self') ? undefined : (key == 'occupiedBy') ? meetup.occupiedBy : (key == 'place') ? room.number : value;
    }));

    /* в результате должно быть:
    {
      "title":"Совещание",
      "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
      "place":{"number":23}
    }
    */

    //Решение из учебника 


    alert(JSON.stringify(meetup, function replacer(key, value) {
        return (key != "" && value == meetup) ? undefined : value;
    }));
}