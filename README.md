# TicTacToe
Classic Tic-Tac-Toe game. Go head to head with your oppenent in this throwback strategy game!

Really wanted to challenge myself with CSS concepts by not using Bootstrap for the modal. 
Lessons learned: 

- Use media queries to ensure mobile responsiveness.
- Use window.reload() to reload a page. (unless you're using React.js)
- Javascript doesn't like class names so be sure to set an HTML class as a variable in order to change it later:

    Example ===>   var reset = $(".reset");
  
- Always remember that var is global.
- document.getElementById("<ID>") is a great way to save time and space by setting it to a variable.
- Have a modal appear if its default display is "none" by doing the following:
  
    modal.style.display = "block"; 
    
- Do this within a function that executes on an event.
  


