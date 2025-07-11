// primitive data types
const number = 42.2; // Number        
const string = "Hello, World!"; // String
const boolean = true; // Boolean    
const nullValue = null; // Null
const undefinedValue = undefined; // Undefined
const symbol = Symbol("unique"); // Symbol
const bigint = BigInt(12345678901234567890); // BigInt
const newBigInt =  12345678901234567890n; // BigInt (alternative syntax)
// Reference object data types
const object = { key: "value" }; // Object  
const array = [1, 2, 3]; // Array (a special type of object)
const date = new Date(); // Date (a special type of object)     

// function data type
const func = function() { return "I am a function"; }; // Function (also a
// special type of object)

/**
 * JavaScript has several primitive data types:
 * - Number: Represents numeric values (e.g., 42, 3.14).    
 * - String: Represents sequences of characters (e.g., "Hello, World!").
 * - Boolean: Represents true or false values.
 * - Null: Represents the intentional absence of any object value.
 * - Undefined: Represents a variable that has been declared but not assigned a value.  
 * - Symbol: Represents a unique and immutable value, often used as object property keys.
 * - BigInt: Represents integers with arbitrary precision, useful for very large numbers.
 * * JavaScript also has reference data types:
 * - Object: A collection of key-value pairs, where keys are strings (or Symbols)   
 * and values can be any data type.
 * - Array: A special type of object used for storing ordered collections of values.
 *  * - Date: A built-in object for handling dates and times.
 * - Function: A special type of object that can be called to execute code. 
 * * Note: Functions in JavaScript are first-class citizens, meaning they can be treated like any other value.  
 * * JavaScript uses dynamic typing, meaning variables can hold values of any type and can change types at runtime.
// Example of dynamic typing:       
let dynamicVar = 42; // Initially a number
dynamicVar = "Now I'm a string"; // Now it's a string

 */

