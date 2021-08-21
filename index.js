function charge() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hours = data.getHours()
    msg.innerHTML = `Agora são ${hours} horas`

    if (hours >= 0 && hours < 12) {
        //BOM DIA
        img.src = 'foto-manha.jpeg'
        document.body.style.background = "#ab8853"
    } else if (hours >= 12 && hours < 18) {
        //BOA TARDE
        img.src = 'foto-tarde.jpeg'
        document.body.style.background = "#d65e06"
    } else {
        //BOA NOITE
        img.src = 'foto-noite.jpeg'
        document.body.style.background = "rgb(23 29 41)"
    }
}
