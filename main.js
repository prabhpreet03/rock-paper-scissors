let rockButton = document.getElementById('1');
let paperButton = document.getElementById('2');
let scissorButton = document.getElementById('3');
let selected = document.getElementById('selected');
let given = document.getElementById('given');
let resetBtn = document.getElementById('reset-btn')
let againBtn = document.getElementById('again-btn')
let player1count = document.getElementById('player1count');
let player2count = document.getElementById('player2count');

p1count = 0;
p2count = 0;

function hideAllButtons(){
    rockButton.style.visibility = 'hidden';
    paperButton.style.visibility = 'hidden';
    scissorButton.style.visibility = 'hidden';
}
function viewAllButtons(){
    rockButton.style.visibility = 'visible';
    paperButton.style.visibility = 'visible';
    scissorButton.style.visibility = 'visible';
}
function scoreUp(){
    if(selected.innerHTML === 'ROCK' && given.innerHTML === 'SCISSOR'){
        p1count++;
        player1count.innerHTML = p1count;
    }
    if(selected.innerHTML === 'PAPER' && given.innerHTML === 'ROCK'){
        p1count++;
        player1count.innerHTML = p1count;
    }
    if(selected.innerHTML === 'SCISSOR' && given.innerHTML === 'PAPER'){
        p1count++;
        player1count.innerHTML = p1count;
    }
    if(given.innerHTML === 'ROCK' && selected.innerHTML === 'SCISSOR'){
        p2count++;
        player2count.innerHTML = p2count;
    }
    if(given.innerHTML === 'PAPER' && selected.innerHTML === 'ROCK'){
        p2count++;
        player2count.innerHTML = p2count;
    }
    if(given.innerHTML === 'SCISSOR' && selected.innerHTML === 'PAPER'){
        p2count++;
        player2count.innerHTML = p2count;
    }
}
    rockButton.addEventListener('click',()=>{
        selected.innerHTML = 'ROCK';
        given.innerHTML = randomizer();
        hideAllButtons();
        scoreUp();
    })
    paperButton.addEventListener('click',()=>{
        selected.innerHTML = 'PAPER';
        given.innerHTML = randomizer();
        hideAllButtons();
        scoreUp();
    })
    scissorButton.addEventListener('click',()=>{
        selected.innerHTML = 'SCISSOR';
        given.innerHTML = randomizer();
        hideAllButtons();
        scoreUp();
    })

let options = ['ROCK', 'PAPER', 'SCISSORS']
function randomizer(){
    return options[Math.floor(Math.random()*Math.floor(3))];
}

resetBtn.addEventListener('click', ()=>{
    viewAllButtons();
    p1count = 0;
    player1count.innerHTML = p1count;
    p2count = 0;
    player2count.innerHTML = p2count;
    given.innerHTML = '';
    selected.innerHTML = '';
})

againBtn.addEventListener('click',()=>{
    viewAllButtons();
})
