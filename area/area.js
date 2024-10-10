//area

// No need to type over and over again just call invoke (#9-#13)
// height = 10 
// width = 20
// area = height * width
// console.log(area);


// area is the identifier/name
//width and height are the received parameters
function area(width, height){
    //calculate and then send back the result to the caller 
    const resultArea = width * height; //calculate
    return resultArea //send back to the caller 
}
//10 and 20 are the pass arguments (call invoke)
console.log(area(12, 20)); 
console.log(area(24, 40));
