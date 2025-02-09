const numbers = [12, 98, 45, 63, 21, 72, 52, 81, 19];

console.log(numbers);

// for(const num of numbers){
//     console.log(num);
// }



const fruits = ['orange', 'apple', 'banana', 'jackfruit', 'watermelon'];

// for(){

// }

for (const fruit of fruits) {
    console.log(fruit);
    console.log('I want to eat');
}


// while loop
let index = 0;
while (index < fruits.length) {
    const fruit = fruits[index];
    console.log(fruit);
    console.log('I want to eat');
    index++;
}


let i=1;
while(i<=numbers.length){
    console.log(i);
    i++;
}


let num = 1;
let sum = 0;
while(num<=10){

        console.log(num);
        sum = sum + num;
        console.log('sum:', sum);
    
    num++;
}

let num3 = 1;
while(num3<=10){
    if(num3%2===0){
        console.log("even number", num3);
    }
    num3++;
}

//for(let i = 1; i<=10; i++){
//  const sum = 0;
// sum = sum + i;
//console.log('sum:', sum);
//}

let n = 10;
while(n >= 0){
    console.log(n);
    n--;
} 

for(let i= 1; i>=30; i++){
    if (i % 2 === 0) {
        console.log(i);
    }
    console.log(i);
}

// || or operator
// && and operator
// ! not operator
// == value check
// === value and type check
// != not equal
// !== not equal value and type
// > greater than
// < less than
// >= greater than or equal
// <= less than or equal
// % modulus operator
// + addition
// - subtraction
// * multiplication
// / division
// ++ increment
// -- decrement
// += add and assign
// -= subtract and assign
// *= multiply and assign
// /= divide and assign
// % modulus and assign

for(let i=0; i<10; i++){
    console.log(i);
   if(i>=5){
    break;

  }

}

console.log('I am done with the loop');


let ik = 54;
while(ik > 25){
    
    
    if(n < 50){
        break;
    }
    console.log(ik);
    ik--;
}