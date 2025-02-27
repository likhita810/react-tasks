// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
// That is: removes all dashes, each word after dash becomes uppercased.
// Examples:
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Hint: use split to split the string into an array, transform it and join back.

console.log('camelize string');
function camelize(str) {
    return str.split('-')
    .map((word,index) => index == 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

console.log(camelize("background-color"))
console.log(camelize("my-short-string"))
console.log(camelize("list-style-image"))
console.log(camelize("-webkit-transition"))
console.log('-----------------------------------------------')