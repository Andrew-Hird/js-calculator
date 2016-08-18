var answer = ""

var one = document.getElementById("one").addEventListener("click", func)
var two = document.getElementById("two").addEventListener("click", func)
var three = document.getElementById("three").addEventListener("click", func)
var four = document.getElementById("four").addEventListener("click", func)
var five = document.getElementById("five").addEventListener("click", func)
var six = document.getElementById("six").addEventListener("click", func)
var seven = document.getElementById("seven").addEventListener("click", func)
var eight = document.getElementById("eight").addEventListener("click", func)
var nine = document.getElementById("nine").addEventListener("click", func)
var zero = document.getElementById("zero").addEventListener("click", func)
var decimal = document.getElementById("decimal").addEventListener("click", func)
var add = document.getElementById("add").addEventListener("click", func)
var subtract = document.getElementById("subtract").addEventListener("click", func)
var multiply = document.getElementById("multiply").addEventListener("click", func)
var divide = document.getElementById("divide").addEventListener("click", func)
var clearAll =  document.getElementById("clear").addEventListener("click", blank)

function oneNum() {
one = 1
answer += one
document.getElementById("display").innerHTML = one
}

function twoNum() {
two = 2
answer += two
document.getElementById("display").innerHTML = two
}

function threeNum() {
three = 3
answer += three
document.getElementById("display").innerHTML = three
}

function fourNum() {
four = 4
answer += four
document.getElementById("display").innerHTML = four
}

function fiveNum() {
five = 5
answer += five
document.getElementById("display").innerHTML = five
}

function sixNum() {
six = 6
answer += six
document.getElementById("display").innerHTML = six
}

function sevenNum() {
seven = 7
answer += seven
document.getElementById("display").innerHTML = seven
}

function eightNum() {
eight = 8
answer += eight
document.getElementById("display").innerHTML = eight
}

function nineNum() {
nine = 9
answer += nine
document.getElementById("display").innerHTML = nine
}

function zeroNum() {
zero = 0
answer += zero
document.getElementById("display").innerHTML = zero
}

function decimalNum() {
decimal = "."
answer += decimal
document.getElementById("display").innerHTML = decimal
}

function addNum() {
add = "+"
answer += add
document.getElementById("display").innerHTML = "+"
}

function subtractNum() {
subtract = "-"
answer += subtract
document.getElementById("display").innerHTML = "-"
}

function multiplyNum() {
multiply = "*"
answer += multiply
document.getElementById("display").innerHTML = "*"
}

function divideNum() {
divide = "/"
answer += divide
document.getElementById("display").innerHTML = "/"
}

function func() {
  document.getElementById("compute").addEventListener("click", equal)
  document.getElementById("count").innerHTML = answer
  function equal() {
    document.getElementById("display").innerHTML = eval(answer)
  }
}

  function blank() {
    document.getElementById("display").innerHTML = "0"
    document.getElementById("count").innerHTML = 0
    answer = ""
  }
