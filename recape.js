//variable
var myName = 'Md Ismail Hossen';
//Math operation + - * /

//shorthand += -= *= /= ++ --

//
// 2. Array
var friends =['habul', 'tabul', 'cipul', 'ebul'];
var indexing = friends.indexOf('habul');
var myZeroFriend = friends[0];
console.log(myZeroFriend, indexing);

//Conditinals
if(friends[0] == 'tabul'){
    console.log('Hello World');
}
else{
    console.log('Its Fake');
}
// 4. Loop 
var num = 0;
while(num <= 6){
    console.log('Counter: ', num)
    num++
}
for(i = 0; i <= 10; i++){
    console.log('Hello World', i);
}
//Function
function isMoonUp(time){
    if(time < 7);
    return;
}
// 6.Object 
let clgFriend = {
    name: 'Md ismail Hossen',
    height: 60,
    position: 'Web Developer'

}