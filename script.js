let choices = ["stone","paper","scissor"];
let playerdisplay = document.getElementById('playerdisplay');
let computerdisplay = document.getElementById('computerdisplay');
let final = document.getElementById('result');
let playerscore = document.getElementById('playerscore');
let computerscore = document.getElementById('computerscore');
let p = 0;
let c = 0;
let playerchoice = (choice)=>{
   
    let computerchoice = choices[Math.floor(Math.random() * 2) + 1];
    if(computerchoice === choice){
        result.textContent = "Your are tie";
    }
    else{
        switch(choice){
            case 'stone':
                result = (computerchoice === 'scissor') ? "You win" : "Your lose";
                break;
            case 'paper':
                result = (computerchoice === 'stone') ? "You win" : "You lose";
                break;
            case 'scissor':
                result = (computerchoice === 'paper') ? "You win" : "You lose";
                break;
        }
        if(result == "You win"){
            p++;

        }
        else{
            c++;
        }
        playerdisplay.textContent = `Player: ${choice}`;
        computerdisplay.textContent = `Computer: ${computerchoice}`;
        final.textContent = result;
        playerscore.textContent = `PlayerScore: ${p}`;
        computerscore.textContent = `ComputerScore: ${c}`;
    }
}

//guess the number
//increase and decrease the number
//get two number and display with addition
//check property 
//guess the number with only js 
//temperatur conversion
//Roll the dice 
//digital clock
//stopwatch
//calculator
//stone paper scissor


