let prev = 0;
let cuzz = 1;

let count = 2;

console.log(prev);
while (count < 20){
    console.log(cuzz);
    let sum = prev + cuzz;
    prev = cuzz;
    cuzz = sum;
    count++;
} 