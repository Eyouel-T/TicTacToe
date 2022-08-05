var player= 1
var clickedBoxes = []
var turn = false;
var blank = [[0,0,0],[0,0,0],[0,0,0]
             ] 

function turnGiver(){
    if(turn){
        document.querySelector("body").setAttribute("style", "background-color: red;");

        turn = !turn;
        document.querySelector("#player").innerHTML = "<h4> player 1's turn</h4>"
        if(player==1){
            player=2
        }
        else if(player==2){
            player=1
        }
    }
    else{
        document.querySelector("body").setAttribute("style", "background-color: blue;");

        turn = !turn;
        document.querySelector("#player").innerHTML = "<h4> player 2's turn</h4>"
        if(player==1){
            player=2
        }
        else if(player==2){
            player=1
        }
    }

}
function marked(row, column , player){
    blank[row][column]=player;
    winChecker();
}
function winChecker(){

    for(var i=0; i<3;i++){
        console.log(i);
        //check if the any row is the same player, meaning horizontal win
        if((blank[i][0] == blank[i][1])&&(blank[i][1]==blank[i][2])&&(blank[i][2]!=0)){
           
            if(alert( "player"+blank[i][1]+"has won the game")){}
            else    window.location.reload();
        }
        //check if the any column is the same player, meaning vertical win
        else if((blank[0][i] == blank[1][i])&&(blank[1][i]==blank[2][i])&&(blank[2][i]!=0)){
            
            if(alert( "player"+blank[0][i]+"has won the game")){}
            else    window.location.reload();
        }
    }
    //check if the diagonal is the same player, meaning win
    if((blank[0][0] == blank[1][1])&&(blank[1][1]==blank[2][2])&&(blank[2][2]!=0)){
        alert(blank)
        if(alert( "player"+player+"has won the game")){}
        else    window.location.reload();
    }
    //check if the diagonal is the same player, meaning win
    else if((blank[0][2] == blank[1][1])&&(blank[1][1]==blank[2][0])&&(blank[2][0]!=0)){
        alert(blank);
        if(alert( "player"+player+"has won the game")){}
        else    window.location.reload();
    }

    return false
}
// functions for each of the squares
document.querySelector("#one").onclick = function(){

    if (!clickedBoxes.includes("one")){
        
        if(turn){
            document.querySelector("#one").setAttribute("style", "background-image: url('x.png'); background-position: center; background-size:60%; background-repeat:no-repeat; ")
        }
        else{
            document.querySelector("#one").setAttribute("style", "background-image: url('o.png'); background-position: center; background-size:60%; background-repeat:no-repeat; ");
        }
        marked(0,0,player);
        turnGiver();
        clickedBoxes.push("one")
    }
    else{
        alert("please select an unselected box");
    }
}

document.querySelector("#two").onclick = function(){
    if (!clickedBoxes.includes("two")){
    if(turn){
    document.querySelector("#two").setAttribute("style", "background-image: url('x.png'); background-position: center; background-size:60%; background-repeat:no-repeat; ")
    }
    else{
        document.querySelector("#two").setAttribute("style", "background-image: url('o.png'); background-position: center; background-size:60%; background-repeat:no-repeat; ")
    }
    marked(0,1,player);

    turnGiver();
    clickedBoxes.push("two")
}
else{
    alert("please select an unselected box");
}
}

document.querySelector("#three").onclick = function(){
    if (!clickedBoxes.includes("three")){
    if(turn){
        document.querySelector("#three").setAttribute("style", "background-image: url('x.png'); background-position: center; background-size:60%; background-repeat:no-repeat; ")
        }
        else{
            document.querySelector("#three").setAttribute("style", "background-image: url('o.png'); background-position: center; background-size:60%; background-repeat:no-repeat; ")
        }
        marked(0,2,player);
        turnGiver();
        clickedBoxes.push("three")
    }
    else{
        alert("please select an unselected box");
    }
}

document.querySelector("#four").onclick = function(){
    if (!clickedBoxes.includes("four")){
    if(turn){
        document.querySelector("#four").setAttribute("style", "background-image: url('x.png'); background-position: center; background-size:60%; background-repeat:no-repeat; ")
        }
        else{
            document.querySelector("#four").setAttribute("style", "background-image: url('o.png'); background-position: center; background-size:60%; background-repeat:no-repeat; ")
        }
        marked(1,0,player);
        turnGiver();
        clickedBoxes.push("four")
    }
    else{
        alert("please select an unselected box");
    }
}

document.querySelector("#five").onclick = function(){
    if (!clickedBoxes.includes("five")){
    if(turn){
        document.querySelector("#five").setAttribute("style", "background-image: url('x.png'); background-position: center; background-size:60%; background-repeat:no-repeat; ")
        }
        else{
            document.querySelector("#five").setAttribute("style", "background-image: url('o.png'); background-position: center; background-size:60%; background-repeat:no-repeat; ")
        }
        marked(1,1,player);
        turnGiver();
        clickedBoxes.push("five")
    }
    else{
        alert("please select an unselected box");
    }
}

document.querySelector("#six").onclick = function(){
    if (!clickedBoxes.includes("six")){
    if(turn){
        document.querySelector("#six").setAttribute("style", "background-image: url('x.png'); background-position: center; background-size:60%; background-repeat:no-repeat; ")
        }
        else{
            document.querySelector("#six").setAttribute("style", "background-image: url('o.png'); background-position: center; background-size:60%; background-repeat:no-repeat; ")
        }
        marked(1,2,player);
        turnGiver();
        clickedBoxes.push("six")
    }
    else{
        alert("please select an unselected box");
    }
}

document.querySelector("#seven").onclick = function(){
    if (!clickedBoxes.includes("seven")){
    if(turn){
        document.querySelector("#seven").setAttribute("style", "background-image: url('x.png'); background-position: center; background-size:60%; background-repeat:no-repeat; ")
        }
        else{
            document.querySelector("#seven").setAttribute("style", "background-image: url('o.png'); background-position: center; background-size:60%; background-repeat:no-repeat; ")
        }
        marked(2,0,player);
        turnGiver();
        clickedBoxes.push("seven")
    }
    else{
        alert("please select an unselected box");
    }
}

document.querySelector("#eight").onclick = function(){
    if (!clickedBoxes.includes("eight")){
    if(turn){
        document.querySelector("#eight").setAttribute("style", "background-image: url('x.png'); background-position: center; background-size:60%; background-repeat:no-repeat; ")
        }
        else{
            document.querySelector("#eight").setAttribute("style", "background-image: url('o.png'); background-position: center; background-size:60%; background-repeat:no-repeat; ")
        }
        marked(2,1,player);
        turnGiver();
        clickedBoxes.push("eight")
    }
    else{
        alert("please select an unselected box");
    }
}

document.querySelector("#nine").onclick = function(){
    if (!clickedBoxes.includes("nine")){
    if(turn){
        document.querySelector("#nine").setAttribute("style", "background-image: url('x.png'); background-position: center; background-size:60%; background-repeat:no-repeat; ")
        }
        else{
            document.querySelector("#nine").setAttribute("style", "background-image: url('o.png'); background-position: center; background-size:60%; background-repeat:no-repeat; ")
        }
        marked(2,2,player);
        turnGiver();
        clickedBoxes.push("nine")
    }
    else{
        alert("please select an unselected box");
    }
}


