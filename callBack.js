//callback function

function callBack(name, age, task){

    console.log('Hello: ' + name);
    console.log('you are: '+age+'years old');
    task();
}
function earnMoney() {
    console.log('So earn money Now');
}
function varSity() {
    console.log('So go to varsity');
}
callBack('jalal', 25, earnMoney);
callBack('jubayer', 21, varSity);

