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
// if (condition) {
//     statement
// }
// else if (anotherCondition){
//     statement
// }

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
 const people ={
    name:'Rebeca',
    age: 19
 }

 for (let key in people)
    console.log(key);

//for-of
const colors = ['red', 'green', 'blue'];

for (let color of colors)
    console.log(color);

//Objects
const circle = {
    radius: 1,
    location: {
        x:1,
        y: 1
    },
    isVisible: true,
    draw: function(){
        console.log('draw');
    }
}

circle.draw();//Method

//Camel Notation: oneTwoThreeFour
//Pascal Notation: OndeTwoTrheeFour


//Factory Function
function createCircle(radius, location){
    return {
        radius,
        draw(){
            console.log('draw');
        }
    }
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

//Constructor Functions
function Circle(radius){
    this.radius = radius; //reference to the object that is executing these piece of code
    this.draw = function(){
        console.log('draw');
    }
}

const circle_ = new Circle(1);

//Primitives are copied by their value
//Objects are copied by their reference

//Clonig an object
//first option
let another = {}
for(let key in circle)
another[key] = circle[key]

//second option
another = Object.assign({}, circle);

//third option
another = {...circle};

console.log(another);

//String primitive
const message = 'hi';

//String object 
const anotherMessage = new String('hi');

//Template literals
const newMessage = 
`Hi ${name}
Tahnk you for joining my mailing list.`;

//Arrays
//adding elements
let numbers = [3, 4];

//End
numbers.push(5, 6);

//Beggining
numbers.unshift(1, 2);

//Middle
numbers.splice(2, 0, 'a', 'b');

//Finding elements
numbers.indexOf('a');
numbers.lastIndexOf(1);
numbers.includes(1);

console.log(numbers);

//array with reference types
const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
]

// const course = courses.find(function(course){
//     return course.name==='a';
// });

//Arrow Funcions
const course = courses.find(course => course.name==='a');

console.log(course);

//Removing Elements

//End
numbers.pop();

//Beggining
numbers.shift();

//Middle
numbers.splice(2, 1);

console.log(numbers);

//Emptying an array
let anotherNumbers = numbers;

//Solution 1
// numbers = [];

//Solution 2
// numbers.length = 0;

//Solution 3
// numbers.splice(0, numbers.length);

//Solution 4
//looping with numbers.pop

//Combining Arrays
const first = [1, 2 , 3];
const second = [4, 5, 6];

// const combined = first.concat(second);

//The Spread Operator
const combined = [...first, 'a',...second, 'b'];

//Slicing Arrays
const slice = combined.slice(2);

// console.log(combined);
console.log(slice);

const copy = [...combined];

console.log(combined);

//Iterating an Array
//Solution 1
for(let number of numbers)
    console.log(number);

//Solution 2
numbers.forEach((number, index) => console.log(index, number));

//Joining Arrays 
const joined = numbers.join(', ');

console.log(joined);

const msg = 'This is my first message';
const parts = msg.split(' ');
console.log(parts);

const msgCombined = parts.join('-');
console.log(msgCombined);

//Sorting Arrays
numbers.sort();
console.log(numbers);

//Reversing Arrays
numbers.reverse();
console.log(numbers);

courses.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toLocaleLowerCase();

    if(nameA < nameB) return -1;
    if(nameA > nameB) return 1;
    return 0;
})
console.log(courses);

//Testing Elements from an Array
const allPositive = numbers.every(value => {
    return value >= 0;
});
console.log(allPositive);

const atLeastOnePositive = numbers.some(value => {
    return value >= 0;
});
console.log(atLeastOnePositive);

//Filtering an Array
const filtered = numbers.filter(n => n >= 0);
console.log(filtered);

//Mapping an ,Array
let items = filtered.map(n => '<li>' + n + '</li>');
const html = '<ul' + items.join() + '</ul>';

items = numbers
    .filter(n => n >= 0)
    .map(n => ({value: n}))
    .filter(obj => obj.value > 1);

console.log(html);
console.log(items); 

//Reducing an Array
// let sum = 0;
// for(let n of numbers)
//     sum += n;

// console.log(sum);

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0)