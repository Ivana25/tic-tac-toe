let currentPlayer; 
let xwins = 0
let owins = 0

function begin(){
    currentPlayer = "O"
    
}

function newMove(column){
    column.innerHTML = currentPlayer;
    if (checkWin()==='X'){
        xwins ++
        alert("X wins! " + xwins)
  } if (checkWin()==='O'){
        owins ++
        alert("O wins! " + owins)
    }
    changePlayer();
}

function changePlayer() {
    if (currentPlayer == "O") {
        currentPlayer = "X";
    } else {
        currentPlayer = "O";
    }
}

function checkWin(){
    
    if($("#c1").html() === $('#c2').html() && $('#c2').html() === $("#c3").html() && $('#c1').html() != ''){
        return(currentPlayer)
    }

    if($("#c4").html() === $('#c5').html() && $('#c5').html() === $("#c6").html() && $('#c4').html() != ''){
        return(currentPlayer)
}
    if($("#c7").html() === $('#c8').html() && $('#c8').html() === $("#c9").html() && $('#c7').html() != ''){
        return(currentPlayer)
}
    if($("#c1").html() === $('#c4').html() && $('#c4').html() === $("#c7").html() && $('#c1').html() != ''){
        return(currentPlayer)
}
    if($("#c2").html() === $('#c5').html() && $('#c5').html() === $("#c8").html() && $('#c2').html() != ''){
        return(currentPlayer)
}
    if($("#c3").html() === $('#c6').html() && $('#c6').html() === $("#c9").html() && $('#c3').html() != ''){
        return(currentPlayer)
}
    if($("#c1").html() === $('#c5').html() && $('#c5').html() === $("#c9").html() && $('#c1').html() != ''){
        return(currentPlayer)
}
    if($("#c3").html() === $('#c5').html() && $('#c5').html() === $("#c7").html() && $('#c3').html() != ''){
        return(currentPlayer)
}
}
$(".resetButton").click(function() {
    $("#clickCount").html((counter = 0));
  });