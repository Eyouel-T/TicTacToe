var player= 1
var clickedBoxes = {}
var turn = false;
var blank = [[0,0,0],[0,0,0],[0,0,0],
             [0,0,0],[0,0,0],[0,0,0],
             [0,0,0],[0,0,0],[0,0,0],] 

function turnGiver(){
    if(turn){
        document.querySelector("body").setAttribute("style", "background-color: red;");

        turn = !turn;
        document.querySelector("#player").innerHTML = "<h1> player 1's turn</h1>"
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
        document.querySelector("#player").innerHTML = "<h1> player 2's turn</h1>"
        if(player==1){
            player=2
        }
        else if(player==2){
            player=1
        }
    }

}
function marked(row, column , player){
    alert(row + " "+ column + " "+ player);
    blank[row][column]=player;
    alert(blank);
    winChecker();
}
function winChecker(){
    alert("test win checker after a move");
    for(var i=0; i<3;i++){
        console.log(i);
        if((blank[i][0] == blank[i][1])&&(blank[i][1]==blank[i][2])&&(blank[i][2]!=0)){
            alert("all im saying is "+ blank[i][0]+ '='+blank[i][1]+ '='+blank[i][2]+"and they are not = 0");
            alert("player: "+  blank[i][1] +"is the winner: "+ i);
            return true
        }
        else if((blank[0][i] == blank[1][i])&&(blank[1][i]==blank[2][i])&&(blank[2][i]!=0)){
            alert("all im saying is "+ blank[i][0]+ '='+blank[i][1]+ '='+blank[i][2]+"and they are not = 0");
            alert("player: "+  blank[i][1] +"is the winner: "+ i);
            return true
        }
    }
    if(blank[0][0]==blank[1][1]==blank[2][2]!=0){
        alert("player: "+ player +"is the winner: ");
        return true
    }
    else if(blank[2][0]==blank[1][1]==blank[0][2]!=0){
        alert("player: "+ player +"is the winner: ");
        return true
    }

    return false
}
document.querySelector("#one").onclick = function(){
    
    if(turn){
    document.querySelector("#one").setAttribute("style", "background-color: green;")
    }
    else{
        document.querySelector("#one").setAttribute("style", "background-color: white;")
    }
    marked(0,0,player);
    turnGiver();
}

document.querySelector("#two").onclick = function(){
    
    if(turn){
    document.querySelector("#two").setAttribute("style", "background-color: green;")
    }
    else{
        document.querySelector("#two").setAttribute("style", "background-color: white;")
    }
    marked(0,1,player);
    turnGiver();
}

document.querySelector("#three").onclick = function(){
 
    if(turn){
        document.querySelector("#three").setAttribute("style", "background-color: green;")
        }
        else{
            document.querySelector("#three").setAttribute("style", "background-color: white;")
        }
        marked(0,2,player);
        turnGiver();
}

document.querySelector("#four").onclick = function(){
    
    if(turn){
        document.querySelector("#four").setAttribute("style", "background-color: green;")
        }
        else{
            document.querySelector("#four").setAttribute("style", "background-color: white;")
        }
        marked(1,0,player);
        turnGiver();
}

document.querySelector("#five").onclick = function(){

    if(turn){
        document.querySelector("#five").setAttribute("style", "background-color: green;")
        }
        else{
            document.querySelector("#five").setAttribute("style", "background-color: white;")
        }
        marked(1,1,player);
        turnGiver();
}

document.querySelector("#six").onclick = function(){
  
    if(turn){
        document.querySelector("#six").setAttribute("style", "background-color: green;")
        }
        else{
            document.querySelector("#six").setAttribute("style", "background-color: white;")
        }
        marked(1,2,player);
        turnGiver();
}

document.querySelector("#seven").onclick = function(){
 
    if(turn){
        document.querySelector("#seven").setAttribute("style", "background-color: green;")
        }
        else{
            document.querySelector("#seven").setAttribute("style", "background-color: white;")
        }
        marked(2,0,player);
        turnGiver();
}

document.querySelector("#eight").onclick = function(){

    if(turn){
        document.querySelector("#eight").setAttribute("style", "background-color: green;")
        }
        else{
            document.querySelector("#eight").setAttribute("style", "background-color: white;")
        }
        marked(2,1,player);
        turnGiver();
}

document.querySelector("#nine").onclick = function(){

    if(turn){
        document.querySelector("#nine").setAttribute("style", "background-color: green;")
        }
        else{
            document.querySelector("#nine").setAttribute("style", "background-color: white;")
        }
        marked(2,2,player);
        turnGiver();
}


