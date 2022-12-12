//coment

let name = 'Rebeca';
let age = 19;
let person = {
    name: 'Rebeca',
    age: 19
};

//Dot Notation
person.name = 'Baruch';

//Bracket Notation
let selection = 'name';
person[selection] = 'Gusmão';

let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';

//Performing a task
function greet(nameHello,lastName){//parameter
    console.log('Hello ' + nameHello + ' ' + lastName);
}

//Calculating a value
function square(number) {
    return number * number;
}

greet(name, 'Baruch');//argument
let number = square(2)
console.log(number);

//Logical operators
let x = 10;
let y = 3;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);

//Increment (++)
// console.log(x++);
// console.log(x);

// //Decrement (--)
// console.log(--x);


//Assignment operators
x = x + 5;
x += 5;

x = x * 3;
x *= 3;

//Comparison operators
//Relational
 x = 1;

 console.log(x > 0);//returns true
 console.log(x >= 0);//returns true
 console.log(x < 1);//returns false
 console.log(x <= 1);//returns true

 //Equality
 console.log(x === 1);//true
 console.log(x !== 1);//false

//If a cusomer has more than 100 points
//they are a 'gold' customer, otherwise,
//they are a 'silver customer.

let points = 110;
let type = points > 100 ? 'gold' : 'silver';

false || 'Rebeca';
false || 1 || 2;

//Falsy (false)
//undefined
//null
//0
//false
//''
//NaN

//If and Else
if (condition) {
    statement
}
else if (anotherCondition){
    statement
}

//Switch...case
 let role;

 switch (role) {
    case 'guest':
        console.log('Guest User');
        break;
    
    case 'moderator':
        console.log('Moderator User');
        break;
    
    default: 
        console.log('Unkown User');
 }

 //Loop Strucutures
 //for
 for (let i = 0; i < 5; i++){
    console.log('Hello World');
 }

 //while
 let i = 0;
 while (i <= 5) {
    if (i % 2 !== 0) console.log(i);
    i++;
 }

 //do-while
 do {
    if (i % 2 !== 0) console.log(i);
    i++;
 } while (i <= 5); 

 //for-in
 const person ={
    name:'Rebeca',
    age: 19
 }

 for (let key in person)
    console.log(key);

//for-of
const colors = ['red', 'green', 'blue'];

for (let color of colors)
    console.log(color);