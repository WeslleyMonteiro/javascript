var idade = 100
console.log (`Você tem ${idade} anos. Portanto`)
if (idade < 16){
    console.log ('Você não vota')
} else if (idade < 18 || idade > 65) {
    console.log ('O voto é FACULTATIVO')
} else {
    console.log ('O voto é OBRIGATÓRIO')
}
