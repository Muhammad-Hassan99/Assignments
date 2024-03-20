"use strict";
function CARS(manufacture, model, key) {
    return Object.assign({ manufacture,
        model }, key);
}
let mycar = CARS("Toyota", "Corolla", { colors: "Silver", year: "2023" });
console.log(mycar);
