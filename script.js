let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


let generateTarget = () => {
    return Math.floor(Math.random() * 9);  
};


let compareGuesses = (human, computer, target) => {
    const userG = Math.abs(target - human);
    const computerG = Math.abs(target - computer);
    return userG <= computerG;

};


let updateScore = winner => {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
};


function advanceRound() {
    currentRoundNumber += 1;
};

