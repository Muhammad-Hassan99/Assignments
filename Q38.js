"use strict";
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_cities(cities, countries = "Pakistan") {
    console.log(`${cities} is in ${countries}`);
}
describe_cities("Hyderabad");
describe_cities("karachi");
describe_cities("Delhi", "India");
