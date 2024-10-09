// sample inputs
//var is oldschool but does make it a local var
//let is better
//const is better not changable 
let identifier = "value"; // = assignment like an arrow pointing left 

let foodcost = 79.25;
let tax = 6.54;
let tip = 12.00; // (let) makes this mutable
tip = tip.toFixed(2) //include two decimal places
//calculations
let totalDue = foodcost + tax + tip;

// output
// console.log("The total due is "  + totalDue);
// console.log("Tip is "  + tip);
// console.log("Food cost is " + foodcost + "and tax is");

console.log(`
    Food cost is $${foodcost} and tax is $${tax}
    Tip is $${tip}
    Total Due is $${totalDue}
`);