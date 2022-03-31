// **************************************** Задача 1 ********************************************************


function camelize() {
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

document.querySelector('.btnTaskArr1').onclick = camelize;

