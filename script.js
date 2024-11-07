// Kalkulator Function

const b1 = document.querySelector('#b1');
const display = document.querySelector('#display');

b1.addEventListener('click' , function () {
    if (display.innerText == 0) {
        display.innerText = '1';
     } else {
 display.innerText = display.innerText + '1';
    

    }
} )
