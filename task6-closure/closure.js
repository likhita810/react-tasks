function updateValue() {
    let count = 500
    console.log('in outer function',count)
    return function() {
        count += 10
        console.log('inside the inner function',count)
        return count;
    };
}

const counter = updateValue()

console.log(counter());
console.log(counter());
console.log(counter());