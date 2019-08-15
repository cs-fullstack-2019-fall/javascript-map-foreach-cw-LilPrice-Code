// Problem 1
//
// Ask the user to enter a word. Keep asking them to enter a word until they enter the letter 'q'.

// while (0 === 0){
//     var userInput = prompt("Enter a word.");
//     if (userInput.toUpperCase() === "Q"){
//         break;
//     }
// }

//     Problem 2
// Make any string array all lower case strings. If you don't remember how to use that Google it.

function arRay(myInt){
    myInt.forEach(function (eEle) {
        eEle = eEle.toLowerCase();
         console.log(eEle);
         return eEle;
    })
}



arRay(["HI", "BYE", "GOOD DAY", "HOWDY"]);


//
// Challenge
//
// Make any string array return an array of objects with the specified class below
//
// class Student{
//     constructor(name){
//         this.name = name;
//     }
// }