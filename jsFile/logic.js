function play(userGuess, computerGuess){
    switch (userGuess.toLowerCase()){
            case "rock":
                switch (computerGuess){
                    case 0:
                        return "Tie";
                       
                    case 1:
                        return "You win!";
                       
                    case 2:
                        return "You lose!";
                }
                break;
            case "paper":
                switch (computerGuess){
                    case 0:
                        return "You win!";
                       
                    case 1:
                        return "You lose!";
                       
                    case 2:
                        return "Tie";
                }
                break;
            case "scissor":
                switch (computerGuess){
                    case 0:
                        return "You lose!";
                       
                    case 1:
                        return "Tie";
                       
                    case 2:
                        return "You win!";
                }
            default:
                return "wrong! word! BITCH!!!";
    }
}

function checkScore(){
    console.log("bar");
    let win = 0;
    let tie = 0;
    let lose = 0;
    for (const index in lst){
        if (lst[index] == 'W'){
            win++;
        } else if (lst[index] == 'L'){
            lose++;
        } else {tie++;}
    }
    if (win>lose){
        winLoseTie = "win";
    } else if (win<lose){
        winLoseTie = "lose";
    } else {
        winLoseTie = "tie";
    }
    return [win, tie, lose, winLoseTie];
}

function checkAndUpdate(){
    let status = document.querySelector(".status");
    result = play(userGuess, computerGuess);
    status.textContent = result;
    switch(result){
        case "You win!":
            lst.push("W");
            break;
        case "You lose!":
            lst.push("L");
            break;
        case "Tie":
            lst.push("T");
            break;
    }
    container.children[lst.length-1].textContent = lst[lst.length-1];
    if (lst.length == 5){
        input.disabled = true;
        btn.disabled = true;
        let [win, tie, lose, winloseTie] = checkScore();
        status.textContent = `End game!!! The final result is you ${winloseTie} with a score of ${win} win, ${lose} lose, ${tie} tie`;
        newGameBtn.style.display = "block";
    }
}



function initialize(){
    computerGuess = Math.floor(Math.random()*3);
    /*
    0: rock
    1: scissor
    2: paper
     */
}   



let input, btn, userGuess, computerGuess, status;
let lst = [];
let container = document.querySelector("#box_container");
let newGameBtn = document.querySelector(".newGame");


//play
console.log(container.children);
btn = document.querySelector("button");
input = document.querySelector("input");
initialize();
btn.addEventListener("click", ()=>{
    userGuess = input.value;
    checkAndUpdate();
    console.log(lst);
    initialize();
    input.value = "";
});

//rematch (new game)
newGameBtn.addEventListener("click", ()=>{
    lst = [];
    let boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.textContent = "";
      });
    input.disabled = false;
    btn.disabled = false;
})


