let userScore = 0;
let compScore = 0;
const finaluser = document.querySelector('#userscore');
const finalcomp = document.querySelector('#compscore');


const choices=document.querySelectorAll(".images")
const msg = document.querySelector('.msg-container')
const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
}

const drawGame = () => {
    console.log("Draw");
    msg.innerText = "Draw!"
    msg.style.backgroundColor ="blue";
}

const  showWinner = (userWin,userChoice,compChoice) => {
    if(userWin)
    {
        userScore++;
        finaluser.innerText= userScore;
        console.log('You Win!');
        msg.innerText = "You Win!"
        msg.style.backgroundColor ="green";
    }
    else{
        compScore++;
        finalcomp.innerText= compScore;
        console.log('You Lose!');
        msg.innerText = "Computer Win!"
        msg.style.backgroundColor ="red";
    }
}

const playgame = (userChoice) =>{
    console.log("user choice = ", userChoice);
    //Computer Choice
    const compChoice = genCompChoice();
    console.log("Computer choice =",compChoice);
    //Logic Build
    if(userChoice===compChoice)
    {
        drawGame();
        var result = document.createElement('p');
        result.setAttribute('class','finals');
        result.innerText=`Computer Choice = ${compChoice} || Your Choice = ${userChoice}`;
        (document.querySelector('footer')).prepend(result);
    }
    else{
        let userWin = true;
        if(userChoice === 'rock')
        {
            userWin = compChoice=== 'paper' ? false : true ;
        }
       else if(userChoice === 'paper')
        {
            userWin = compChoice=== 'scissor' ? false : true ;
        }
       else
        {
            userWin = compChoice=== 'rock' ? false : true ;
        }
      showWinner(userWin,userChoice,compChoice);
      var result = document.createElement('p');
      result.setAttribute('class','finals');
      result.innerText=`Computer Choice = ${compChoice} || Your Choice = ${userChoice}`;
      (document.querySelector('footer')).prepend(result);
    }
};

choices.forEach((images) => {
images.addEventListener('click',() => {
    const userChoice = images.getAttribute('id')
    playgame(userChoice)
   });
});

