let current = document.querySelector('.current')
let previous = document.querySelector('.previous')
let button = document.querySelector('.buttons')

function mostrarNumero(numero) {
   current.textContent += numero
}

function limpar() {
    current.textContent = ''
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

        if(current.textContent == '') {
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
    
     if(previous.textContent.indexOf('(') != -1) {
            let express = previous.textContent + current.textContent

            let i = express.indexOf('(')
            let f = express.indexOf(')')

            let mostrarExpress = express.slice(i + 1, f)

            if(mostrarExpress.indexOf('+') != -1) {
                let opExpress = mostrarExpress.indexOf('+')
                let beforeOp = mostrarExpress.slice(0, opExpress)
                let laterOp = mostrarExpress.slice(opExpress + 1)
                
                beforeOp = beforeOp.trim()
                laterOp = laterOp.trim()

                beforeOp = Number(beforeOp)
                laterOp = Number(laterOp)

                previous.textContent = ''
                current.textContent = beforeOp + laterOp

            } else if(mostrarExpress.indexOf('-') != -1) {
                let opExpress = mostrarExpress.indexOf('-')
                let beforeOp = mostrarExpress.slice(0, opExpress)
                let laterOp = mostrarExpress.slice(opExpress + 1)
                
                beforeOp = beforeOp.trim()
                laterOp = laterOp.trim()

                beforeOp = Number(beforeOp)
                laterOp = Number(laterOp)

                previous.textContent = ''
                current.textContent = beforeOp - laterOp
                
            }else if(mostrarExpress.indexOf('x') != -1) {
                let opExpress = mostrarExpress.indexOf('x')
                let beforeOp = mostrarExpress.slice(0, opExpress)
                let laterOp = mostrarExpress.slice(opExpress + 1)
                
                beforeOp = beforeOp.trim()
                laterOp = laterOp.trim()

                beforeOp = Number(beforeOp)
                laterOp = Number(laterOp)

                previous.textContent = ''
                current.textContent = beforeOp * laterOp

            } else if(mostrarExpress.indexOf('÷') != -1) {
                let opExpress = mostrarExpress.indexOf('÷')
                let beforeOp = mostrarExpress.slice(0, opExpress)
                let laterOp = mostrarExpress.slice(opExpress + 1)
                
                beforeOp = beforeOp.trim()
                laterOp = laterOp.trim()

                beforeOp = Number(beforeOp)
                laterOp = Number(laterOp)

                previous.textContent = ''
                if(laterOp == 0) {
                    alert('ERRO')
                } else {
                current.textContent = beforeOp / laterOp  
                }

            }else if(mostrarExpress.indexOf('%') != -1) {
                let opExpress = mostrarExpress.indexOf('%')
                let beforeOp = mostrarExpress.slice(0, opExpress)
                let laterOp = mostrarExpress.slice(opExpress + 1)
                
                beforeOp = beforeOp.trim()
                laterOp = laterOp.trim()

                beforeOp = Number(beforeOp)
                laterOp = Number(laterOp)

                previous.textContent = ''
                current.textContent = beforeOp % laterOp  
            }        

        } else if( operador == '+') {
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
