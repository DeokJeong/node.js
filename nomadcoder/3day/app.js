const calculator = {
    add : function ( a, b ) {
        console.log(a, b);
        console.log(a + b);
        console.log(a / b);
        console.log(a * b);
        console.log(a ** b);
    },
    push : function ( a, b ){
        console.log(a, b);
        console.log(a + b);
        console.log(a / b);
        console.log(a * b);
        console.log(a ** b);
    }
}

calculator.add(2,4);
calculator.push(1,2);

const age = 96;
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}

const KrAge = calculateKrAge(age);

console.log(KrAge);