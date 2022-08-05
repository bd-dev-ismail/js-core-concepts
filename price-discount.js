//Discount Price bad diye payment total ber kora
function discountCalc(price){
    if(price > 5000){
       const discountPrice = price * (20/100);
       const payAmount = price - discountPrice;
       console.log(payAmount, 'Payment It');
    }
    else if(price >= 3000){
        const discountPrice = price * (15/100);
       const payAmount = price - discountPrice;
       console.log(payAmount, 'Payment It');
    }
    else if(price >= 1000){
        const discountPrice = price * (10/100);
       const payAmount = price - discountPrice;
       console.log(payAmount, 'Payment It');
    }
    else{
        console.log('Cant get this Offer!')
    }
}
discountCalc(1000);