// ### SLIDE 53 CHALLENGES ### // 
//• To make sure what is returned is not ‘null’
const notNull = () => "test";
// • A value that is truthy
const notTruthy = () => undefined;
// • A value that is not falsy
const notFalsy = () => true;
// • Create a function that creates an object with 2 properties, test to
// makes sure that the objects properties are equal to your test
// function
const obj2Properties = () => {
    let obj = {
        prop1: "test1",
        prop2: "prop2"
    }
    return obj;
}
// • A function that will return items in an array with 6 or more
// characters
const array6Items = () => [0,1,2,3,4,5,6]
// • Can you refractor any of your code?



// ### SLIDE 54 CHALLENGES ### // 
// • Convert a number to a string
const numToString = (num) => num.toString();
// • Display the correct planet with the number order it is away from
// the sun
const planet = (num) => {
    let planetArray  = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
    return planetArray[num - 1]
}
// • Count the amount of students present in the class. With an array or boolean values, count how many students are present (true = present)
const registerCount = (param) => {
    let newParam = param.filter(a => {if(a == true)
    return a;
    });
    return newParam.length;
}
// • Square every digit and concatenate them (must return an integer)
const squareFunc = (num) => {
   return Number(num.toString().split("").map(a => a * a).join(""))
}



// ### SLIDE 55 CHALLENGES ### // 
// • Given a year return back the century it is in
const year = (param) => {
    if (param.toString().split("").length > 2) {
        return Number(param.toString().split("").slice(0,-2).join(""))
        
    } else {
        return "not a century"
    }
}
console.log(year(1705))
// • With an array of ones and zeroes, convert the equivalent binary value to an integer

module.exports = {
    notNull,
    notTruthy,
    notFalsy,
    obj2Properties,
    array6Items,
    numToString,
    planet,
    registerCount,
    squareFunc,
    year
}