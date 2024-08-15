// Create a function unique_elements(arr) that should return an array with unique items of arr.
// For instance:
// function unique_elements(arr) {
//   /* your code */
// }

// let strings = ["React Js", "JavaScript", "React Js", "JavaScript",
//   "JavaScript", "JavaScript", "React Js", "React Js"
// ];

// alert( unique(strings) ); // React Js, JavaScript
// cap-msqm-xuk


console.log("unique elements in an array")

function uniqueElements(arr) {
    let uniqueSet = new Set(arr)

    return Array.from(uniqueSet)
}

let strings = ["React Js", "JavaScript", "React Js", "JavaScript","JavaScript", "JavaScript", "React Js", "React Js"];

console.log(uniqueElements(strings))