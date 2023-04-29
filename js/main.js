/**
 * Variable, functions, loops
 * 
 * --Strings, ints, boolean, floats, array, objects
 * 
 * let keyword lets you reasign a variable. But only once
 * const - does not let you reasign a variable
 * Var we will just stay away from. because it doesnt have a great scope
 * 
 */

// Let - can reasign varibale after initial declareating

let transformer = 'Optimus';
console.log(transformer)
transformer = 'Rat Trap';

console.log(transformer)

// arming a variable
let page;

page = 'blank';
console.log(page)

page = 'full';
console.log(page)

page = 'drawing';
console.log(page)

// charactor access
 'dog'.charAt(1); // gives value 'a'
let dog = 'Timber'
console.log(dog.charAt(0))
dog.charAt(3)
console.log(dog)

let dog_letter = dog.charAt(3)
console.log(dog_letter)

// another way to treat a string as an array-like object

let cat = 'pussy';
console.log(cat[1])

let cat_letter = cat[4]
console.log(cat_letter)

// I like the second way better bacause its simplier and similar to python

// comparing string

const a = 'a';
const b = 'b';
if (a < b) {
    // true
    console.log(`${a} is less than ${b}`);
} else if (a > b) {
    console.log(`${a} is greater than ${b}`);

} else {
    console.log(`${a} and ${b} are equal`);
}

function areEqualCase(str1, str2) {
    return str1.toUpperCase() === str2.toUpperCase();
}
console.log(areEqualCase('forth', 'FoRth'))

// === vs ==
// == will check to see if two operands are equal
// 1 == 1 : true
// 'hello' == 'hello' : true
// '1' == 1 : true
// 0 == false : true

// while the === is a lot more strict
// 0 === false : false
// '1' === 1 : false

// String() is a method that changes the type

let three_num = 324;
console.log(three_num)

let str_num = String(three_num)
console.log(typeof str_num)
// has to be upper case


// .length
console.log(cat.length)

let number = 15;
console.log(number)

let some_float = 3.14;
console.log(some_float)

let some_arr = [1,2,3,4]
console.log(some_arr)
console.log(some_arr[1])

var someObject = {'test': 'please test me'}
console.log(someObject)

console.log(typeof someObject)

console.log(typeof some_arr)

function firstFunc(num1, num2) {
    return num1 **2 + num2
}
console.log(firstFunc(3,4))

// for loop(below)

for (let i =0; i<some_arr.length; i++) {
    console.log(i)
}

let new_arr = [1,2,3,4,5,6]
for (let i = 0; i < new_arr.length; i++) {
    console.log(i)
} if (3 in new_arr) {
    console.log(`wow 3 is in this arr`)
}


let findCell = Math.ceil(15.9)
console.log(findCell)


// FUNCTIONS
function addNums() {
    return 4+5
}
console.log(addNums())

function addNums2() {
    let num = 4;
    let num2 = 5;
}

let addNum = function(num,num2) {
    console.log('\nThis string is inside the function')
    return num + num2
}

console.log(addNum(3,4))

// Arrow function
// USING AN ARROW FUNCTION without parenthisies can only be done with 1 paramiter

let cubed = num => {
    console.log('\nInside the cubed Arrow function')
    return num **3
}
console.log(cubed(5))

const addNums3 = (num1,num2) => {
    console.log('\ninside the second Arrow function')
    return num1+ num2
}

console.log(addNums3(6,18))

// Self- invoking function
// Javascript Closure

console.log((function(name) {
    let hello = 'hello world' + name;
    return hello
})(', Lando'))


// FUNCTION WITH CONTROL FLOW
function age(age) {
    if (age<21) {
        return "youngin"
    } else if(age < 65){
        return 'adult'
    }else {
        return 'oldin'
    }
}
console.log(age(16))


// fun more complicated function
let givenArr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2==0){
            arr[i] = 'Is even'
        }
    }
    return arr
}

console.log(replaceEvens(givenArr))

let crazy = some_float + '4';
console.log(crazy)
console.log(typeof crazy)

let insane = some_float + parseFloat('4').toFixed(2)
console.log(insane, 'hello')

function countByOne() {
    // for loop
    // (index counter condition to break the for loop, incrementation)
    for (let i = 0; i < 20; i++){
        console.log(i)
    }
}
console.log(countByOne())

let names_arr = ['Ethan','Natty','micah','Jacob','Winie']

function printNames(arr) {
    for (let i = 0; i< arr.length; i++){
        console.log(arr[i])
    }
}

let groupOfNames = ['Gary','Ash','Misty','Brock','Officer Jenny']
console.log(groupOfNames[0])

let gary, ash, misty;
[gary, ash, misty] = groupOfNames
console.log(ash)

// gary = groupOfNames[0]

console.log(gary,ash,misty)

// Always grabs the values from the zero index first

// .slice(start)
// .slice(start, end)

// for each loop
function showEachName(arr) {
    arr.forEach(
        name => console.log(name)
    )
}
console.log(showEachName(groupOfNames))

// Switchcase 
let day = new Date().getDay();
console.log(day)

let literalDay = new Date().toString();
console.log(literalDay)

switch (day) {
    case 0:
        console.log('Sleeping In')
        break;
    
    case 1:
        console.log('its Monday')
        break;

    case 2:
        console.log('Tuiday')
        break;
    case 3:
        console.log('wensday')
        break;
    case 4:
        console.log('thursday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Sat')
        break;
    default:
        console.log('silly goose')
        break;
}

// Object.keys(object)
// Object.values(object)

let myObject = {
    firstKey: '1',
    secondKey: '2',
    keyArr: ['Ethan','Ashton','Isabell'],
    namesFavFood: {
        izzy: 'ice cream',
        ethan: 'Pizza',
        ashton: 'Pasta'
    }
}

console.log(Object.keys(myObject))
console.log(Object.values(myObject))
console.log(myObject.keyArr[2])

console.log(myObject.namesFavFood.ethan)

// Object looping
for(let i=0; i< Object.keys(myObject).length; i++) {
    console.log(Object.keys(myObject)[i])
    
}
