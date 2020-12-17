// Code goes here
const matrixBuilder = (size) => {
    let matrix = [];
    let aux = [];
    for(let i = 0; i < size; i++){
        for (let j = 0; j < size; j++) {
            aux[j] = 1;
        }
        matrix[i] = aux;
    }
    return matrix;
}


// do not change anything from this line down
console.log(matrixBuilder(5))