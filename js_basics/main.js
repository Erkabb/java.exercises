/*let name = "erka",
  age = 20,
  engaged = true;

console.log("Your name: ", name);
console.log("Your age: ", age);
console.log(typeof engaged);

let number1 = 10,
  number2 = 30;
let a = 5,
  b = 7,
  c = 8;
let gb = 15;
let celsius = 13,
  farhenheit = 128;
let cm = 2,
  inches = 1.1811;

//arithmetic

let sum = number1 + number2;
let diff = number2 - number1;
let multi = number1 * number2;
let depo1 = number2 / number1;
let depo2 = number1 % number2;

// gurwaljin P

let p = a + b + c;

//gb to b

let byte = gb * 1073741824;

//celsius to fahrenheit

let fahr = celsius * 4.8 + 32;

//fahrenheit to celsius

let cel = (farhenheit - 32) / 4.8;

//cm to inches

let centimeters = inches / 0.3937;

//inches to cm

let inch = cm * 0.3937;

console.log("10+30=", sum);
console.log("30-10=", diff);
console.log("10*30=", multi);
console.log("30/10=", depo1);

console.log("10%30=", depo2);
console.log("a=5, b=7, c=8 P=", p);
console.log("15gb to 1byte=", byte);
console.log("celsius=13 to Fahrenheit=", fahr);
document.getElementById("demo").innerHTML = "fahrenheit=87 to celsius=" + cel;

console.log("1.1811inches=", centimeters);
console.log("2cm=", inch);
let gender = prompt("Gender:");
let age = Number(prompt("Age:"));
if (gender === "male" && age >= 18) {
  console.log("Adult male");
} else if (gender === "female" && age >= 18) {
  console.log("Adult female");
} else {
  console.log("you are not adult");
}
if (gender === "female" || age >= 18) {
  console.log("you r female");
} else {
  console.log("you r not female and adult");
}

let weeks = Number(prompt("1-7hurtel toon utga orulna u:"));
let week;

switch (weeks) {
  case 1: {
    week = "Monday";
    break;
  }
  case 2: {
    week = "tuesday";
  }
  case 3: {
    week = "wednesday";
    break;
  }
  case 4: {
    week = "thursday";
    break;
  }
  case 5: {
    week = "friday";
    break;
  }
  case 6: {
    week = "saturday";
    break;
  }

  case 7: {
    week = "sunday";
    break;
  }
  default: {
    week = "enter the 1-7";
  }
}
console.log("weekname:", week);*/

//ex1

let age = Number(prompt("Your age:"));

if (age >= 25) {
  console.log("above 25");
} else {
  console.log("below 25");
}

//ex2

let number = Number(prompt("enter the random number:"));
let n = number % 2;
if (n === 0) {
  console.log("it is even number");
} else {
  console.log("its odd number");
}

//ex3

const x = 45,
  y = 12,
  z = 30;
if (x >= y && x >= z) {
  console.log("Hamgiin ih:", x);
} else if (y >= z && y >= x) {
  console.log("hamgiin ih too:", y);
} else {
  console.log("hamgiin ih too:", z);
}

//ex4

const j = 45,
  k = 12,
  l = 30;
if (j <= k && j >= l) {
  console.log("Hamgiin baga:", j);
} else if (k <= l && k <= j) {
  console.log("hamgiin baga too:", k);
} else {
  console.log("hamgiin baga too:", l);
}

//ex5

let months = Number(prompt("enter the 1-12"));
let month;
switch (months) {
  case 11:
  case 12:
  case 1: {
    month = "winter";
    break;
  }
  case 2:
  case 3:
  case 4: {
    month = "spring";
    break;
  }
  case 5:
  case 6:
  case 7: {
    month = "summer";
    break;
  }
  case 8:
  case 9:
  case 10: {
    month = "autumn";
    break;
  }
}
console.log("uliral:", month);
//ex6

let a = 85,
  b = 75,
  c = 96,
  d = 69;
let i = 0;
if (a > 80) {
  i += a;
}
if (b > 80) {
  i += b;
}
if (c > 80) {
  i += c;
}
if (d > 80) {
  i += d;
}
console.log("80aas ih toonudin niilber:", i);

//ex7

let num1 = 3;
let num2 = 7;
let num3 = 2;
let num4 = 4;
let r = 1;

if (num1 <= 5) {
  r = num1 * r;
}
if (num2 <= 5) {
  r = num2 * r;
}
if (num3 <= 5) {
  r = num3 * r;
}
if (num4 <= 5) {
  r = num4 * r;
}
console.log("5aas baga toonudin urjwer:", r);

//ex8

let student1sname = "Bat",
  student2sname = "Ocir";
let student1spoint = 65,
  student2spoint = 59;
let unelgee;

if (student1spoint >= 90 && student1spoint <= 100) {
  unelgee = "mash sain";
} else if (student1spoint >= 80 && student1spoint <= 89) {
  unelgee = "sain";
} else if (student1spoint >= 70 && student1spoint <= 79) {
  unelgee = "dund";
} else if (student1spoint >= 60 && student1spoint <= 69) {
  unelgee = "hangalttai";
} else if (student1spoint <= 59) {
  unelgee = "hiceelee hii";
}
console.log("Suragciin medeelel:", student1sname, student1spoint, unelgee);

if (student2spoint >= 90 && student2spoint <= 100) {
  unelgee = "mash sain";
} else if (student2spoint >= 80 && student2spoint <= 89) {
  unelgee = "sain";
} else if (student2spoint >= 70 && student2spoint <= 79) {
  unelgee = "dund";
} else if (student2spoint >= 60 && student2spoint <= 69) {
  unelgee = "hangalttai";
} else if (student2spoint <= 59) {
  unelgee = "hiceelee hii";
}
console.log("Suragciin medeelel:", student2sname, student2spoint, unelgee);

//ex9

let dig1 = 120,
  dig2 = 30,
  dig3 = 12,
  dig4 = 10;
let digit;
if (dig1 <= dig2 && dig1 <= dig3 && dig1 <= dig4) {
  digit = dig1;
} else if (dig2 <= dig1 && dig2 <= dig3 && dig2 <= dig4) {
  digit = dig2;
} else if (dig3 <= dig1 && dig3 <= dig2 && dig3 <= dig4) {
  digit = dig3;
} else if (dig4 <= dig1 && dig4 <= dig2 && dig4 <= dig3) {
  digit = dig4;
}
console.log("hamgiin baga too:", digit);

//ex10

let Ateam, Bteam;
let amember1 = 96,
  amember2 = 89,
  amember3 = 108,
  bmember1 = 99,
  bmember2 = 91,
  bmember3 = 110;
let average1 = (amember1 + amember2 + amember3) / 3;
let average2 = (bmember1 + bmember2 + bmember3) / 3;
let dun;
console.log("ur", average1);
console.log("ur", average2);

if (average1 >= 100 && average2 >= 100 && average1 === average2) {
  dun = "baguud tenttsen";
} else if (average1 >= 100 || (average2 >= 100 && average1 <= average2)) {
  dun = "B team won";
} else if (average1 >= 100 || (average2 >= 100 && average1 >= average2)) {
  dun = " A team won";
}
console.log("ur dun:", dun);

//ex11

let personsage = Number(prompt("nas:"));
let height = Number(prompt("undur:"));
let hasAdult;
if (personsage >= 10 && height >= 140) {
  hasAdult = "allowed to ride";
} else {
  hasAdult = "not allowed to ride";
}
console.log(hasAdult);

//ex12

let too1 = 7,
  too2 = 13,
  too3 = 22,
  too4 = 30;
let answer1 = too1 % 11;
let answer2 = too2 % 11;
let answer3 = too3 % 11;
let answer4 = too4 % 11;
let summ = 0;
if (answer1 > 0) {
  summ = summ + too1;
}
if (answer2 > 0) {
  summ = summ + too2;
}
if (answer3 > 0) {
  summ = summ + too3;
}
if (answer4 > 0) {
  summ = summ + too4;
}
console.log("hariu:", summ);
