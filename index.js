'use strict'

let sumTo = function  (value){
   if (value===0) {
       return value
   } else
    return value + sumTo(value-1)
}

console.log(sumTo(1)) //1
console.log(sumTo(2)) // 2 + 1 = 3
console.log(sumTo(3)) //3 + 2 + 1 = 6

console.log('----------task 2------------');
console.log('---------sort method-------')

let findShort = function(expr) {
    let exprArray = expr.split(" ");
    exprArray.sort((a,b)=>a.length-b.length);
    return exprArray[0]
}
const sentance = "Lorem ipsum dolor sit amet";

console.log(findShort(sentance)); // sit
console.log(findShort("Hello world")); // Hello
console.log(findShort("Hi")) // Hi
console.log(findShort("She is David's sister")); // is


console.log('---------reduce method-------')
let findShortReduce = function(expr) {
    let resultWord = "";
    if (expr.includes(" ")===false) {
        resultWord = expr;
        return resultWord
    } else {
         resultWord = expr.split(" ").reduce(
            (shortestWord, currentWord) =>
                shortestWord.length>currentWord.length ? currentWord: shortestWord
        )
        return resultWord
    }
}
console.log(findShortReduce(sentance)); // sit
console.log(findShortReduce("Hello world")); // Hello
console.log(findShortReduce("Hi")) // Hi
console.log(findShortReduce("She is David's sister")); // is

