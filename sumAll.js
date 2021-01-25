function sumAll(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        let element = num[i];
        sum = sum + element;
    }
    return sum;
}
let friendAge = [27,28,79,44,39,25];
let  numbers =[22,15,27,31,35,40,55];
let  todayEarn =[59,201,350,320,550,410,530];
var result = sumAll(friendAge);
var numberSum = sumAll(numbers);
var totalEarnToday = sumAll(todayEarn);
console.log('total ages: ', result);
console.log('sum of numbers:',numberSum);
console.log('toatl earn today',totalEarnToday);
