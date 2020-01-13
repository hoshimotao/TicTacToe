$(document).ready(function(){
  let player1 = "X"
  let player2 = "O"

  let turn = 1;
  let movesMade = 0

  let box = $(".box");
  box.on("click", function(e){ 
    
    movesMade++;

    if(turn === 1){
      // dynamically insert player 1 "X" into box //
      e.target.innerHTML = player1;
      e.target.style.color="red";
      turn++
    }
    else{
      e.target.innerHTML = player2;
      e.target.style.color="blue";
      turn--;
    }
    console.log(e, "Suh dude")
  })

})

 


