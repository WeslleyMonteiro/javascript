function ParOuImpar (n) {
    if (n%2==0) {
        return 'Par!'
    } else {
        return 'Ímpar'
    }
}

let res = ParOuImpar(8)
console.log (res)
console.log (ParOuImpar(5)) // Outra forma de declarar