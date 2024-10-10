// counter
let componentCounter = 0;
function moveUp(){
    componentCounter++;
}
function moveDown(){
    componentCounter--;
}
function getCounter(){
    return componentCounter;
}
moveUp();
moveUp();
moveUp();
moveUp();
moveUp(); //5
moveDown();
moveDown();
moveDown();
console.log(getCounter());

// value = 0

// value++; // ++ increment by one 
// value++;

// console.log(value) //expecting 2 

// beers = 99
// beers--
// beers--
// beers--
// console.log(beers)

// counterValue = 0
// incremementAmount = 5

// counterValue += incremementAmount
// counterValue += incremementAmount
// counterValue += incremementAmount
// counterValue +=5
// counterValue +=5