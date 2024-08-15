// Create a function truncate(str, maxlength) that checks the length of the str and, if it
// exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its
// length equal to maxlength.
// The result of the function should be the truncated (if needed) string.
// For instance:
// truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"
// truncate("Hi everyone!", 20) = "Hi everyone!"
console.log("truncate a string to max length");
function truncate(str, maxlength) {
    if (str.length > maxlength) {
         let truncatedLen = maxlength - 1;
        console.log(str.slice(0,truncatedLen) + '...');
    } else {
        console.log(str);
    }
}

truncate("What I'd like to tell on this topic is:", 20);
truncate("Hi everyone!", 20)

console.log('-------------------------------------------------')