//node friendDetails

function friendDetails(name, age) {

    for(var i = 0 ; i < name.length + age.length ; i++) {
        let friendName = name[i];
        let friendAge = age[i];
        if(friendName != " " && friendAge >=0){
            console.log('hello',friendName , ',you are ' , friendAge ,' years old');
        }
    }
    console.log(i);

}

let friendNames = ['jalal','juba','sms','hasan','sharif'];
let friendAges = [27,21,25,31,29,30];
friendDetails(friendNames,friendAges);