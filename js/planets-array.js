(function () {
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    //first problem:

    planets.unshift("Sun");

    console.log('Adding "The Sun" to the beginning of the planets array.');
    console.log(planets);


    //second problem:
    planets.push("Pluto")

    console.log('Adding "Pluto" to the end of the planets array.');
    console.log(planets);


    //third problem:
    planets.shift();

    console.log('Removing "The Sun" from the beginning of the planets array.');
    console.log(planets);


    //fourth problem
    planets.pop();

    console.log('Removing "Pluto" from the end of the planets array.');
    console.log(planets);


    //fifth problem
    console.log(planets.indexOf('Earth'));

    console.log('Finding and logging the index of "Earth" in the planets array.');


    //sixth problem
    planets.reverse();

    console.log("Reversing the order of the planets array.");
    console.log(planets);


    //seventh
    planets.sort();


    console.log("Sorting the planets array.");
    console.log(planets);


})();





































}())