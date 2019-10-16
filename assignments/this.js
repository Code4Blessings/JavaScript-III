/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - Also known as global binding which is pretty much writing as the
function with a console.log(this).

* 2. Implicit Binding -The value of "this" is defined when a function is called by a proceeding dot.

* 3. New Binding - Applies when a constructor function is used.

* 4. Explicit Binding - The value of "this" is defined when the methods, .call, .apply, or.bind is called.

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function whatsUp(name) {

    return "What's up " + name;
}
console.log(this);

// Principle 2

// code example for Implicit Binding
const parent = {
    name: "Linda",
    age: 65
}
console.log(parent.name);



// Principle 3

// code example for New Binding
let child = {
    name: 'Noah',
    age: 7,
    speak: function () {
        return `Hello my name is ${this.name} and I am ${this.age} years old.`;
    }     
}
console.log(child.speak());

// Principle 4

// code example for Explicit Binding
function animal() {
    console.log(`${this.name} says ${this.speak}`);
}

let myCat = {
    name: 'Ebony',
    speak: 'meow'
}

let myDog = {
    name: 'Lucky',
    speak: 'woof'
}

console.log(animal.call(myCat)); 
console.log(animal.call(myDog));