
(function(){

    //Exercise 1:
    //Create a file named while.js in the js directory.



    //Exercise 2:
    //Create a while loop that uses console.log() to create the
    //output shown below.
    //2
    //4
    //8
    //16
    //32
    //64
    //128
    //256
    //512
    //1024
    //2048
    //4096
    //8192
    //16384
    //32768
    //65536



    var input = 2;
    while(input < 65536){
        console.log(input);
        input *= 2;
    }

    //
    //Do WhileLoop
    //Exercise 1:
    //An ice cream seller can't go home until she sells all of
    //her cones. First write enough code that generates a random
    //number between 50 and 100 representing the amount of cones
    //to sell before you start your loop. Inside of the loop your
    //code should generate another random number between 1 and 5,
    //simulating the amount of cones being bought by her clients.
    //Use a do-while loop to log to the console the amount of
    //cones sold to each person. The below code shows how to get
    //the random numbers for this exercise.




    var totalCones = Math.floor(Math.random() * 50) + 50;
    do {
        var randomConesSold = Math.floor(Math.random()*5 + 1);
        if (totalCones - randomConesSold >= 0){
            totalCones -= randomConesSold;
            console.log("Sold " + randomConesSold + "!  I have " + totalCones + " left!");
        } else {
            console.log("I cannot sell you " + randomConesSold + ", I only have " + totalCones + " left.");
        }
    }while(totalCones > 0);



}());