function somar(){
    var numero1 = parseFloat(document.getElementById("n1").value)
    var numero2 = parseFloat(document.getElementById("n2").value)
    var res = document.getElementById("res")
    res.innerHTML = numero1 + numero2
 
}

function sub(){
    var numero1 = parseFloat(document.getElementById("n3").value)
    var numero2 = parseFloat(document.getElementById("n4").value)
    var res = document.getElementById("resSub")
    res.innerHTML = numero1 - numero2
  
}

function multi(){
    var numero1 = parseFloat(document.getElementById("n5").value)
    var numero2 = parseFloat(document.getElementById("n6").value)
    var res = document.getElementById("resMulti")
    res.innerHTML = numero1 * numero2

}

function div(){
    document.getElementById("n8").style.border = "1px solid black"
    var numero1 = parseFloat(document.getElementById("n7").value)
    var numero2 = parseFloat(document.getElementById("n8").value)
    var res = document.getElementById("resDiv")
    if(numero2 !== 0){
        res.innerHTML = (numero1 / numero2).toFixed(1)
    }else{
        res.innerHTML = "Não é permitido divisão por 0"
        document.getElementById("n8").style.border = "2px solid red"
    } 
    
}

function media(){
    var m1 = parseFloat(document.getElementById("m1").value)
    var m2 = parseFloat(document.getElementById("m2").value)
    var m3 = parseFloat(document.getElementById("m3").value)
    var m4 = parseFloat(document.getElementById("m4").value)
    var m5 = parseFloat(document.getElementById("m5").value)
    var media = document.getElementById("resMedia")
   var res = (m1 + m2 + m3 + m4 + m5) / 5

    var msg = document.getElementById("msg")

    if(media >= 7){
     media.textContent = res
     msg.textContent = "Passou"
     msg.style.color = "green"
    }else{
    media.textContent = res
    msg.textContent = "Reprovado"
    msg.style.color = "red"
    }
}
function imc(){
    var peso = parseFloat(document.getElementById("peso").value)
    var altura = parseFloat(document.getElementById("altura").value)
    var imc = document.getElementById("resIMC")
    var res = ( peso / (altura * altura)).toFixed(2)

    var msgIMC = document.getElementById("msgIMC")
    console.log(res)



    if(res >= 40){
        imc.textContent = res
        msgIMC.textContent = "Obisedade grau III"
        msgIMC.style.color = "red"
    }else if(res >= 35.9 && 39.9){
        imc.textContent = res
        msgIMC.textContent = "Obesidade grau II"
        msgIMC.style.color = "red"
    }else if(res >= 30 && res >= 34.9){
        imc.textContent = res
        msgIMC.textContent = "Obesidade grau I"
        msgIMC.style.color = "red"
    }else if(res >= 25.5 && res >= 29){
        imc.textContent = res
        msgIMC.textContent = "Sobrepeso"
        msgIMC.style.color = "red"
    }else if(res >= 24.9 && res <= 18.6){
        imc.textContent = res
        msgIMC.textContent = "Normal"
        msgIMC.style.color = "green"
    }else if(res <= 18.5){
        imc.textContent = res
        msgIMC.textContent = "Abaixo do peso!"
        msgIMC.style.color = "yellow"
    }else{
        msgIMC.textContent = "Nenhum peso e nem altura foi colocado por favor, insira!"
    }
}
function ano(){
    var ano = parseFloat(document.getElementById("ano").value)
    var porta = document.getElementById("resa")
    var res = 2025 - ano

    var msgporta = document.getElementById("msgporta")
    console.log(res)

    if(res >= 18){
        msgporta.textContent = "Liberado pra entrar!"
        msgporta.style.color = "hsl" 
    }else {
        msgporta.textContent = "Negado menos que 18, volte pra casa!"
        msgporta.style.color = "red"
    }
}


