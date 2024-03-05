"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let b = "Hassan";
let uppercase = b.toLocaleUpperCase();
console.log(uppercase);
let c = "Hassan";
let lowercase = c.toLocaleLowerCase();
console.log(lowercase);
let d = "hassan shahid";
console.log(d.charAt(0).toLocaleUpperCase() + d.slice(1).toLocaleLowerCase());
