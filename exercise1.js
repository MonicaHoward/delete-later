//Complete the following problems: 

// Problem 1:
// Part 1: Write a JavaScript function that converts the current temperature from Fahrenheit to Celsius. Declare a variable for the current temperature then store the Celsius temperature into a variable. Console log the variable.

// Part 2: Write another funciton that converts the Celsius temperature back to Fahrenheit. 

//your code...

var convertToCel = function(fahTemp){
    console.log(celTemp = (fahTemp - 32) * 5 / 9);
}

//converts Fahrenheit temperature to Celsius
convertToCel(100);

var convertToFah = function(celTemp){
    console.log(farTemp = (celTemp / 5) * 9 + 32);
}

//converts Celsius temperature to Fahrenheit
convertToFah(38)


/************************************************************* */
// Problem 2:
// Write a JavaScript function to determine if someone is old enough to vote. Declare a variable for age and write a conditional statement for whether that age is old enough to vote. Console log "yes" or "no"

//your code...

var votingAge = function(age){
 if (age >= 18){
     console.log("Yes. " + age + " year olds are allowed to vote.");
 }
 else {
     console.log("No. " + age + " year olds are not allowed to vote.")
 }
}

votingAge(34);
votingAge(14);


/************************************************************* */
// Problem 3:
// Write a JavaScript function that converts a string to an array. Declare a string variable with "The five boxing wizards jump quickly." Use the split() method to turn the string into an array of strings. (Be sure you separate the string into words, not characters.) After you have finished, use the join() method to change the array back into a string.

//your code...

var str = "The five boxing wizards jump quickly."

var stringToArray = function(str){
    //converts the string to an array of strings with each word being an individual string.
    arrOfStrs = str.split(" ");
    //converts the array of strings back to a single string
    console.log(arrOfStrs);
    console.log(arrOfStrs.join(" "));
}

stringToArray(str);


/************************************************************* */
// Problem 4:
// Write a JavaScript function with a function that reverses your telephone number. Use the split() and join() methods from the previous problem as well as the toString() method to convert a number into a string and reverse() method to reverse an array in place.

//your code...

var num = 6822471110

    var reverseNumber = function(num){
    var reversed = num.toString().split("").reverse().join("");
    console.log("Problem 4 ", reversed);
}

reverseNumber(num);


/************************************************************* */
// Problem 5:
// Write a JavaScript function that creates a car object using information about your car. Include the make, model, year, and color. Write a function to get the year, color, make, and model in that order.

//your code...

var monicasCar = {
    make: "Jeep",
    model: "Cherokee",
    year: 2019,
    color: "white"
}

var carInfo = function(obj){
    console.log(obj.year);
    console.log(obj.color);
    console.log(obj.make);
    console.log(obj.model);
}

carInfo(monicasCar);

/************************************************************* */
// Problem 6:
// Write a JavaScript function with a loop that will iterate from 0 to 15. Each iteration, the for loop will check if the current number is odd or even and display the output.

// creating a variable to store iterator in case this value changes.
var x = 15;

var oddOrEven = function(x){
    for (var i = 0; i < x; i++){
        if (i % 2 == 0) {
            console.log(i + " is even!"); 
            }
                else {
                    console.log(i + " is odd!");
                }
    }
  
    
}

oddOrEven(x);

//your code...




/************************************************************* */
// Problem 7:
// Write a JavaScript function that iterates the integers from 1 to 100. For multiples of 3 print "TEK" instead of the number and for multiples of 5, print "camp." For numbers that are multiples of both 3 and 5, print "TEKcamp."

//your code...

var tekCamp = function(){
    for (var i = 01; i < 101; i++){
        if (i % 3 == 0 && i % 5 ==0 ){
            console.log(i + " TEKcamp");
        }
            else if (i % 5 == 0 ){
                console.log(i + " camp")
            }
            else if (i % 3 == 0 ) {
                console.log(i + " TEK")
            }
    }
}


tekCamp();

/************************************************************* */
// Problem 8:
const nums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
// Write a "for" loop that console.log()'s the first
// value in the nums array, and every 3rd number, i.e. 0, 3, 6,
// and 9: the zeroth, third, sixth, and ninth values.

//your code...

var logIndexes = function(arr){
    for (var i = 0; i < arr.length; i++){
        if (i % 3 === 0){
            console.log(arr[i]);
        }
    }
}

logIndexes(nums);

// Problem 9:
const foodArray = [ 'potatoes', 'tamales', 'lemon','strawberries','chocolate', 'pudding', {school : 'TEKcamp'} ];
//access the value of the last element of the array and set it to a variable called school.  print the school variable to the console.

const adjectiveArray = [ 'salty', 'spicy', 'sour', 'sweet', 'rich','creamy','amazing'];
// Using both the foodArray and the adjectiveArray, make a
// "for" loop that console.log()'s a sentence for each
// corresponding value in the arrays. Add the word "is" or "are" depending on if the food is singular or plural.  "Potatoes are salty", "Lemon is sour".

var concatThis = function(arr1, arr2){
 for (var i = 0; i < arr1.length; i++){
    for (var j = 0; j < arr1[i].length; j++) {
        for (var k = 0; k < arr2.length; k++) {
            if ( arr1[i].endsWith('s') ){
                var word = "are";
            }
            else {
                word = "is";
            }
            
        } 
        
    }
    console.log(arr1[i] + " " + word + " " + arr2[i])

 }

 
}

concatThis(foodArray, adjectiveArray);

/************************************************************* */
// Bonus Assignment: Create 4 mathematical function expressions, add,subtract,multiply,divide.  put them in an array, and create a doMath() function that randomly does one of the 4 operations whenever it is run.  the doMath() function should print out what mathetmatical function was carried out.  The doMath() function should return the computed value of any operation performed.
const operations = [];
function doMath() {};


