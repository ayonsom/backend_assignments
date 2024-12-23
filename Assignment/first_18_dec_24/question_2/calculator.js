const {generateRandomDecimalNumber}= require('./random_num.js');

function add(a,b) {
    console.log(`The sum of ${a} and ${b} is :`);    
    return a+b    
}
function sub(a,b) {
    console.log(`The difference of ${a} and ${b} is :`);    
    return a-b; 
}
function mult(a,b) {
    console.log(`The product of ${a} and ${b} is :`);    
    return a*b;
}
function div(a,b) {
    if(b === 0) {
        console.log(`The division of ${a} by ${b} is :`);
    }    
    return b!==0? a/b : "Division by 0 is not allowed";
}
function sin(a) {
    return Math.sin(a);
}
function cos(a) {
    return Math.cos(a);
}
function cosec (a) {
    return 1/Math.sin(a);    
}
function cot(a) {
    return 1/Math.tan(a);
}
function sec(a) {
    return 1/Math.cos(a);
}



const args = process.argv.slice(2);
const command = args[0];
const num1 = parseFloat(args[1]);
const num2 = parseFloat(args[2]);

// console.log("\nYour Input Data:- ","\n",'command:-',command,"\n",'num1 :-',num1,"\n",'num2 :- ',num2,"\n");
console.log(`\nYour Input Data:-\n--------------------- \n| command:- ${command} \n| num1 :- ${num1} \n| num2 :- ${num2} \n---------------------`);
console.log("\nYour Output Data:- \n---------------------");

switch (command) {
    case 'add':
        console.log('| ', add(num1,num2));        
        break;
    case 'sub':
        console.log('| ',sub(num1,num2));        
        break;
    case 'mult':
        console.log('| ',mult(num1,num2));        
        break;
    case 'div':
        console.log('| ',div(num1,num2));        
        break;
    case 'sin':
        console.log('| ',sin(num1));        
        break;
    case 'cos':
        console.log('| ',cos(num1));        
        break;
    case 'cosec':
        console.log('| ',cosec(num1));        
        break;
    case 'cot':
        console.log('| ',cot(num1));        
        break;
    case 'sec':
        console.log('| ',sec(num1));        
        break;
    case 'random':
        const length = parseInt(process.argv[3]);
        console.log('| ',generateRandomDecimalNumber(length));
        break;
    
    default:
        console.error('Invalid command. Please provide a valid command as one of these below:-');
        console.warn(`node calculator.js options 10 20  (options:- add/sub/mult/div)`);
        console.warn(`node calculator.js options 30  (options:- sin/cos/cosec/cot/sec)`);
        console.warn(`node calculator.js random 10  (to generate random number of length 10)`);
        break;
}
console.log('---------------------');
console.warn("\n_______________________________End of the program______________________________________\n");


