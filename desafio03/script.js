function contar () {
    let inicio = document.getElementById ('inicio')
    let fim = document.getElementById ('fim')
    let passos =document.getElementById ('passos')
    let res = document.getElementById ('res')
    if (inicio.value.length == 0|| fim.value.length == 0|| passos.value.length == 0) {
        alert ('Preencha todos os campos')
    } else {
        res.innerHTML ='Contando'
        let i = Number(inicio.value)
        let f = Number (fim.value)
        let p = Number  (passos.value)
        
        for (let c = i;c <= f; c+=p) {
            res.innerHTML += ` ${c} \u{1F923}` 
        }
    }
}
