const bucketX = 18
const bucketY = 20

//declare a function that takes in two parameters (buckets of water)
const checkWater = (x, y) => {
    
    //compare the two values
    if (x > y) {
//if x is gtreater, set x to equal 0
        x = 0
    }
    else {
        //else, if y is greater, set y to equal 0
        y=0
    }
    //return the values to us
    return "the value of x is: " + x + " and the value of y is : " + y
}

// invoke the function and pass the two arguments 
checkWater(bucketX, bucketY)

