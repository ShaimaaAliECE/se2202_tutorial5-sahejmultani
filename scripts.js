let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game
let control = document.getElementById("Next-lbl")
// use the value stored in the nextPlayer variable to indicate who the next player is
nextPlayer = control.innerHTML 

//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
   var square = document.querySelectorAll("td)");
   let button;
   
   for (let index = 1; index<square.length;index++){
       button = document.createElement("button");
       button.innerHTML = "[ ]"
       button.id = "Button" + index;
       document.getElementById(square[index-1].getAttribute("id").appendChild(button))
   }
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

        event.target.innerHTML = nextPlayer;
        document.getElementById(event.target.id).disabled = true;

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    // Check if the game is over
    if (isGameOver())
    {
        document.getElementById("game-over-lbl").innerHTML = "Game Over";
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
    if (nextPlayer == Button1.innerHTML && nextPlayer == Button2.innerHTML && nextPlayer == Button3.innerHTML){
        alert(nextPlayer + " is the winner!")
    }
    else if(nextPlayer == Button4.innerHTML && nextPlayer == Button5.innerHTML && nextPlayer == Button6.innerHTML){
        alert (nextPlayer + " is the winner!")
    }
    else if(nextPlayer == Button7.innerHTML && nextPlayer == Button8.innerHTML && nextPlayer == Button9.innerHTML){
        alert(nextPlayer + " is the winner!")

    } else if(nextPlayer == Button1.innerHTML && nextPlayer == Button4.innerHTML && nextPlayer == Button7.innerHTML){
        alert(nextPlayer + " is the winner!")

    } else if(nextPlayer == Button2.innerHTML && nextPlayer == Button5.innerHTML && nextPlayer == Button8.innerHTML){
        alert(nextPlayer + " is the winner!")
        
    } else if(nextPlayer == Button3.innerHTML && nextPlayer == Button6.innerHTML && nextPlayer == Button9.innerHTML){
        alert(nextPlayer + " is the winner!")

    } else if(nextPlayer == Button1.innerHTML && nextPlayer == Button5.innerHTML && nextPlayer == Button9.innerHTML){
        alert(nextPlayer + " is the winner!")

    } else if(nextPlayer == Button3.innerHTML && nextPlayer == Button5.innerHTML && nextPlayer == Button7.innerHTML){
        alert(nextPlayer + " is the winner!")
    }

    if (nextPlayer=="X"){
        nextPlayer == "O";
    }
    else 
        nextPlayer == "X";
    control.innerHTML == nextPlayer;
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
    var buttonStatus = document.querySelectorAll("button");
    for (let n = 0; n<buttonStatus.length;n++){
        if (document.getElementById(buttonStatus[n].getAttribute("id").disabled == false)){
            return false
        }
    }
    return true
}
