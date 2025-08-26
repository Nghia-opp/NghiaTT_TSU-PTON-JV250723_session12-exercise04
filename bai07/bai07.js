for (i = 1; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i,'là FizzBuzz7');
    } else if (i % 5 == 0) {
        console.log(i,'là Buzz');        
    } else if (i % 3 == 0) {
        console.log(i,'là Fizz');
    }
}