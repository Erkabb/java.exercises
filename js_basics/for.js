//ex1
// for (let tooluur = 1; tooluur <= 10; tooluur++) {
//   console.log("tooluur:", tooluur);
//}

//ex4
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum = sum + i;
// }
// console.log("1-100:", sum);

// //ex2
// for (let j = 1; j <= 10; j + 2) {
//   console.log("1-10 sondgoi too:", j);
// }

// //ex3
// for (let k = 0; k <= 10; k + 2) {
//   console.log("1-10 sondgoi too:", k);
// }

// //ex4
// let n = Number(prompt("too oruulna uu:"));
// let sum1 = 0;
// for (let l = 0; l <= n; l++) {
//   sum1 += l;
// }
// console.log("n hurtelh toonii niilber:", sum1);
//ex12
/*let a = 7,
  b = 13,
  c = 22,
  d = 30;
let answer1 = a % 11;
let answer2 = b % 11;
let answer3 = c % 11;
let answer4 = d % 11;
let summ = 0;
if (answer1 > 0) {
  summ = summ + a;
}
if (answer2 > 0) {
  summ = summ + b;
}
if (answer3 > 0) {
  summ = summ + c;
}
if (answer4 > 0) {
  summ = summ + d;
}
console.log("hariu:", summ);

let k = 0;
sum = 0;
while (k <= 100) {
  sum += k;
  k++;
}
console.log("1-100:", sum);

let j = 0;
let sum1 = 0;
do {
  sum1 += j;
  j++;
} while (j <= 100);
console.log("sum:", sum1);*/


//JS extra assignments EX1

let avg = 0, sum = 0, min = 0, max =0;
function minmaxavg(arr) {
 
    for (let i = 0; i < arr.length; i++) {
      min = arr[0];
      if (arr[i] < arr[0]) {
        min = arr[i];
        return arr[i];
      
    }
  }
 
    for (i = 0; i < arr.length; i++) {
      max = arr[0];
      if (arr[i] > max) {
        max = arr[i];
        return arr[i];
     
    }
  }

    for (let i = 0; i <= arr.length - 1; i++) {
      sum = sum + arr[i];
      avg = sum / (arr.length + 1);
    }
    return avg;
  }


console.log(min([7, 8, 9, 10, 23]));
console.log(max([7, 8, 9, 10, 23]));
console.log(avg([7, 8, 9, 10, 23]));