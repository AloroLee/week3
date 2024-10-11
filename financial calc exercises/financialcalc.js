// jinancial calc 

function calculateMonthlyPayment(principal, yearlyInterestRate, termInYears) {
    const monthlyInterestRate = yearlyInterestRate / 12;
    const numberOfPayments = termInYears * 12;
    const P = principal * 1000;
    const r = monthlyInterestRate / 100; // (annual rate divided by 12)
    const n = numberOfPayments; //(loan term in months)
    const M = P * ((r * ((1 + r) ** n)) / (((1 + r) ** n) - 1));
    const monthlyPayment = M;
    return monthlyPayment
}
console.log(calculateMonthlyPayment(200, 4, 30))

// function onClick(event){
//     const operator = event.target.innerText.toLowerCase()
//     const a = Number(numberA.value);
//     const b = Number(numberB.value);
//     if("divide" == operator){
//         answer.value = calc(a,b,operator).toFixed(2);
//     }else{
//         answer.value = calc(a,b,operator);

//     }
// }
// // const btnAdd = document.getElementById("btnAdd")
// btnAdd.addEventListener("click", onClick);
// btnSubtract.addEventListener("click", onClick);
// btnMultiply.addEventListener("click", onClick);
// btnDivide.addEventListener("click", onClick);
// </script>

// function calInterest(a,b,c,d) {
//     return a * b * c / d;
// }
// const d = 100
// const interest = (a * b * c)/d

// let result = 0;
// if (calInterest == operation){
//     result == calInterest(interest());
// }
// return result