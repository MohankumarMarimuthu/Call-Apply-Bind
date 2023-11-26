let person1 = {
    firstName: "mohankumar",
    lastName: "marimuthu",
    fullName: function(){
        console.log(this.firstName + " " + this.lastName);
    }
}
person1.fullName()

let person2 = {
    firstName: "gowthamkumar",
    lastName: "marimuthu"
}

let person3 = {
    // if we pass empty object it will throw undefined or if we use other keys also it will throw undefined
}

// function borrowing
person1.fullName.call(person2)
// which function we want to use , this in the function will point out to the argument we are passing
person1.fullName.call(person3)


// we normally write function and use call also

function greetings(){
    console.log("hello world" , this.firstName);
}

greetings.call(person1)
greetings.call(person2)

// let say our object function has parameters
let person4 = {
    firstName: "dog",
    action: function(does, dont){
        console.log( this.firstName , "will",does , dont);
    }
}
person4.action("bark" , "don\'t eat cockroach")

let person5 = {
    firstName: "cat",
}

person4.action.call(person5, "meow" , "don\'t bark")



// apply is same like call but we can pass array as an arguments 
let person6 = {
    firstName: "fish",
}
person4.action.apply(person6 , ["swim","don\'t walk"])

// difference between call and apply is call will take arguments separatively, apply will take as an arrays

console.log(Math.max(1,2,3)) // this is in built method it will take arguments separatively

console.log(Math.max.apply(0, [1,2,3])) // using apply we can alter this pass an array here 0 is dummy value


// Bind is same like call (bind means tie in english) we can bind our function to variable and we can call it later
let catAction = person4.action.bind(person5, "meow" , "don\'t bark")

console.log(catAction) // if we put console we can clearly see this is function 
catAction(); // we can call like this