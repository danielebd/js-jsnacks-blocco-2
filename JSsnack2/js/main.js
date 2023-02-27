'use sctrict';

/* Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo */

const number = Number(prompt('inserisci un numero'));

if(number % 2 === 0) {
    console.log('pari');
}
else {
    console.log('dispari');
}