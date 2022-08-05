// function welcome(name){
//     console.log('Hello ', name);
// }
// // welcome('Anonto Jolil');
// // welcome('Hero Alam');

// function sum(num1, num2){
//     const result = num1 + num2;
    
//     return result;
// }
//  var add = sum(3, 6) + 2;
// console.log(add);
// check even or odd with no return!
function oddEven(num){
    if(num % 2 === 0){
        console.log('This number is even!')
    }
    else{
        console.log('This number is odd!')
    }
}
// oddEven(55);
// oddEven(60);
//check even or odd with return
function evenOdd(num2){
    if(num2 % 2 ===0){
        return true;
    }
    else{
        return false;
    }
}
// console.log(evenOdd(345));
// console.log(evenOdd(252));
function findLg(num3, num4, num5){
    if(num3 > num4 && num3 > num5){
        console.log('The largest number is: Number 1',num3);
        //5, 4, 2
    }
    else if(num4 > num3 && num4 > num5){
        console.log('The largest number is: Number 2',num4);
        //3, 4, 1
    }
    else{
        console.log('The largest number is: Number 3',num5);
    }
}
// findLg(2, 3, 1);
// findLg(2, 3, 5);
function findLgNum(num3, num4, num5){
    if(num3 > num4 && num3 > num5){
        return('The largest number is: Number 1',num3);
        //5, 4, 2
    }
    else if(num4 > num3 && num4 > num5){
        return('The largest number is: Number 2',num4);
        //3, 4, 1
    }
    else{
        return('The largest number is: Number 3',num5);
    }
}
console.log(findLgNum(10, 34, 56));