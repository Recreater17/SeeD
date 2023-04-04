
ES5 Global Constants
var PI = 3.14;
PI = 42; // stop me from doing this!

My answer:
const PI = 3.14;
PI = 3.14

Quiz
What is the difference between var and let?
var is variable & will be selected to run first in some Code as well as not changeable like let is.

What is the difference between var and const?
variable is selected first in some code but const is not changeable, only able to be added to

What is the difference between let and const?
let allows you to create a variable that can be changed

What is hoisting?
Hoisting is grouping code inside of {} after a variable 






What is the difference between var and let?

You can reassign and redeclare with var, but you can not redeclare using the let keyword. 
You can access a hoisted variable with var. Let creates block scope.

What is the difference between var and const?

You can reassign and redeclare with var, but you can not redeclare or reassign using the const keyword. 
You can access a hoisted variable with var. Const creates block scope.

What is the difference between let and const?

You can reassign with let, but you can not redeclare or reassign using the const keyword.

What is hoisting?

It’s the way that we explain how the JS compiler works. Variables are lifting or “hoisted” to the top of 
the scope they are declared in. When using var, you can access the variable name and it’s undefined value 
before it is used later on.

Function declarations are also hoisted and can be invoked “before” they are defined in a codebase.