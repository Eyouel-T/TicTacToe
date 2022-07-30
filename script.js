


var player= 1
var clickedBoxes = {}
var turn = false;
function turnGiver(){
    if(turn){
        document.querySelector("body").setAttribute("style", "background-color: red;");

        turn = !turn;
        document.querySelector("#player").innerHTML = "<h1> player 1's turn</h1>"
    }
    else{
        document.querySelector("body").setAttribute("style", "background-color: blue;");

        turn = !turn;
        document.querySelector("#player").innerHTML = "<h1> player 2's turn</h1>"
    }

}
document.querySelector("#one").onclick = function(){
    turnGiver();
    if(turn){
    document.querySelector("#one").setAttribute("style", "background-color: green;")
    }
    else{
        document.querySelector("#one").setAttribute("style", "background-color: white;")
    }
}

document.querySelector("#two").onclick = function(){
    turnGiver();
    if(turn){
    document.querySelector("#two").setAttribute("style", "background-color: green;")
    }
    else{
        document.querySelector("#two").setAttribute("style", "background-color: white;")
    }
}

document.querySelector("#three").onclick = function(){
    turnGiver();
    if(turn){
        document.querySelector("#three").setAttribute("style", "background-color: green;")
        }
        else{
            document.querySelector("#three").setAttribute("style", "background-color: white;")
        }
}

document.querySelector("#four").onclick = function(){
    turnGiver();
    if(turn){
        document.querySelector("#four").setAttribute("style", "background-color: green;")
        }
        else{
            document.querySelector("#four").setAttribute("style", "background-color: white;")
        }
}

document.querySelector("#five").onclick = function(){
    turnGiver();
    if(turn){
        document.querySelector("#five").setAttribute("style", "background-color: green;")
        }
        else{
            document.querySelector("#five").setAttribute("style", "background-color: white;")
        }
}

document.querySelector("#six").onclick = function(){
    turnGiver();
    if(turn){
        document.querySelector("#six").setAttribute("style", "background-color: green;")
        }
        else{
            document.querySelector("#six").setAttribute("style", "background-color: white;")
        }
}

document.querySelector("#seven").onclick = function(){
    turnGiver();
    if(turn){
        document.querySelector("#seven").setAttribute("style", "background-color: green;")
        }
        else{
            document.querySelector("#seven").setAttribute("style", "background-color: white;")
        }
}

document.querySelector("#eight").onclick = function(){
    turnGiver();
    if(turn){
        document.querySelector("#eight").setAttribute("style", "background-color: green;")
        }
        else{
            document.querySelector("#eight").setAttribute("style", "background-color: white;")
        }
}

document.querySelector("#nine").onclick = function(){
    turnGiver();
    if(turn){
        document.querySelector("#nine").setAttribute("style", "background-color: green;")
        }
        else{
            document.querySelector("#nine").setAttribute("style", "background-color: white;")
        }
}


