function isValidSubsequence(array, sequence) {
    // Write your code here.
    var arrayLength = array.length - 1;
    var sequenceLength = sequence.length - 1;
    var result = [];
    while (arrayLength > sequenceLength) {
        if (array[arrayLength] === sequence[sequenceLength]) {
            result.push(sequence[sequenceLength]);
            arrayLength--;
            sequenceLength = sequence.length - sequenceLength;
        }
        else if (sequenceLength >= 0) {
            sequenceLength--;
        }
    }
    if (sequenceLength === result.length - 1) {
        return true;
    }
    return false;
}
// Call the function
var array = [5, 1, 22, 25, 6, -1, 8, 10];
var sequence = [1, 6, -1, 10];
console.log(isValidSubsequence(array, sequence));
