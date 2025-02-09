function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('textano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number (fano.value) > ano) {
        alert ('[ERRO]. Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement ('img') // criou a tag ima
        img.setAttribute('id', 'foto') // criou o id foto
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10){
                img.setAttribute ('src', 'menino.png')
            } else if (idade < 21) {
                img.setAttribute ('src', 'moço.png')
            } else if (idade < 50) {
                img.setAttribute ('src', 'homem.png')
            } else {
                img.setAttribute ('src', 'senhor.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <10){
                img.setAttribute ('src', 'menina.png')
            } else if (idade < 21) {
                img.setAttribute ('src', 'moça.png')
            } else if (idade < 50) {
                img.setAttribute ('src', 'mulher.png')
            } else {
                img.setAttribute ('src', 'senhora.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img) // adicionou o img na resposta
    }
}