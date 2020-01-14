$(document).ready(function(){

  let player1 = "X"
  let player2 = "O"
  let turn = 1;
  let movesMade = 0

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
      declareWinner();
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
        if(results[combo[0]] !== "" && results[combo[1]] !== "" && results[combo[0]] === results[combo[1]] && 
        results[combo[1]] === results[combo[2]]
        
        ||
        
        results[combo[3]] !== "" && results[combo[4]] !== "" && results[combo[3]] === results[combo[4]] && 
        results[combo[4]] === results[combo[5]]
        
        ||
        
        results[combo[6]] !== "" && results[combo[7]] !== "" && results[combo[6]] === results[combo[7]] && 
        results[combo[7]] === results[combo[8]]
        
        ||
        
        results[combo[0]] !== "" && results[combo[3]] !== "" && results[combo[0]] === results[combo[3]] && 
        results[combo[3]] === results[combo[6]]
        
        ||
        
        results[combo[1]] !== "" && results[combo[4]] !== "" && results[combo[1]] === results[combo[4]] && 
        results[combo[4]] === results[combo[7]]
        
        ||
        
        results[combo[2]] !== "" && results[combo[5]] !== "" && results[combo[2]] === results[combo[5]] && 
        results[combo[5]] === results[combo[8]]

        ||
        
        results[combo[0]] !== "" && results[combo[4]] !== "" && results[combo[0]] === results[combo[4]] && 
        results[combo[4]] === results[combo[8]]
        
        ||
        
        results[combo[2]] !== "" && results[combo[4]] !== "" && results[combo[2]] === results[combo[4]] && 
        results[combo[4]] === results[combo[6]]){
          alert('player 1 wins')
          return true
        }
        else{
          return false
        }
      })
    }
  }

})

 


