

/* The Set data structure in JavaScript is designed to store only unique values, so when we create a new Set from an array, it automatically removes any duplicates and keeps only the unique elements.*/


// function removeDuplicates(arr) {
//     return new Set(arr);
//   }
  
//   // Example usage:
//   const nums = [1, 2, 3, 4, 4, 5, 5, 6, 7, 7];
//   const uniqueNums = removeDuplicates(nums);
//   console.log(uniqueNums);
//   // Output: Set(7) { 1, 2, 3, 4, 5, 6, 7 }

  /* ye wala dekho ak map object banake for of loop chalake set method ka use karke duplicates ko hata dia*/

//   function removeDuplicates(arr) {
//   const map = new Map();
//   for (const num of arr) {
//     map.set(num, true);
//   }
//   return Array.from(map.keys());
// }

// // Example usage:
// const nums = [1, 2, 3, 4, 4, 5, 5, 6, 7, 7];
// const uniqueNums = removeDuplicates(nums);
// console.log(uniqueNums);
// // Output: [1, 2, 3, 4, 5, 6, 7]

/* sabse asan tarrika */

function removeDuplicates(arr) {
    const uniqueItems = new Set(arr);
    return [...uniqueItems].join(",");// me spread ke sath join ka use kar sakta hu. spread ak set ko array me leta he and join ak array ko string me leke ata he . jabki join ak array method he so ye spread ke sath kam karta he.
  }
  
  // Example usage:
  const nums = [1, 2, 3, 4, 4, 5, 5, 6, 7, 7];
  const uniqueNums = removeDuplicates(nums);
  console.log(uniqueNums);
  // Output: [1, 2, 3, 4, 5, 6, 7]
  
