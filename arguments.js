
function argumentExplain(num1 , num2,num3) {

    var sum = 0;
    for(var i = 0 ; i < arguments.length ; i++) {
        sum = sum + arguments[i];
    }
    return sum;
}
var result = argumentExplain(55,20,30,40,60,20,10,45);
console.log(result);