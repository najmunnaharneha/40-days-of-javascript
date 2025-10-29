console.log("Day 02");

// Variables: Variables are used to store data in JavaScript

// - 'var' : Function-scoped, can be redeclared (not recommended)
// - 'let' : Block-scoped, can be reassigned
// - 'const' : Block-scoped, "can not" be reassigned

let address = "Dhaka";
console.log(address);

address = "Usa";
console.log(address);

/*
    ** Primitive Data Types: **
    - `String` - Text values (`"Hello"`)
    - `Number` - Numeric values (`25`, `3.70`)
    - `Boolean` - True/False (`true`, `false`)
    - `Undefined` - A variable declared but not assigned (`let x;`)
    - `Null` - Represents "nothing" (`let y = null;`)
    - `BigInt` - Large numbers (`BigInt(12345678901234567890)`);
    - `Symbol` - Unique identifiers (`Symbol("id")`)

    ** Non-Primitive (Reference) Data Types: **
    - `Object` - Collection of key-value pairs
    - `Array` - Ordered list of values
    - `Function` - Code that can be executed

*/

let student = {
  name: "Mike",
  age: 22,
  isEnrolled: true,
};
console.log(student.name);
