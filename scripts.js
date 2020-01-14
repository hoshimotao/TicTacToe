$(document).ready(function(){

  let player1 = "X"
  let player2 = "O"
  let turn = 1;
  let movesMade = 0

  let reset = $(".reset");
  reset.on("click", function(e){
    location.reload();
  })

  let sqr = $(".box");
  sqr.on("click", function(e){ 
    
    movesMade++;

    if(turn === 1){
      // dynamically insert player 1 "X" into box
      e.target.innerHTML = player1;
      e.target.style.color="red";
      turn++
    }
    else{
      e.target.innerHTML = player2;
      e.target.style.color="blue";
      turn--;
    } 
    
    if(checkForWinner()){

      let theWinner = turn === 1 ?player2:player1;
      // declareWinner();
    }

  });

  function checkForWinner(){
    if(movesMade > 4){
      let moves = Array.prototype.slice.call($(".box"));
      let results = moves.map(function(sqr){
        return sqr.innerHTML;
      })

      // Show an array of x's and o's that have been played
      console.log(results)
      
      let winningCombos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ];

      return winningCombos.find(function(combo){
        // compare each combo
        if(results[combo[0]] === "X" && results[combo[1]] === "X" && results[combo[2]] === "X"        
        ||        
        results[combo[3]] === "X" && results[combo[4]] === "X" && results[combo[5]] === "X"        
        ||        
        results[combo[6]] === "X" && results[combo[7]] === "X" && results[combo[8]] === "X"         
        ||        
        results[combo[0]] === "X" && results[combo[3]] === "X" && results[combo[6]] === "X"         
        ||        
        results[combo[1]] === "X" && results[combo[4]] === "X" && results[combo[7]] === "X"         
        ||        
        results[combo[2]] === "X" && results[combo[5]] === "X" && results[combo[8]] === "X" 
        ||        
        results[combo[0]] === "X" && results[combo[4]] === "X" && results[combo[8]] === "X"        
        ||        
        results[combo[2]] === "X" && results[combo[4]] === "X" && results[combo[6]] === "X"){
          
          alert("Player 1 wins")
          return true
        }

        else if(results[combo[0]] === "O" && results[combo[1]] === "O" && results[combo[2]] === "O"        
        ||        
        results[combo[3]] === "O" && results[combo[4]] === "O" && results[combo[5]] === "O"        
        ||        
        results[combo[6]] === "O" && results[combo[7]] === "O" && results[combo[8]] === "O"         
        ||        
        results[combo[0]] === "O" && results[combo[3]] === "O" && results[combo[6]] === "O"         
        ||        
        results[combo[1]] === "O" && results[combo[4]] === "O" && results[combo[7]] === "O"         
        ||        
        results[combo[2]] === "O" && results[combo[5]] === "O" && results[combo[8]] === "O" 
        ||        
        results[combo[0]] === "O" && results[combo[4]] === "O" && results[combo[8]] === "O"         
        ||        
        results[combo[2]] === "O" && results[combo[4]] === "O" && results[combo[6]] === "O"){

          alert("Player 2 Wins!")
          return true
        }
        else{
          return false
        }
      })
    }
  }

})

 


