
// task_1();
// task_2()
// task_3();
// task_4();
// task_5();
task_6();

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

function task_4() {
    // Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.
    // Параметры:
    // year – год из четырёх цифр, например, 2012.
    // month – месяц от 0 до 11.
    // К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

    function getLastDayOfMonth(year, month) {
        let date = new Date(year, month);
        let dateCount = new Date(year, month);
        let i = 1;

        while (date.getMonth() == dateCount.getMonth()) { //проверяем чтобы месяцы выли одинаковые как только месяц перескочит то пора выводить i-2

            dateCount.setDate(i);
            i++;
        }
        return i - 2;
    }
    console.log(getLastDayOfMonth(2012, 1, 30));

    //решение из учебника  более простое в дальнейшем лучше использовать этот код 

    // Создадим дату из следующего месяца, но в день передадим 0:

    // function getLastDayOfMonth(year, month) {
    //     let date = new Date(year, month + 1, 0);
    //     return date.getDate();
    // }

    // alert(getLastDayOfMonth(2012, 0)); // 31
    // alert(getLastDayOfMonth(2012, 1)); // 29
    // alert(getLastDayOfMonth(2013, 1)); // 28


    // Обычно даты начинаются с 1,
    //         но технически возможно передать любое число,
    //             и дата сама себя поправит.Так что если передать 0,
    //                 то это значение будет соответствовать «один день перед первым числом месяца»,
    //    другими словами: «последнее число прошлого месяца».
}

function task_5() {
    // Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
    // Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

    function getSecondsToday() {
        let startTime = new Date();

        return Math.trunc((Date.now() - startTime.setHours(0, 0, 0)) / 1000);
    }
    console.log(getSecondsToday())

    //  решение из учебника

    // function getSecondsToday() {
    //     let now = new Date();

    //     // создаём объект с текущими днём/месяцем/годом
    //     let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    //     let diff = now - today; // разница в миллисекундах
    //     return Math.round(diff / 1000); // получаем секунды
    //   }

    //   alert( getSecondsToday() );



}
function task_6() {
    // Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
    // Например, если сейчас 23:00, то:
    // getSecondsToTomorrow() == 3600
    // P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

    function getSecondsToTomorrow() {
        let now = new Date();
        return Math.floor((new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1) - now) / 1000);
    }

    console.log(getSecondsToTomorrow())
}