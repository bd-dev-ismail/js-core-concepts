//Miels to Kilometer Conveter:
function mielsToKm(miels){
    const km = miels * 1.60934;
    return km;
}
const myMiles = 5;
const myKm = mielsToKm(myMiles);
console.log('My kellometer is: ', myKm);