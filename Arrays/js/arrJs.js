// **************************************** Задача 1 ********************************************************


function camelizeMyVersion() {
    let str = document.querySelector('#taskArr1').value; //получаю строку из поля
    let arr = str.split(''); //разбиваю строку в массив по буквам
    let out = '';

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == '-') { //если элемент массива дефис 
            out += arr[i + 1].toUpperCase(); //то следующий элемент должен быть заглавной буквой 
            i++;
            continue;
        }

        out += arr[i]; //собираем все элементы в строку
    }
    document.querySelector('.outArr1').textContent = out;
}

document.querySelector('.btnTaskArrMyVersion1').onclick = camelizeMyVersion;

// -------------------------------------------------- решение из learn js ---------------------------------------
function camelize(str) {
    return str
        .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
        .map(
            // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
            // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
}

// далее код позволяет используя наше поле ввода - вывода запустить функцию из учебника
document.querySelector('.btnTaskArr1').onclick = () => {
    let str = document.querySelector('#taskArr1').value;
    document.querySelector('.outArrMyVersion1').textContent = camelize(str);
};

// console.log('-webkit-transition'.split('-')) -> ['', 'webkit', 'transition']
