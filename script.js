/*
1. Write a function called "addNumbers" that takes two numbers as arguments 
and returns their sum. 'call the function before it is declared to demonstrate 
hoisting.
*/

const sum = addNumbers(15, 20);
console.log(sum);

function addNumbers(num1, num2) {
  return num1 + num2;
}


/*
2. Write a function called "multiplyNumber)" that takes two numbers as arguments 
and returns their product. use function expressions to define the function and 
call the function before it is declared to demonstrate hoisting.
*/

// Functions Expressions are not Hoisted
const product = multiplyNumbers(5, 9);
console.log(product);
// Output : "TypeError: multiplyNumbers is not a function"

var multiplyNumbers = (a, b) => {
    return a * b;
}


/*
3. Write a function that takes two numbers as arguments and returns their sum. 
Declare a variable inside the function using the var keyword and log its value 
to the console before it is assigned a value to demonstrate variable hoisting.
*/

const sum = addNumbers(16, 24);
console.log(sum);

function addNumbers(num1, num2) {
  console.log(add);
  var add = num1 + num2;
  return add;
}


/*
4. Declare three variables, one using let, one using var, and one using const, 
all inside a block scope. Assignthem values and log their values to the console 
before and after they are declared to demonstrate variable hoisting.
*/

{
  console.log(a);  //undefined 
  var a = 15;
  console.log(a);  //a= 15
  console.log(b);  //can't access  b before initializtion
  let b = 16;
  console.log(b);
  console.log(c);   
  const c = 17;
  console.log(c);
}


/*
5. Declare a variable using let inside a block scope and attempt to log its 
value to the console before it is assigned a value to demonstrate the temporal 
dead zone.
*/

{
    // ReferenceError: Cannot access 'x' before initialization 
    // (due to temporal dead zone)
 
     let x=0;
 
     console.log(x);
 }  