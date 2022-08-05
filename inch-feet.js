// const myInch = 12;
// const myFeet = myInch/ 12;
// console.log('My Feet', myFeet);
function inchToFeet(inch){
    const feet = inch /12;
    return feet;
}
const myInch = 36;
const myFeet = inchToFeet(myInch);
// console.log('My Feet: 'myFeet);
const myWifeinch = 24;
const myWifeFeet = inchToFeet(myWifeinch);
console.log('My Wife Feet: ', myWifeFeet);
console.log('My feet', myFeet);