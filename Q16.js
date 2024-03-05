"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let morguest = ["farhan", "Hassan", "zayan"];
morguest.push("zain");
console.log(morguest);
morguest.unshift("Musab");
console.log(morguest);
let midguest = "Ebad";
let middleIndex = morguest.length / 2;
morguest.splice(middleIndex, 0, midguest);
console.log(morguest);
morguest.map((items) => (console.log(`Dear ${items}, You are invited on a dinner`)));
