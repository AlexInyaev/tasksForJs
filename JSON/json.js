task_1()

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