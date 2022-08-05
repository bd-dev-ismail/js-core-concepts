//Even odd finder 
function isEven(number){
    const reminder = number % 2;
    if(reminder === 0){
        return true;
    }
    else{
        return false;
    }
}
const myNumberIsEven = isEven(535);
const herNumberIsEven = isEven(522);
console.log(myNumberIsEven);
console.log(herNumberIsEven);