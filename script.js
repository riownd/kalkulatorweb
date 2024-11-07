// Kalkulator Function

const b1 = document.querySelector('#b1');
const calculatorgrid = document.querySelector('.calculatorgrid');

b1.addEventListener('click' , function () {
    if (calculatorgrid.innerText == 0) {
        calculatorgrid.innerText = '1';
     } else {
 calculatorgrid.innerText = calculatorgrid.innerText + '1';
    

    }
} )
