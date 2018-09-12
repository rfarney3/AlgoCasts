// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  //declaring variable 'chunked' as an empty array
  let chunked = []

  //looping through the array until it has been entirely "manipulated" or split into our subarrays
  while(array.length > 0) {
    //taking the spliced segments completely out of our original array
    //pushing these subarrays into our new "chunked" array
    chunked.push(array.splice(0, size))
  }
  //returning the new array of subarrays
  return chunked
}

module.exports = chunk;

// function chunk(array, size) {
  //declaring variable 'chunked' as an empty array
  // let chunked = []
//
//   //setting our start point for our while loop at index 0
//   let i = 0;
//   //looping through the array until we have reached the final index
//   while (i < array.length) {
//     //push the sliced subarray of length 'size' into our new 'chunked' array
//     chunked.push(array.slice(i, i + size))
//     //increment by the size as to avoid duplicates
//     i += size;
//   }
//   //return the array of subarrays
//   return chunked
// }

// function chunk(array, size) {
//   //declaring variable 'chunked' as an empty array
//   let chunked = [];
//
//   //for loop iterating through every element of our input array
//   for (let ele of array) {
//     //declaring variable 'last' as the last index of our 'chunked' array
//     const last = chunked[chunked.length-1];
//
//     //checking if last is undefined or if the last subarray is equal to the size
//     if (!last || last.length === size) {
//       //then we push the element to be a new subarray in 'chunked'
//       chunked.push([ele])
//     } else {
//       //if not, then we add the element to the 'last' subarray
//       last.push(ele)
//     }
//   }
//   //return the array of subarrays
//   return chunked
// }
