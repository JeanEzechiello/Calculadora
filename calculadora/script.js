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
    previous.textContent = ''
    operador = ''
    anterior = ''
}

function virgula() {
     if(current.textContent.indexOf('.') != -1) {
       
     } else {
      current.textContent += '.'
     }  
}

function apagar() {
   current.textContent = current.textContent.slice(0, current.textContent.length -1)

   previous.textContent = previous.textContent.slice(0, previous.textContent.length - 1)
}


function mais() {
    operador = '+'
    previous.textContent = operador
    anterior = current.textContent
    current.textContent = ''
}


function menos() {
    operador = '-'
    previous.textContent = operador
    anterior = current.textContent
    current.textContent = ''
}

function vezes() {
    operador = 'x'
    previous.textContent = operador
    anterior = current.textContent
    current.textContent = ''
}

function dividir() {
    operador = '÷'
    previous.textContent = operador
    anterior = current.textContent
    current.textContent = ''
}

function resto() {
    operador = '%'
    previous.textContent = operador
    anterior = current.textContent
    current.textContent = ''
}

function result() {
    
    if( operador == '+') {
        let res = Number(anterior) + Number(current.textContent)
        previous.textContent = ''
        current.textContent = res

    } else if(operador == '-') {
        let res = Number(anterior) - Number(current.textContent)
        previous.textContent = ''
        current.textContent = res

    } else if(operador == 'x') {
        let res = Number(anterior) * Number(current.textContent)
        previous.textContent = ''
        current.textContent = res

    } else if(operador == '÷') {
        if(current.textContent == '0') {
            alert('ERRO')
        }else {
            let res = Number(anterior) / Number(current.textContent)
            previous.textContent = ''
            current.textContent = res
        } 
        
    }else if(operador == '%') {
             let res = Number(anterior) % Number(current.textContent)
            previous.textContent = ''
            current.textContent = res
        }
    operador = ''
    anterior = ''
}
