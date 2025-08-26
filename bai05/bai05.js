let prev = 0;
let cuzz = 1;

let total = 1;
let count = 2;
let sum;

while (count <20){
    sum = prev + cuzz;
    total+= sum;
    count++;
    prev = cuzz;
    cuzz = sum;
} 
console.log('fibonacci', total);