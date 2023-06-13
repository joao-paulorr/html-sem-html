let pai = document.body
function jesus() {
    let filho = document.createElement('h1')
    filho.textContent = 'Gato'
    foto.src = 'pau.png'
    pai.appendChild(filho)
}

jesus()

function foto() {
    let foto = document.createElement('img')
    foto.src = 'gato.jpg'
    foto.style.width = '500px'
    foto.style.height = '400px'
    pai.appendChild(foto)
}


let botao = document.createElement('button')
botao.textContent = 'Enviar'
pai.appendChild(botao)

botao.onclick = function botao(){foto()}
