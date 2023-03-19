

function extractNameAndStreet(obj) {
    const { name, address: { street } } = obj;
    return { name, street };
  }

const person = {
    name : "Mithun",
    age: 21,
    address: {
        street: "BB, Block b, Industrial area.",
        city: "sector 62, Noida",
        state: "Uttar Pradesh",
    },
};

const { name, street } = extractNameAndStreet(person);
console.log(name); // Output: "Mithun"
console.log(street); // Output: "BB, Block b, Industrial area."