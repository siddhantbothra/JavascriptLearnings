// 01

let age = 20;

if (age >= 10 && age < 20) {
  console.log("go");
} else {
  console.log("bye");
}

// 02

let num = 6;

if (num % 2 == 0) {
  if (num % 3 == 0) {
    console.log("Number is divisible by both");
  } else {
    console.log("only by 2");
  }
} else {
  console.log("not divisible");
}
//04
if (num % 2 == 0 || num % 3 == 0) {
  console.log("hi");
} else {
  console.log("bye");
}

//05
let a = 30;
console.log(a > 18 ? "yes" : "no");
