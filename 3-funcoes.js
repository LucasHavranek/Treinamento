//Funções

/*
function somar(num1, num2){
    return (num1 + num2)
}
function subtrair(num1, num2){
    return (num1 - num2)
}
function dividir(num1, num2){
    return (num1 / num2)
}
function multiplicar(num1, num2){
    return (num1 * num2)
}
*/

//Expressões de funções

/*
const somar = function(num1, num2){ return num1 + num2}

const subtrair = function(num1, num2){ return num1 - num2}

const dividir = function(num1, num2){ return num1 / num2}

const multiplicar = function(num1, num2){ return num1 * num2}
*/

//Funções arrow

const somar = (num1, num2) => num1 + num2
const subtrair = (num1, num2) => num1 - num2
const dividir = (num1, num2) => num1 / num2
const multiplicar = (num1, num2) => num1 * num2

console.log("O resultado da soma é: " + somar(5, 5))
console.log("O resultado da subtração é: " + subtrair(5, 5))
console.log("O resultado da divisão é: " + dividir(5, 5))
console.log("O resultado da multiplicação é: " + multiplicar(5, 5))