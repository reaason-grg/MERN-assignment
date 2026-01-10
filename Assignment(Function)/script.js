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