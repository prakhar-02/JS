const getUserChoice = (userInput) =>{
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
        return userInput
    }
    else{
        console.log("Input Invalid.")
    }
};
const getComputerChoice = () =>{
    switch(Math.floor(Math.random()*2)){
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
};

const determineWinner = (userChoice, computerChoice)=>{
    if(userChoice===computerChoice){
        return "Game is a tie.";
    }
    if(userChoice==='rock'){
        if(computerChoice==='paper'){
            return "Computer Won.";
        }
        else{
            return "You Won!!!";
        }
    }
    if(userChoice==='paper'){
        if(computerChoice==='scissors'){
            return "Computer Won.";
        }
        else{
            return "You Won!!!";
        }
    }
    if(userChoice==='scissors'){
        if(computerChoice==='rock'){
            return "Computer Won.";
        }
        else{
            return "You Won!!!";
        }
    }
};
let playGame = () =>{
    let userChoice = getUserChoice("scissors");
    let computerChoice = getComputerChoice();
    console.log('Computer: '+computerChoice+'\nUser: '+userChoice);
    console.log(determineWinner(userChoice, computerChoice));
}
playGame();