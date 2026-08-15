let current = document.querySelector('.current')
let previous = document.querySelector('.previous')
let button = document.querySelector('.buttons')

function mostrarNumero(numero) {
    if(current.textContent == 0) {
        current.textContent = numero
    } else {
        current.textContent += numero
    }
}

function limpar() {
    current.textContent = '0'
}

function virgula() {
     if(current.textContent.indexOf('.') != -1) {
       
     } else {
      current.textContent += '.'
     }  
}