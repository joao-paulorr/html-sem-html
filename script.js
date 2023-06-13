let pai = document.body
function jesus() {
    let filho = document.createElement('h1')
    filho.textContent = 'Gato'
    pai.appendChild(filho)
}

jesus()
let bordaPai = document.createElement('div')
let borda = document.createElement("div")
borda.style.border = '2px solid black'
borda.style.width = '200px'
borda.style.height = '400px'
pai.appendChild(bordaPai)
bordaPai.appendChild(borda)

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

botao.onclick = function botao() { foto() }
