var board = document.querySelectorAll(".box");
var reset = document.querySelector("#reset");
var message = document.querySelector("#message")
var gameOver;
var player;
var winCondition = [[0,1,2], [3,4,5], [6,7,8],
                       [0,3,6], [1,4,7], [2,5,8],
                       [0,4,8], [6,4,2]];


player = "X"



for(var i = 0; i < board.length; i++){
  board[i].addEventListener("click", function(){
    if(this.textContent === ""){
      this.textContent = player;
      changePlayer();
      message.textContent = player + " turn";
    }
    checkWin();
    
   })  
}

function changePlayer(){
  if(player === "X"){
    player = "O";
  } else if (player === "O"){
    player = "X";
  }
}

function allCheckedX(indexes) {
  return indexes.every(
    function(index, index2){
      return board[index].textContent === "X";
    }
  )
}
function allCheckedO(indexes) {
  return indexes.every(
    function(index, index2){
      return board[index].textContent === "O";
    }
  )
}


function checkWin() {
  if (winCondition.some(allCheckedX)) {
    alert(" X Win");
    message.textContent = " X Wins"
  }
  if (winCondition.some(allCheckedO)) {
    alert(" O Win");
    message.textContent = " O Wins"
  }
}


reset.addEventListener("click", function(){
  for (var i = 0; i < board.length; i++) {
    board[i].textContent = "";
  }
  player = "X";
  message.textContent = player + " turn"
    
})





