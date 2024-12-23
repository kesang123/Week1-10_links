//exercise 1
console.log("welcome to CN5006!")
console.log("This is lab1")

//exercise
//division3

const num1=2;

const num2=3;

const sum=num1 + num2;

console.log("the sum of number is"+ sum);

//input from user 

const prompt = require ("prompt-sync")({signit:true})

const number=parseInt(prompt("enter a number"));

//checking the equality

if (number > 0 )
{
    console.log("the number is positive")
}
else if(number ==0)
{
    console.log("the number is zero")
}
else
   
{
console.log("the number is negative")
}

//addition
console.log("///////addition/////////");

const Num1=parseInt(prompt("enter first number"));

const Num2=parseInt(prompt("enter second number"));

const add = Num1+ Num2;

console.log("the addition of" + Num1 + " and the subtraction of" + Num2+"is"+add);

//subtraction
console.log("///////subtraction/////////");

const snum1=parseInt(prompt("enter first number"));

const snum2=parseInt(prompt("enter second number"));

const sub = snum2 - snum1;

console.log("the subtraction of" + snum2 + "the subtraction of" + snum1+"is"+sub);

//multiplication
console.log("///////multiplication/////////");

const snum3=parseInt(prompt("enter first number"));

const snum4=parseInt(prompt("enter second number"));

const mul = snum3 * snum4;

console.log("the multiplication of" + snum3 + "the multiplication of" + snum4+"is"+mul);


//division
console.log("///////division/////////");

const snum5=parseInt(prompt("enter first number"));

const snum6=parseInt(prompt("enter second number"));

const div = snum5/snum6;

console.log("the division of" + snum5 + "the division of" + snum6 +"is"+ div);