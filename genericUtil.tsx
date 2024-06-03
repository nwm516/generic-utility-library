/* Generic Identity Function
This function takes in a value of type T,
and returns the value.

For instance: identity<number>(1234) will return a number variable,
whereas identity<string>("1234") will return the string variable of 1234.
*/
function identity<T>(value: T): T {
    return value;
}

/* Generic Array Reversal Function
This function takes in an array of type T, returns a copy of the array with .slice(),
and reverses the order of which they are introduced.
*/
function reverseArray<T>(array: T[]): T[] {
    return array.slice().reverse();
}

/* Generic Object Mapper
This function takes an object with keys of type K, values of type V, 
with the addition of a mapping function that converts V to type U.
This returns a new object with the same keys but now with values of type U.

The "K extends string | number | symbol" constraints define what kinds of values
K can have to prevent incorrect usage of this function.
*/
function mapObject<K extends string | number | symbol, V, U>(
    obj: Record<K, V>,
    mapFn: (value: V) => U
): Record<K, U> {
    const pair: Record<K, U> = {} as Record<K, U>;
    for (const key in obj) {
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
function filterArray<T>(inputArray: T[], predicate: (element: T) => boolean): T[] {
    return inputArray.filter(predicate);
}

// Identity
console.log(identity<number>(334));
console.log(identity<string>("9876"));
console.log(identity<string>("cupcake"));
console.log(identity<boolean>(true));
console.log(identity<object>( { key: "sample object" }));

// Reverse
const numArray = [6, 5, 4, 3, 2, 1];
const revNumArray = reverseArray(numArray);
console.log(revNumArray);

const stringArray = ["r", "a", "t", "s"];
const revStringArray = reverseArray(stringArray);
console.log(revStringArray);

// Object mapper
const mapperIn = { a: 777, b: 1234};
const mapperOut = mapObject(mapperIn, x => x.toString());
console.log(mapperOut);

const nextMapperIn = { x: true, y: false};
const nextMapperOut = mapObject(nextMapperIn, x => x ? "Yes" : "No");
console.log(nextMapperOut);

// Filter array
const divideByFive = [4, 15, 26, 35, 50, 101];
const divisible = filterArray(divideByFive, x => x % 5 === 0);
console.log(divisible);

const qStrings = ["conquest", "box", "purple", "quilt", "question", "telephone"];
const qInside = filterArray(qStrings, x => x.includes('q'));
console.log(qInside);