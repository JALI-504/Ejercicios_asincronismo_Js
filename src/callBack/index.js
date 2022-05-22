// callBack
function sum (num1, num2){
    return num1 + num2;
}
function calc (num1, num2, callBack){
    return callBack(num1, num2);
}
console.log(calc(2,2, sum));

// ejercicio 2

function date(callBack){
    console.log(new Date);
    setTimeout(function(){
        let date = new Date;
        callBack(date);
    }, 3000)
}
function printDate(dateNow){
    console.log(dateNow);
}
date(printDate);