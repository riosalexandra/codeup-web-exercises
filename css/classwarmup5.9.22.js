// Write a function that accepts an array of numbers and returns the average.
//
//     Test inputs:
//     [3, 5, 7, 10, 0]
//     [0, 3, 5, 6, 21]

function getAvg(array) {
    var total = 0
    for (var i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total / array.length;
}
