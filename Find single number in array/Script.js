function singleNumber(nums) {
   
    let numbers = nums.sort();
    let results = 0;
    for (const [index, number] of numbers.entries()){
        if (
            number !== numbers[index + 1] && numbers[index + 1] !== numbers[index + 2]
            

        ) {
            results = numbers[index +1];
            return results
         }
      }
}


//  function singleNumber(nums) {
//     let numbers = nums.sort();
//     let result = 0;
//     console.log(numbers)

//     for( var i = 0 ; i <= numbers.length ;i++ ){

//         if(numbers[i] !== numbers[i+1] && numbers[i+1] !== numbers[i+2]) {
//             result = numbers[i+1];
//             return result
//         }
//     }
    
// }

var lastNumber = singleNumber([2,2,2,2,6,6,3,3,3,4,4,4,4,7,5,5,1,1,1,1,1,1,9,9,9])
console.log(lastNumber)



