
// task_1();
task_2()

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

function task_2() {
    // Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».


    let date = new Date(2012, 0, 3);  // 3 января 2012 года
    alert(getWeekDay(date));        // нужно вывести "ВТ"

    function getWeekDay(date) {
        let dayWeek = '';
        switch (date.getDay()) {
            case 0:
                dayWeek = 'вс';
                break;
            case 1:
                dayWeek = 'пн';
                break;
            case 2:
                dayWeek = 'вт';
                break;
            case 3:
                dayWeek = 'ср';
                break;
            case 4:
                dayWeek = 'чт';
                break;
            case 5:
                dayWeek = 'пт';
                break;
            case 6:
                dayWeek = 'сб';
                break;

        }
        return dayWeek;
    }

    function getWeekDay2(date) {
        let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

        return days[date.getDay()];
    }

    let date2 = new Date(2014, 0, 3); // 3 января 2014 года
    alert(getWeekDay2(date)); // ПТ
}