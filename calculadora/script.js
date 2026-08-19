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
   if(current.textContent == '') {
    previous.textContent = previous.textContent.slice(0, previous.textContent.length - 1)

   } else {
    current.textContent = current.textContent.slice(0, current.textContent.length - 1)
   }
}


function mais() {
    if(cont > 0) {
        current.textContent += '+'
    }else {
        operador = '+'
        anterior = current.textContent
        previous.textContent = anterior + ' ' + operador + '\u00A0'
        current.textContent = ''
    }
}

function menos() {
    if(cont > 0) {
        current.textContent += '-'
    }else {
        operador = '-'
        anterior = current.textContent
        previous.textContent = anterior + ' ' + operador + '\u00A0'
        current.textContent = ''
    }
}

function vezes() {
    if(cont > 0) {
        current.textContent += 'x'
    } else {
        operador = 'x'
        anterior = current.textContent
        previous.textContent = anterior + ' ' + operador + '\u00A0'
        current.textContent = ''
    }
}

function dividir() {
    if(cont > 0) {
        current.textContent += '÷'
    } else {
        operador = '÷'
        anterior = current.textContent
        previous.textContent = anterior + ' ' + operador + '\u00A0'
        current.textContent = ''
    }
    
    
}

function resto() {
    if(cont > 0) {
        current.textContent += '%'
    } else {
        operador = '%'
        anterior = current.textContent
        previous.textContent = anterior + ' ' + operador + '\u00A0'
        current.textContent = ''
    }
   
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
    
     if(current.textContent.indexOf('(') != -1) {

            let express = previous.textContent + current.textContent
        console.log(express)
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
                let resExpress = beforeOp + laterOp
                let p = express.slice(i, f + 1)
                express = express.replace(p, resExpress)
                
                let antExpress = express.slice(0, i)
                let opAnt = antExpress.indexOf('+')
                let antNumber = antExpress.slice(0, opAnt)

                antNumber = antNumber.trim()
                antNumber = Number(antNumber)


                let res = antNumber + resExpress
                current.textContent = res

            


            } else if(mostrarExpress.indexOf('-') != -1) {
                let opExpress = mostrarExpress.indexOf('-')
                let beforeOp = mostrarExpress.slice(0, opExpress)
                let laterOp = mostrarExpress.slice(opExpress + 1)
                
                beforeOp = beforeOp.trim()
                laterOp = laterOp.trim()

                beforeOp = Number(beforeOp)
                laterOp = Number(laterOp)

                previous.textContent = ''
                let resExpress = beforeOp - laterOp
                let p = express.slice(i, f + 1)
                express = express.replace(p, resExpress)
                
                let antExpress = express.slice(0, i)
                if(antExpress == '') {
                    current.textContent = resExpress
                } else {
                    let opAnt = antExpress.indexOf('-')
                    let antNumber = antExpress.slice(0, opAnt)

                    antNumber = antNumber.trim()
                    antNumber = Number(antNumber)


                    let res = antNumber - resExpress
                    current.textContent = res
                }
                
            }else if(mostrarExpress.indexOf('x') != -1) {
                let opExpress = mostrarExpress.indexOf('x')
                let beforeOp = mostrarExpress.slice(0, opExpress)
                let laterOp = mostrarExpress.slice(opExpress + 1)
                
                beforeOp = beforeOp.trim()
                laterOp = laterOp.trim()

                beforeOp = Number(beforeOp)
                laterOp = Number(laterOp)

                previous.textContent = ''
                let resExpress = beforeOp * laterOp
                let p = express.slice(i, f + 1)
                express = express.replace(p, resExpress)
                
                let antExpress = express.slice(0, i)
                if(antExpress == '') {
                    current.textContent = resExpress
                } else {
                    let opAnt = antExpress.indexOf('x')
                    let antNumber = antExpress.slice(0, opAnt)

                    antNumber = antNumber.trim()
                    antNumber = Number(antNumber)


                    let res = antNumber * resExpress
                    current.textContent = res
                }
                

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
                let resExpress = beforeOp / laterOp
                let p = express.slice(i, f + 1)
                express = express.replace(p, resExpress)
                
                let antExpress = express.slice(0, i)
                if(antExpress == '') {
                    current.textContent = resExpress
                } else {
                    let opAnt = antExpress.indexOf('÷')
                    let antNumber = antExpress.slice(0, opAnt)

                    antNumber = antNumber.trim()
                    antNumber = Number(antNumber)


                    let res = antNumber / resExpress
                    current.textContent = res
                }  
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
                if(laterOp == 0) {
                    alert('ERRO')
                } else {
                let resExpress = beforeOp % laterOp
                let p = express.slice(i, f + 1)
                express = express.replace(p, resExpress)
                
                let antExpress = express.slice(0, i)
                if(antExpress == '') {
                    current.textContent = resExpress
                } else {
                    let opAnt = antExpress.indexOf('%')
                    let antNumber = antExpress.slice(0, opAnt)

                    antNumber = antNumber.trim()
                    antNumber = Number(antNumber)


                    let res = antNumber % resExpress
                  
                    current.textContent = res
                }
                } 

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
        if(current.textContent == '0') {
            alert('ERRO')
        } else {
            let res = Number(anterior) % Number(current.textContent)
            previous.textContent = ''
            current.textContent = res
        }
             
        }
    operador = ''
    anterior = ''
}

function calcularExpressão(texto) {
    if(texto.indexOf('÷') != -1) {
        let opIndex = texto.indexOf('÷')
        let a = texto.slice(0, opIndex)
        let b = texto.slice(opIndex + 1)

        a = a.trim()
        b = b.trim()

        a = Number(a)
        b = Number(b)

        if(b == 0) {
            alert('ERRO')
            return null
        }
        return a / b

    } else if(texto.indexOf('%') != -1) {
        let opIndex = texto.indexOf('%')
        let a = texto.slice(0, opIndex)
        let b = texto.slice(opIndex + 1)

        a = a.trim()
        b = b.trim()

        a = Number(a)
        b = Number(b)

        if(b == 0) {
            alert('ERRO')
            return null
        }
        return a % b
    } else if(texto.indexOf('+') != -1) {
        let opIndex = texto.indexOf('+')
        let a = texto.slice(0, opIndex)
        let b = texto.slice(opIndex + 1)

        a = a.trim()
        b = b.trim()

        a = Number(a)
        b = Number(b)
        
        return a + b

    } else if(texto.indexOf('-') != -1) {
        let opIndex = texto.indexOf('-')
        let a = texto.slice(0, opIndex)
        let b = texto.slice(opIndex + 1)

        a = a.trim()
        b = b.trim()

        a = Number(a)
        b = Number(b)
        
        return a - b

    } else if(texto.indexOf('x') != -1) {
        let opIndex = texto.indexOf('x')
        let a = texto.slice(0, opIndex)
        let b = texto.slice(opIndex + 1)

        a = a.trim()
        b = b.trim()

        a = Number(a)
        b = Number(b)
        
        return a * b
    }
}
