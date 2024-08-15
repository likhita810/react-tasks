// We have a cost in the form "$120". That is: the dollar sign goes first, and then the
// number.
// Create a function extractCurrencyValue(str) that would extract the numeric value from such
// string and return the indian currencyvalue.

// "INR4000"

console.log('replacing currency symbol');
function extractCurrencyValue(str) {
    let numValue = str.replace('$', 'INR')
    console.log(numValue);
}

extractCurrencyValue("$120");


console.log('converting $ to inr currency');
function currencyExchange(str) {
    let numVal = str.replace('$','');
    let inr = numVal * 84;
    console.log('INR'+inr);
}
currencyExchange('$120');
currencyExchange('$4000');

console.log('-------------------------------------------------');