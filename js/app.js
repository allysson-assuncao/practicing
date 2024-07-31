function verifyPrime(){
    let inputNumber = document.querySelector("input").value;
}

function listDivisors(){
    let inputNumber = document.querySelector("input").value;
    let textarea = document.querySelector("textarea");
    let divisors;
    for(let i = 0; i < inputNumber/2; i++){
        if(inputNumber % i === 0){
            divisors.push(i);
            //add listed divisor to textarea
        }
    }
    divisors.push(inputNumber);

}
