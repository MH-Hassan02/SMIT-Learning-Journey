function getNumber(num){
    var display = document.getElementById("display")
    display.value += num;
}
function allClear(){
    display.value = ""
}

function deleteCharacter(){
    var display = document.getElementById("display")
    display.value = display.value.slice(0, -1)
}

function getResult(){
    var display1 = document.getElementById("display").value
    console.log("display", display1)
    var result = eval(display1)
    console.log("result", result)
    display.value = result
}