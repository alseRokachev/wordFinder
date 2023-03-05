let input = document.getElementById('input');
let btn = document.getElementById('btn');
let textArea = document.getElementById('text');
let answer = document.getElementById('answer');
let s_counter = document.getElementById('s_counter');
let clearBtn = document.getElementById('clear');


btn.addEventListener('click', () => {

    let inputValue = document.getElementsByTagName("input")[0].value;
    let str = inputValue.replaceAll(" ", '');
    str = str.toLowerCase();

    textValue = document.getElementsByTagName('textarea')[0].value;
    let txt = textValue.replaceAll(" ", "");
    txt = txt.toLowerCase();

    let length = txt.length
    let counter = 0;
    let temp;
    let i;

    if (txt.length != 0 && inputValue.length != 0) {
        for (i = 0; i < length; i++) {

            temp = txt.slice(i, i + str.length)

            if (str === temp) {
                counter++;
                bgArr = [i];
            }
        }
        answer.innerHTML = '"' + inputValue + '"' + ' встретилось ' + counter + ' раз';
    }


})


textArea.addEventListener('input', () => {
    textValue = document.getElementsByTagName('textarea')[0].value;
    s_counter.textContent = textValue.length + ' символа'
})

clearBtn.addEventListener('click', () => {
    textArea.value = '';
    input.value = '';
    answer.textContent = '';
    s_counter.textContent = '0 символов';
})