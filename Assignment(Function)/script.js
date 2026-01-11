// QN1
function count(){
    for(i=1;i<=10;i++){
    console.log(i);
}
}
count()

// QN2
function sum(){
let sum=0;
for(i=1;i<=10;i++){
    sum=sum+i;
}
console.log(sum);
}
sum()

// QN3
function even(){
    for(i=1;i<=20;i++){
        if(i%2==0){
            console.log(i);
        }else{

        }
    }
}
even()

// QN4
function odd(){
    for(i=1;i<=20;i++){
        if(i%2!=0){
            console.log(i);
        }else{

        }
    }
}
odd()

// QN5
function factorial(){
    let n=5;
    let fact=1;
    for(i=n;i>=1;i--){
        fact=fact*i;
    }
    console.log(fact);
}
factorial()

// QN6
function mul5(){
    console.log("Multiple of 5");
    let n=5;
    for(i=1;i<=10;i++){
    console.log(n*i);
}
}
mul5()

// QN7
function rev(){
    console.log("Numbers in reverse order");
    for(i=10;i>=1;i--){
    console.log(i);
    }
}
rev()

// QN8
function mul3(){
    let n3=3;
    console.log("Multiple of 3")
    for(i=1;i<=10;i++){
    console.log(n3*i);
    }
}
mul3()

// QN9
function sume(){
    let sume=0;
    console.log("Sum of even numbers from 1 to 50");
    for(i=1;i<=50;i++){
        if(i%2==0){
            sume=sume+i;
        }else{}
    }
    console.log(sume);
}
sume()

// Qn10
function sumo(){
    let sumo=0;
    console.log("Sum of odd numbers from 1 to 50");
    for(i=1;i<=50;i++){
        if(i%2!=0){
            sumo=sumo+i;
        }else{}
    }
    console.log(sumo);
}
sumo()

// QN11
function mult5(){
    console.log("Divisible by 5");
    for(i=1;i<=100;i++){
        if(i%5==0){
            console.log(i);
        }else{}
    }
}
mult5()

// QN12
function fibo(){
    console.log("Fibonacci sequence");
    let a=0;
    let b=1;
    for(i=0;i<10;i++){
        console.log(a);
        let c=a+b;
        a=b;
        b=c;
    }
}
fibo()

// QN13




// QN14
function square(){
    for(i=1;i<=10;i++){
        console.log(i*i);
    }
}
square()

// QN15
function sum2(){
    console.log("sum of squares")
    let n=10;
    let sums=0;
    for(i=1;i<=n;i++){
        sums=sums+i*i;
    }
    console.log(sums);
}
sum2()

// QN16
function cube(){
    console.log("Cube of 1 to 10");
    for(i=1;i<=10;i++){
        console.log(i*i*i);
    }
}
cube()

// QN17
function Smallest(){
  for (let i=1; i<100; i++) {
    if (i%3===0 && i%4===0) {
      return i;
    }
  }
}
const smallestNumber = Smallest();
console.log(smallestNumber); 

// QN18
function even(){
    console.log("First 10 even numbers");
    for(i=1;i<=20;i++){
        if(i%2===0){
            console.log(i);
        }
    }
}
even()

// QN19
function div(){
    console.log("Divisible by 2 and 5");
    for(i=1;i<=100;i++){
        if(i%2===0 && i%5===0){
            console.log(i);
        }
    }
}
div()

// QN20
function div1(){
    console.log("Divisible by 3 and 5");
    let sumd=0;
    for(i=1;i<=100;i++){
        if(i%3===0 && i%5===0){
            sumd=sumd+i;
        }
    }
    console.log(sumd);
}
div1()