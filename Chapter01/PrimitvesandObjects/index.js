// Primiutives datayps and Objects
// There are 7 types of datatypes in js
//1. null     let a = null ;
//This data type represents the intentional absence of a value, and is represented by the keyword null (without quotes)
// 2. number  let a =3
// it is simple number
//3.boolean let a = true
// it is only for true and false
//4. bigint  let a = BigInt(547)
// 5. sting  let a ="name"
// 6. symbol  let a = Symbol ("jhello")
// 7.undefined let a

// Objects  are non- primtive datatypes used for key value pairs
// if you log a key which is not their it will show undefined
// object can use its refernce in its inside also but not suggested

// let a = {
//   name: "Siddhant",
//   role: "developer",
// };
// console.log(a["name"]);

// Alma better
const Animal = {
  type: "wild",
  food: "trees",
};
// dot notation
console.log(Animal.type);
// bracket notation
console.log(Animal["type"]);

let set = new Set();

set.add(10);
set.add(10);

set.add(10);

console.log(set.size);
