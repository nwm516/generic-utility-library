/* Generic Identity Function
This function takes in a value of type T,
and returns the value.

For instance: identity<number>(1234) will return a number variable,
whereas identity<string>("1234") will return the string variable of 1234.
*/
function identity(value) {
    return value;
}
/* Generic Array Reversal Function
This function takes in an array of type T, returns a copy of the array with .slice(),
and reverses the order of which they are introduced.
*/
function reverseArray(array) {
    return array.slice().reverse();
}
/* Generic Object Mapper
This function takes an object with keys of type K, values of type V,
with the addition of a mapping function that converts V to type U.
This returns a new object with the same keys but now with values of type U.

The "K extends string | number | symbol" constraints define what kinds of values
K can have to prevent incorrect usage of this function.
*/
function mapObject(obj, mapFn) {
    var pair = {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            pair[key] = mapFn(obj[key]);
        }
    }
    return pair;
}
/* Generic Filtering Function
This function takes in an array of elements of type T. It is defined along with a predicate function
that takes an element of the T-type array, returning a boolean value as a result. Finally, the .filter() method
returns results based upon matching criteria for the predicate function.
*/
function filterArray(inputArray, predicate) {
    return inputArray.filter(predicate);
}
// Identity
console.log(identity(334));
console.log(identity("9876"));
console.log(identity("cupcake"));
console.log(identity(true));
console.log(identity({ key: "sample object" }));
// Reverse
var numArray = [6, 5, 4, 3, 2, 1];
var revNumArray = reverseArray(numArray);
console.log(revNumArray);
var stringArray = ["r", "a", "t", "s"];
var revStringArray = reverseArray(stringArray);
console.log(revStringArray);
// Object mapper
var mapperIn = { a: 777, b: 1234 };
var mapperOut = mapObject(mapperIn, function (x) { return x.toString(); });
console.log(mapperOut);
var nextMapperIn = { x: true, y: false };
var nextMapperOut = mapObject(nextMapperIn, function (x) { return x ? "Yes" : "No"; });
console.log(nextMapperOut);
// Filter array
var divideByFive = [4, 15, 26, 35, 50, 101];
var divisible = filterArray(divideByFive, function (x) { return x % 5 === 0; });
console.log(divisible);
var qStrings = ["conquest", "box", "purple", "quilt", "question", "telephone"];
var qInside = filterArray(qStrings, function (x) { return x.includes('q'); });
console.log(qInside);
