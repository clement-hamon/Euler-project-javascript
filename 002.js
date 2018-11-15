function sumOfEvenFib(max) {
    let sum = 0;
    let i = 0;
    let j = 1;
    while( j < max ) {
        [i, j] = [j, i + j];
        sum += i % 2 ? 0 : i;
    }
    return sum;
}

export default sumOfEvenFib;