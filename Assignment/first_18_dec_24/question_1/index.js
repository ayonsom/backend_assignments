const sum = require("./sum");
const {multiplication, division} = require("./multiplication");

// let sumA = 3;
// let sumB = 5;
// let sumResult = sum(sumA, sumB);
// console.log(sumResult);

// let mulA = 4;
// let mulB = 6;
// let mulResult = multiply(mulA, mulB);
// console.log(mulResult);

if(process.argv[2] === 'sum'){
    console.log(sum(Number(process.argv[3]),Number(process.argv[4])));    
}
else if(process.argv[2] === 'mul'){
    console.log(multiplication(Number(process.argv[3]),Number(process.argv[4]))); 
}
else if(process.argv[2] === 'div'){
    console.log(division(Number(process.argv[3]),Number(process.argv[4]))); 
}

// run command in terminal :  node index.js sum 5 10  // OP- Sum is : 15 !
// run command in terminal :  node index.js mul 5 10  // OP- The product is : 50 !