function setUp(){
    let computerGuess = Math.floor(Math.random()*3);
    /*
    0: rock
    1: scissor
    2: paper
     */
    let userGuess = prompt("Put your choice here: ");
    switch (userGuess.toLowerCase()){
        case "rock":
            switch (computerGuess){
                case 0:
                    alert("Draw");
                    break;
                case 1:
                    alert("You win!");
                    break;
                case 2:
                    alert("You lose!");
            }
            break;
        case "paper":
            switch (computerGuess){
                case 0:
                    alert("You win!");
                    break;
                case 1:
                    alert("You lose!");
                    break;
                case 2:
                    alert("Draw");
            }
            break;
        case "scissor":
            switch (computerGuess){
                case 0:
                    alert("You lose!");
                    break;
                case 1:
                    alert("Draw");
                    break;
                case 2:
                    alert("You win!");
            }
        default:
            alert("wrong word my friend! (rock, scissor, paper)")
    }
}
setUp()
