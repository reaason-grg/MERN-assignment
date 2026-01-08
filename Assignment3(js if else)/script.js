// QN1
let age=20;
if(age>=18){
    console.log("Adult");
}else{
    console.log("Not Adult");
}

// QN2
let num1=-20;
if(num1>0){
    console.log("Positive");
}else{
    console.log("Not Positive");
}

//QN3
let num2=20;
if(num2%2==0){
    console.log("Even");
}else{
    console.log("Odd");
}

// QN4
let l="o";
if(l=="a" || l=="e" || l=="i" || l=="o" || l=="u"
   || l=="A" || l=="E" || l=="I" || l=="O" || l=="U"){
    console.log("Vowel");
}else{
    console.log("Consonant");
}

// QN5
let num5=0;
if(num5==0){
    console.log("Zero");
}else{
    console.log("Non-Zero");
}

// QN6
let num6=21;
if(num6%5==0){
    console.log("Multiple of 5");
}else{
    console.log("Not a multiple of 5");
}

// QN7
let num7=9;
if(num7>10){
    console.log("Greater than 10");
}else{
    console.log("10 or less");
}

// QN8
let num8=20;
let num9=11;
if(num8==num9){
    console.log("Equal");
}else{
    console.log("Not equal");
}

// QN9
let word="qhdh"
let length=word.length;
if(length>5){
    console.log("Long String");
}else{
    console.log("Short String");
}

// QN10
let char="Q";
  if (char===char.toUpperCase() && char!==char.toLowerCase()) {
    console.log(`Uppercase letter.`);
  } else if (char===char.toLowerCase() && char!==char.toUpperCase()) {
    console.log(`Lowercase letter.`);
  } else {
    console.log(`Enter an alphabet`);
  }
