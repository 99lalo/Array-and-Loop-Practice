var chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
var chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
    firstArray.forEach(name => newArray.push(name));
    secondArray.forEach(name => newArray.push(name));
    return newArray
}

console.log(mergeArrays(chunk_one, chunk_two));