// LOOSY COMPARISONS (==)
console.log("2" == 2);              // true  → "2" (string) is converted to 2 (number)
console.log(true == 1);             // true  → true is converted to 1
console.log(false == 0);            // true  → false is converted to 0
console.log(null == undefined);     // true  → special rule: null == undefined
console.log("0" == false);          // true  → "0" becomes 0, false becomes 0
console.log(null == 0);             // false → null is NOT converted to 0
console.log(undefined == 0);        // false → undefined is NOT equal to 0

console.log("5" == 5);              // true  → string "5" is converted to number 5
console.log("" == 0);               // true  → empty string becomes 0
console.log(" " == 0);              // true  → whitespace string becomes 0
console.log("false" == false);      // false → "false" is a string, not coerced to boolean

console.log([] == false);           // true  → empty array coerced to false
console.log([0] == false);          // true  → [0] becomes 0, false becomes 0
console.log([1] == true);           // true  → [1] becomes 1

console.log([] == 0);               // true  → empty array becomes 0
console.log([0] == 0);              // true  → [0] becomes 0

console.log([] == "");              // true  → empty array becomes empty string
console.log([1] == "1");            // true  → [1] becomes "1"
console.log([1,2] == "1,2");        // true  → [1,2] becomes "1,2"


// LOOSY COMPARISONS (==)
console.log("2" == 2);              // true  → "2" (string) is converted to 2 (number)
console.log(true == 1);             // true  → true is converted to 1       
console.log(false == 0);            // true  → false is converted to 0
console.log(null == undefined);     // true  → special rule: null == undefined
console.log("0" == false);          // true  → "0" becomes 0, false becomes 0
console.log(null == 0);             // false → null is NOT converted to 0
console.log(undefined == 0);        // false → undefined is NOT equal to 0
console.log("5" == 5);              // true  → string "5" is
// converted to number 5
console.log("" == 0);               // true  → empty string becomes 0
