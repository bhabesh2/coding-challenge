
// ye ak tarika hua 

// function swapValues(x, y) {
//   x = x ^ y;
//   y = x ^ y;
//   x = x ^ y;
//   return [x, y];
// }

// // Example usage:
// let a = 5;
// let b = 10;
// console.log(swapValues(a, b)); // Output: [10, 5]

// 2nd method

function swapValues(x, y) {
    x = x + y;
    y = x - y;
    x = x - y;
    return [x, y];
  }

  // Example usage:
let a = 5;
let b = 10;
console.log(swapValues(a, b)); // Output: [10, 5]
  
// 3rd method

// function swapValues(x, y) {
//     [x, y] = [y, x];
//     return [x, y];
//   }
  
//   // Example usage:
//   let a = 5;
//   let b = 10;
//   console.log(swapValues(a, b)); // Output: [10, 5]
  