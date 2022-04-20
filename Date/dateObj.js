
// task_1();
// task_2()
task_3()

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

    // вариант из учебника
    function getWeekDay2(date) {
        let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

        return days[date.getDay()];
    }

    let date2 = new Date(2014, 0, 3); // 3 января 2014 года
    alert(getWeekDay2(date)); // ПТ
}

function task_3() {
    // Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
    // К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
    // Функция должна надёжно работать при значении days=365 и больших значениях:

    let date = new Date(2015, 0, 2);

    alert(getDateAgo(date, 1)); // 1, (1 Jan 2015)
    alert(getDateAgo(date, 2)); // 31, (31 Dec 2014)
    alert(getDateAgo(date, 365)); // 2, (2 Jan 2014)
    // P.S. Функция не должна изменять переданный ей объект date.

    function getDateAgo(date, dayAgo) {
        return new Date(date - (dayAgo * 24 * 3600 * 1000)).getDate();
    }
}