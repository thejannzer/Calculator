//Taschenrechner-Logik
let current = ""
let previous = ""
let operator = ""
let result = 0
document.getElementById("result").textContent = result

const BtnPlus = document.getElementById("plus")
const BtnMinus = document.getElementById("minus")
const BtnMulti = document.getElementById("multi")
const BtnEqual = document.getElementById("eq")

const Btn1 = document.getElementById("1")
const Btn2 = document.getElementById("2")
const Btn3 = document.getElementById("3")
const Btn4 = document.getElementById("4")
const Btn5 = document.getElementById("5")
const Btn6 = document.getElementById("6")
const Btn7 = document.getElementById("7")
const Btn8 = document.getElementById("8")
const Btn9 = document.getElementById("9")

Btn1.onclick = function(){
    current += 1
    document.getElementById("result").textContent = current
}

Btn2.onclick = function(){
    current += 2
    document.getElementById("result").textContent = current
}

Btn3.onclick = function(){
    current += 3
    document.getElementById("result").textContent = current
}

Btn4.onclick = function(){
    current += 4
    document.getElementById("result").textContent = current
}

Btn5.onclick = function(){
    current += 5
    document.getElementById("result").textContent = current
}

Btn6.onclick = function(){
    current += 6
    document.getElementById("result").textContent = current
}

Btn7.onclick = function(){
    current += 7
    document.getElementById("result").textContent = current
}

Btn8.onclick = function(){
    current += 8
    document.getElementById("result").textContent = current
}

Btn9.onclick = function(){
    current += 9
    document.getElementById("result").textContent = current
}

BtnPlus.onclick = function(){
    previous = current
    current = ""
    operator = "+"
}

BtnMinus.onclick = function(){
    previous = current
    current = ""
    operator = "-"
}

BtnMulti.onclick = function(){
    previous = current
    current = ""
    operator = "*"
}

BtnEqual.onclick = function(){
    let result = 0

    if(operator === "+"){
        result = Number(previous) + Number(current)
    }
    else if(operator === "-"){
        result = Number(previous) - Number(current)
    }
    else if(operator === "*"){
        result = Number(previous) * Number(current)
    }

    document.getElementById("result").textContent = result

    //Um Ergebnis weiter zu verwenden:
    current = result    
    
    //Weiterverwendung von Ergebnis ist Fehlerhaft!!!
}