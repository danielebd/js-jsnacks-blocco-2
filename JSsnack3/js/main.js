'use sctrict';

/* Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati. */


const listFirstname = ['daniele', 'marco', 'davide', 'merlino', 'federico'];
const listLastname = ['a', 'b', 'c', 'd', 'e', 'f'];
const listinvited = [];

for( let i = 0; i < 3; i++) {
    const name = Math.floor(Math.random() * listFirstname.length);
    const secondName = Math.floor(Math.random() * listLastname.length);

    console.log(name);

    const newFullName = `${listFirstname[name]} ${listLastname[secondName]}`;
    listinvited.push(newFullName);
}

console.log(listinvited);