"use strict";
    (function (){


        //      q1. Define a function named `isAString` that takes in a
        //    value and returns true if the input is a string, or false if the
        //    input is not a string.

    function isAString(input) {
        return typeof input === 'string';
    }
        //test it out
        console.log(isAString("blue"));
        console.log(isAString(7));



        //    q2. Define a function named `isNotANumber` that takes in a value and returns true if
        //    the input is not a number, or false if the input is a number.
        //    This function should consider that numeric strings are not numbers.

    function isNotANumber(input) {
        if (typeof input !== 'number'){
            return true;
    } else
        {
            return false;
        }
    }





    // q3. Define a function named `canBeANumber` that takes in a value and returns true
    // if the input is a number or a numeric string, or false if the input is not a
    // string or if it cannot be parsed to a number.

function canBeANumber(input){
        return !isNan (parseFloat(input));
}







// q4. Define a function named `multiplyByTen` that takes in a value, multiplies it by ten,
// and returns the result. If the input is not a number and is not a numeric string, it returns false.

        function multiplyByTen(input){
         return input * 10;
        }











    }())