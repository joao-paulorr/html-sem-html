let pai = document.body
function jesus() {
    let filho = document.createElement('h1')
    filho.textContent = 'Gato'
    pai.appendChild(filho)
}

jesus()

let div = document.div
function foto() {
    let foto = document.createElement('img')
    foto.src = 'gato.jpg'
    foto.style.width = '500px'
    foto.style.height = '400px'
    div.appendChild(foto)
}

let botao = document.createElement('button')
botao.textContent = 'Enviar'
pai.appendChild(botao)

botao.onclick = function botao() { foto() }
