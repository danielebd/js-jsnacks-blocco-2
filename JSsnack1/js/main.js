'use strict';
let sum = 0;

for(let i = 1; i < 6; i++){
    const number = Number(prompt('inserisci numero ' + i));
    console.log(number);
    if(!isNaN(number)){
        sum += number
    }
}
alert('somma1=  ' + sum)


let sum2 = 0;
let i = 1
while(i < 6){
    const number = Number(prompt('inserisci numero ' + i));
    console.log(number);
    if(!isNaN(number)){
        sum2 += number
    }
    i++
}
alert('somma2= ' + sum2)