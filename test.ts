function isValidSubsequence(array: number[], sequence: number[]) {
    // Write your code here.
    let arrayLength: number = array.length-1;
    let sequenceLength: number = sequence.length-1;
    let result: number[] = [];
  
    while(arrayLength>sequenceLength){
      if(array[arrayLength]===sequence[sequenceLength]){
        result.push(sequence[sequenceLength])
        arrayLength--;
        sequenceLength=sequence.length-sequenceLength;
      }else if(sequenceLength>=0){
        sequenceLength--;
      } 
    }
    if(sequenceLength===result.length-1){
      return true;
    }
    return false;
  }
  

  // Call the function
const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10];
console.log(isValidSubsequence(array, sequence));