var myNumbers = [23,234,345,4356234,243,43,56,2];

const myFunction = (number) => {
    return number * 3;
} 
let newArray = myNumbers.map(myFunction(value));
// your code here

console.log(newArray);