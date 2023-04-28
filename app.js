
let oneEuroIs = {
    "JPY": 127.9, 
    "USD": 1.2, 
    "GBP": 0.8, 
}

const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs["USD"];
}

const fromDollarToYen = (dollar) => {
    return dollar * oneEuroIs["JPY"] / oneEuroIs["USD"];
}


const fromYenToPounds = (yen) => {
    return yen * oneEuroIs["GBP"] / oneEuroIs["JPY"];
}


console.log(fromEuroToDollar(1))
console.log(fromDollarToYen(1))
console.log(fromYenToPounds(1))

module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPounds};

