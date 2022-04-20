
// task_1();

function task_1() {
    // Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут.Временная зона – местная.
    // Для вывода используйте alert.
    let date = new Date();      // 1 вариант
    date.setFullYear(2012, 01, 20);
    date.setHours(03, 12);
    alert(date);

    let d = new Date(2012, 1, 20, 3, 12);  // 2 вариант
    alert(d);

}