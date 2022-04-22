

var trails = [
    {
        name: "Salado Creek Greenway",
        distanceInMiles: 20,
        isPaved: true
    },
    {
        name: "Leon Creek Greenway",
        distanceInMiles: 20.1,
        isPaved: true
    },
    {
        name: "McAllister Park: Blue Loop",
        distanceInMiles: 6.3,
        isPaved: false
    },
    {
        name: "Phil Hardberger Park: Geology Trail",
        distanceInMiles: 0.8,
        isPaved: false
    }
]




//Write a function that accepts the array of trail objects above, and returns the total distance of non-paved trails.

//break it down:
//define a function- step 1
//define parameters- step 2
//figure out a way to only look at unpaved trails
//return sum of unpaved trails

function unpavedTotalDistance(arr){
    var total = 0;

    arr.forEach(function (trail){
        if (!trail.isPaved) {
            total += trail.distanceInMiles;
    }
}}
    return total;
}

console.log(unpavedTotalDistance(trails));

