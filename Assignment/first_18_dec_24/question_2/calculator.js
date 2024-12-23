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
    return Math.sin(a*Math.PI/180).toFixed(2);
}
function cos(a) {
    return Math.cos(a*Math.PI/180).toFixed(2);
}
function tan(a) {
    return Math.tan(a*Math.PI/180).toFixed(2);
}
function cosec (a) {
    return 1/Math.sin(a*Math.PI/180).toFixed(2);    
}
function cot(a) {
    return 1/Math.tan(a*Math.PI/180).toFixed(2);
}
function sec(a) {
    return 1/Math.cos(a*Math.PI/180).toFixed(2);
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
        console.warn('\n ', add(num1,num2));        
        break;
    case 'sub':
        console.warn('\n ',sub(num1,num2));        
        break;
    case 'mult':
        console.warn('\n ',mult(num1,num2));        
        break;
    case 'div':
        console.warn('\n ',div(num1,num2));        
        break;
    case 'sin':
        console.warn('\n ',sin(num1));        
        break;
    case 'cos':
        console.warn('\n ',cos(num1));        
        break;
    case 'tan':
        console.warn('\n ',tan(num1));
        break;
    case 'cosec':
        console.warn('\n ',cosec(num1));        
        break;
    case 'sec':
        console.warn('\n ',sec(num1));        
        break;
    case 'cot':
        console.warn('\n ',cot(num1));        
        break;
    case 'random':
        const length = parseInt(process.argv[3]);
        console.warn(` `,generateRandomDecimalNumber(length));
        break;
    
    default:
        console.error('Invalid command. Please provide a valid command as one of these below:-');
        console.warn(`node calculator.js options 10 20  (options:- add/sub/mult/div)`);
        console.warn(`node calculator.js options 30  (options:- sin/cos/tan/cosec/sec/cot)`);
        console.warn(`node calculator.js random 10  (to generate random number of length 10)`);
        break;
}
console.log('---------------------');
console.warn("_______________________________End of the program______________________________________\n");


