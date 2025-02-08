function carregar() {
    var msg = document.getElementById ('msg')
    var img = document.getElementById ('foto1') // É o id da tag img src - Se atente sempre nisso
    var data = new Date()
    var hora = data.getHours ()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#e8ec03'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!!
        img.src = 'tarde.png'
        document.body.style.background = '#03ec9e'
    } else {
        // BOA NOITE!!
        img.src = 'noite.png'
        document.body.style.background = '#01156d'
    }
    
}