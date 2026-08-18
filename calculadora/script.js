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
    entre = ''
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
    anterior = current.textContent
    previous.textContent = anterior + ' ' + operador + '\u00A0'
    current.textContent = ''
    
}


function menos() {
     operador = '-'
    anterior = current.textContent
    previous.textContent = anterior + ' ' + operador + '\u00A0'
    current.textContent = ''
}

function vezes() {
    operador = 'x'
     anterior = current.textContent
    previous.textContent = anterior + ' ' + operador + '\u00A0'
    current.textContent = ''
}

function dividir() {
    operador = '÷'
     anterior = current.textContent
    previous.textContent = anterior + ' ' + operador + '\u00A0'
    current.textContent = ''
    
}

function resto() {
    operador = '%'
    anterior = current.textContent
    previous.textContent = anterior + ' ' + operador + '\u00A0'
    current.textContent = ''
}

let cont = 0

function parentes() {    

        if(current.textContent == 0) {
            current.textContent = '('
                cont++
        }else if(cont > 0){
            current.textContent += ')'
            cont--
        } else {
            anterior = '(' + current.textContent
                 current.textContent =  anterior
                 cont++
        }

       
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
