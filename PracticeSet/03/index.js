const student = {
  sidd: 67,
  me: 45,
};
// // Problem 1
// for (let i = 0; i < Object.keys(student).length; i++) {
//   console.log(student[Object.keys(student)[i]]);
// }
// // Problem 2 with for in loop

// for (let i in student) {
//   console.log(i + "=" + student[i]);
// }

// Problem 3

// let a = 5;

// let i = 0;

// while (i != a) {
//   let i = prompt("Enter a number");
//   console.log("try again");
// }

// Problem 4

// Mean of five numbers

const avg = (a, b, c, d, e) => {
  return (a + b + c + d + e) / 5;
};
console.log(avg(1, 2, 3, 4, 5));
