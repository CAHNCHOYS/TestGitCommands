"use strict";
function majorityVote(votes) {
    let frequent = 0;
    let frequentCount = 0;
    let curItem = '';
    votes.reduce((acc, item, index) => {
        if (item in acc) {
            acc[item]++;
        }
        else {
            acc[item] = 1;
        }
        if (acc[item] > frequent) {
            curItem = item;
            frequent = acc[item];
            frequentCount = acc[item];
        }
        return acc;
    }, {});
    console.log(frequent);
    console.log(curItem);
    console.log(frequentCount);
    if (frequent > votes.length / 2) {
        return curItem;
    }
}
let res = majorityVote(["A", "A", "A", "B", "C", "A"]);
console.log(res);
