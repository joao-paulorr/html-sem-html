function CreateElement() {
    let pai = document.body
    let filho = document.createElement('h1')
    pai.appendChild(filho)
    filho.textContent = "titulo"
}