//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance
function Horse(){
  this.species = "Equine"
}
Horse.prototype.breed = function(breed) {
  console.log("I am a " +breed+ ", I am from the " +this.species + " species")
}
var Equine = new Horse()
Equine.breed("Mustang") // .. Atleast I didn't copy the car-example. And I made my own addition with the breed variable.


//2. Create an array of numbers from 1 - 10; slice the 5th number in the array
var numbers = [1,2,3,4,5,6,7,8,9,10];
console.log("Numbers is an Array, it has " +numbers.length+ " items")
var sliced = numbers.slice(4,5)
console.log(sliced+" was sliced out of numbers")
//3. Delete the last number in the array that you created above.
numbers.pop()
console.log("Last item of numbers was removed. The count is now " +numbers.length)


//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas:
var theOriginal = "Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied."

String.prototype.replaceAll = function(strReplace, strWith) {
    var esc = strReplace.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    var reg = new RegExp(esc, 'ig');
    return this.replace(reg, strWith);
    // This RegEX was blatantly stolen from StackOverflow, because I wanted something case insensetive. No regrets?
    // https://stackoverflow.com/questions/7313395/case-insensitive-replace-all
};
theEdited = theOriginal.replaceAll("strawberries", "Bananas")
                       .replaceAll("strawberry", "banana")
                       .replaceAll("ruby red berries", "yellow bendy")
                       .replaceAll("red berry", "yellow bendy")
                       .replaceAll("bushes", "trees")
                       // Ok, Chained enough. I think we all get the point. Hoping this hits somewhere close to the point...
console.log(theEdited)

//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.
var things = ["ManU", "Real Madrid", "Barcelona", "Bayern Munich"]
console.log(things)
function changeThings(){
  things.splice(0, things.length)
  things.push("BMW", "Mazda", "Mitsubishi", "Nissan")
  console.log(things)
}


//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.
var people = [{name:'Chris', age: '20', hobby: 'Fishing'},
              {name:'Emma', age: '35', hobby: 'Horses'},
              {name:'Kevin', age: '10', hobby: 'Backpacking'} ]
var person = people.filter(function(person){
   return (person.name === "Emma");
})
console.log(person)


//7. Create a simple function that logs the date.
var thisDate = new Date();
console.log("Todays date : " +thisDate);
