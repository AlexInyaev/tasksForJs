// **************************************** Задача 1 ********************************************************

function camelize(str) {
    let arr = str.split(''); //разбиваю строку в массив по буквам
    let out = '';

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == '-') {
            out += arr[i + 1].toUpperCase();
            continue;
        }

        out += arr[i];
    }
    console.log(out)
}

camelize("background-color")
camelize("list-style-image");
camelize("-webkit-transition")