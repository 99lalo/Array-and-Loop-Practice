let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here
const mergeTwoList = (array) =>{
    let even = array.filter(number => number%2 == 0);
    let odd = array.filter(number => number%2 == 1);
    console.log("odd :" + odd);
    console.log("even :" + even);
    let newArray = [];    
    odd.forEach(name => newArray.push(name));
    even.forEach(name => newArray.push(name));
    return newArray;
}

console.log(mergeTwoList(list_of_numbers))
