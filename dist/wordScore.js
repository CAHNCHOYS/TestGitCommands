"use strict";
function wordRating(str) {
    let asciis = [];
    let splitt = str.split(" ");
    for (let i = 0; i < splitt.length; i++) {
        asciis.push(splitt[i].split('').reduce((acc, symb) => {
            return acc + symb.charCodeAt(0);
        }, 0));
    }
    let maxIndex = asciis.indexOf(Math.max(...asciis));
    console.log(asciis);
    return splitt[maxIndex];
}
let res2 = wordRating("Nancy is very pretty.");
console.log(res2);
