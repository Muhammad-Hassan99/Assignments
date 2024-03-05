"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let guest = ["farhan", "hassan", "Ayan"];
let nguest = guest.pop();
console.log(nguest + " Can't make diner");
guest.push("Zayan");
console.log(guest);
let newgust = ["farhan", "Zayan", "Hassan"];
let nmessage = "You are invited on a dinner";
console.log(`${newgust[0]} ${nmessage}`);
console.log(`${newgust[1]} ${nmessage}`);
console.log(`${newgust[2]} ${nmessage}`);
