function isLeapYear(year){
    const reminder = year % 4;
    if(reminder === 0){
        return true;
    }
    return false;// else{return false;}
}
const myYearIsLeap = isLeapYear(1985);
console.log('My Year is: ', myYearIsLeap);

const herYearIsLeap = isLeapYear(2024);
console.log('Her Year is: ', herYearIsLeap);