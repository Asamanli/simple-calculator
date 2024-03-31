#! /usr/bin/env node

import inquirer from "inquirer";
//{object},[era]
const answer = await inquirer.prompt([
    { message: "Enter 1st number", type: "number", name: "firstnumber" },
    { message: "Enter 2nd number", type: "number", name: "secondnumber" },
    { message:"select one of the operators to perform function", type: "list", name: "operator", choices: ["Addition","Subtraction","Multiplication","Division"],},
]);

if(answer.operator === "Addition"){
    //answer.operator means select answer having operator which is from message number 3
    console.log("your value is ")
    console.log(answer.firstnumber + answer.secondnumber);
}else if(answer.operator === "Subtraction"){
    console.log("your value is ")
    console.log(answer.firstnumber - answer.secondnumber);
}else if(answer.operator === "Multiplication"){
    console.log("your value is ")
    console.log(answer.firstnumber * answer.secondnumber);
}else if(answer.operator === "Division"){
    console.log("your value is ")
    console.log(answer.firstnumber / answer.secondnumber);
}else{
    console.log("Please select valid operator")
}

console.log ("the end");
