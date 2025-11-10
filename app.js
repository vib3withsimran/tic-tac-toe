let boxes = document.querySelectorAll('#box');
let resetbtn = document.querySelector('#reset');
let msgContainer = document.querySelector('.msg-container');
let NewGame = document.querySelector('#New-btn');
let msg = document.querySelector('#msg');
let turn = document.querySelector(".playerturn");
let turn0 = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
let count = 0;
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log("box was clicked");
        if(turn0){
            box.innerText = 'O';
            box.style.color = '#3b4e4e';
            turn0 = false;
            turn.innerHTML = `<p>Turn: Player X </p>`;
        }     
        else{
            box.innerText = 'X';
            turn0 = true;
            turn.innerHTML = `<p>Turn: Player O </p>`;
        }
        box.disabled = true;
        checkWin(); 
    });
    box.addEventListener('click', (event) => {
        count++;
        console.log("count is: " + count);
        if(count === 9 && msgContainer.classList.contains('hide')){
        showDraw();}
});
});

const DisableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
}
const showWinner = (winner) => {
    msg.innerText = 'Congratulations! Winner  is Player ' + winner;
    msgContainer.classList.remove('hide');
    DisableBoxes();
}

const showDraw = () => {
    msg.innerText = 'Game is Drawn!';
    msgContainer.classList.remove('hide');
    DisableBoxes();
}

       
const checkWin = () => {
    for(let pattern of winPatterns){
       
       if(boxes[pattern[0]].innerText === boxes[pattern[1]].innerText && 
          boxes[pattern[1]].innerText === boxes[pattern[2]].innerText && 
          boxes[pattern[0]].innerText !== ''){
            showWinner(boxes[pattern[0]].innerText);
       }
       
    }
}

 Game = () =>{
    boxes.forEach((box) => {
        box.innerText = '';
        box.disabled = false;
    });
    turn0 = true;
    msgContainer.classList.add('hide');
}

NewGame.addEventListener('click', () => {
    Game();
});

resetbtn.addEventListener('click', () => {
    Game();
    turn.innerHTML = ` .`;
});

