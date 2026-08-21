let current = document.querySelector('.current')
let previous = document.querySelector('.previous')
let button = document.querySelector('.buttons')
let anterior = ''
let operador = ''
let entre = ''

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

function operarComSimbolo(simbolo) {
    if(cont > 0) {
        current.textContent += simbolo
    } else if(operador != '' && current.textContent != '') {
        let valorAtual = pegarValorAtual()
        let texto = anterior + operador + valorAtual
         anterior = calcularExpressão(texto)

        operador = simbolo
        previous.textContent = anterior + ' ' + operador + '\u00A0'
        current.textContent = ''
        

    }else {
        operador = simbolo
        anterior = pegarValorAtual()
        previous.textContent = anterior + ' ' + operador + '\u00A0'
        current.textContent = ''
    }
}

function mais() {
    operarComSimbolo('+')
}

function menos() {
    operarComSimbolo('-')
}

function vezes() {
    operarComSimbolo('x')
}

function dividir() {
    operarComSimbolo('÷')
}

function resto() {
    let valorPorcent = 0

        if(operador == '+' || operador == '-') {
            valorPorcent = anterior * pegarValorAtual() / 100
        } else {
             valorPorcent = pegarValorAtual() / 100
        }

            if(operador != '') {
                    let texto = anterior + operador + valorPorcent
                    current.textContent = calcularExpressão(texto)

                    anterior = ''
                    operador = ''
                    previous.textContent = ''

    }else {
        operador = ''
        current.textContent = valorPorcent
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

function pegarValorAtual() {
    if(current.textContent.indexOf('(') != -1) {
    let posAbre = current.textContent.indexOf('(')
    let posFecha = current.textContent.indexOf(')')

    // 2. pegar só o miolo, sem os parênteses
    let miolo = current.textContent.slice(posAbre + 1, posFecha)

    // 3. calcular o miolo
    let resultado = calcularExpressão(miolo)
    return resultado

    }

        if (current.textContent == '') {
            return current.textContent 

        }else {
        return Number(current.textContent)
    }
}
