function getSumOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i; // index == hocce i er value 
        const element = numbers[index]; //|Finding Element 
        sum = sum + element;
        // console.log(index, element, sum);
    }
    return sum;
}
//Array odd number
function getOddNumber(number){
    const oddNumber = [];
    for(let i = 0; i < number.length; i++){
        const index = i;
        const element = number[index];
        if(element % 2 === 1){ //2 !==0;
        console.log(index, element);
        oddNumber.push(element);
        }
    }
    return oddNumber;
}
const myNumbers = [12, 35, 54, 23, 64, 32, 45, 23];
const oddNumber = getOddNumber(myNumbers);
console.log(oddNumber);
const oddNumberSum = getSumOfAnArray(oddNumber);
console.log('Odd Number Sum is: ', oddNumberSum);