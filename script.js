

let numeroOne = prompt("Digite o primeiro número: ")
let numeroSec = prompt("Digite o segundo número: ")



alert(`${numeroOne} + ${numeroSec} = `+ (Number(numeroOne)+Number(numeroSec)))
alert(`${numeroOne} - ${numeroSec} = `+ (Number(numeroOne)-Number(numeroSec)))
alert(`${numeroOne} * ${numeroSec} = `+ (Number(numeroOne)*Number(numeroSec)))
alert(`${numeroOne} / ${numeroSec} = `+ (Number(numeroOne)/Number(numeroSec)))
alert(`${numeroOne} % ${numeroSec} = `+ (Number(numeroOne)%Number(numeroSec)))

if (((Number(numeroOne)+Number(numeroSec)) % 2 ) != 0 ) {
    alert((Number(numeroOne)+Number(numeroSec)) + 'é um número impar!' )
}else{
    alert((Number(numeroOne)+Number(numeroSec)) + 'é um número par!' )
}

if (Number(numeroOne) == Number(numeroSec)) {
    alert(`O Número ${numeroOne} é igual a ${numeroSec}`)
} else {
    alert(`O Número ${numeroOne} é diferente de ${numeroSec}`)
}