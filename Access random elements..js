


function accessRandomElements(arr) {
  const uniqueElements = [...new Set(arr)];
  const [first, second, , , last] = uniqueElements;
  return [first, second, last];
}

const arr = [1, 2, 3, 4, 5, 1, 3, 5];
const extracted = accessRandomElements(arr);
console.log(extracted); // [1, 2, 5]
