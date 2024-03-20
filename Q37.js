"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt1(size = "Large", message = "I love Typescript") {
    console.log(`I am making ${size} T-shirts with the message "${message}"`);
}
make_shirt1("Large", "I love Typescript");
make_shirt1("Medium", "I love Typescript");
make_shirt1("Small", "I love Typescript and pyhton");
