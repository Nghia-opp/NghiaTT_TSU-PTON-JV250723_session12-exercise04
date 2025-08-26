let prev = 0;
let cuzz = 1;

let sum;

while (true){
    sum = prev + cuzz;
    if (sum % 5 == 0){
        break;
    }
    prev = cuzz;
    cuzz = sum;
} console.log('fibonacci', sum);