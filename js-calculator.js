window.onload = function() {
    var buttons = document.getElementsByTagName('button')
    var result = document.querySelectorAll('#display')[0]
    var clear = document.getElementsByClassName('clear')[0]

    for (var i = 0; i < buttons.length; i += 1) {
        if (buttons[i].innerHTML === '=') {
            buttons[i].addEventListener("click", calculate(i))
            buttons[i].addEventListener("click", btnDing)
        } else {
            buttons[i].addEventListener("click", addValue(i))
            buttons[i].addEventListener("click", btnAudio)
        }
    }

    function addValue(i) {
        return function() {
            if (buttons[i].innerHTML === '÷') {
                result.innerHTML += '/'
            } else if (buttons[i].innerHTML === 'x') {
                result.innerHTML += '*'
            } else {
                result.innerHTML += buttons[i].innerHTML
            }
        }
    }

    clear.onclick = function() {
        result.innerHTML = ''
    }

    function btnAudio() {
        document.getElementById("click").play()
    }

    function btnDing() {
        document.getElementById("ding").play()
    }

    function calculate(i) {
        return function() {
            var finalRes = result.innerHTML;
            result.innerHTML = eval(finalRes)
        }
    }
}
