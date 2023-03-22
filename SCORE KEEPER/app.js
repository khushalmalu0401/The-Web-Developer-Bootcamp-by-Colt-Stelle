const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton =  document.querySelector('#Reset');
const winningScoreSelect = document.querySelector('#playto')
let winningScore = 3;
let isGameOver = false;

function updateScore(player,oponent){
    if(!isGameOver){
        player.score += 1;
        if(player.score === winningScore){
            isGameOver = true;
            player.display.classList.add('has-text-success');
            oponent.display.classList.add('has-text-danger');
            player.button.disabled=true;
            oponent.button.disabled=true;
        }
        player.display.textContent = player.score;
    }
}
p1.button.addEventListener('click',function(){
    updateScore(p1,p2)
})
p2.button.addEventListener('click',function(){
    updateScore(p2,p1)
})

winningScoreSelect.addEventListener('change',function(){
    winningScore = parseInt(this.value);
    reset();
})
resetButton.addEventListener('click', reset)
function reset(){
    isGameOver = false;
    
    p1.score = 0;
    p2.score = 0;
    p1.display.textContent = 0;
    p2.display.textContent = 0;
    p1.display.classList.remove('has-text-success','has-text-danger');
    p2.display.classList.remove('has-text-success','has-text-danger');
    p1.button.disabled=false;
    p2.button.disabled=false;
}