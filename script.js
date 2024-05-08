"use strict";

let info =[
    {
        name:"Jaranesca Braker",
        age:21,
        height:"5'4",
        sex:"female",
        eyeColor:"brown"
    }
];


console.log(`${info[0].name} is ${info[0].age}`);

console.log(`${info[0].name} is ${info[0].age} and stands at ${info[0].height} inches tall. She is a ${info[0].sex} with ${info[0].eyeColor} colored eyes.`);

function displayInfo(name){
    return `${info[0].name} is ${info[0].age}`;
}

displayInfo()