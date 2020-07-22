function InitGame() {
    let lvl = document.getElementById('level');
    let lvlCount = 1;
    let score = document.getElementById('score'); 
    let scorePoints = lvlCount*100;
    let tableCells = document.querySelectorAll('.game-field_cells'); 

    for (let i = 0; i < 10; i++) {
       let randomNum = Math.floor((Math.random() * 10) + 5); 
       let colouredFields = tableCells[randomNum]
       colouredFields.classList.toggle('selectedCell');
       
    function hideCell(){
        colouredFields.style.backgroundColor='#182faf';
    }
    setTimeout(hideCell, 10000/lvlCount);

    }

    Array.from(tableCells, el => el.addEventListener('click', e => {
       if(el.classList.contains('selectedCell')){ 
        scorePoints+=lvlCount*100;
        el.style.backgroundColor='#691f59';
        el.classList.add('match');
       } else{
        scorePoints-=lvlCount*100;
       }
       score.innerHTML=`${scorePoints}`;

       let match = document.querySelectorAll('.match');
       let itemsToGuess = document.querySelectorAll('.selectedCell');
       if(match.length === itemsToGuess.length) {
           document.getElementById('message').style.display='block';
            if(lvlCount<10){
            lvlCount++;
            lvl.innerHTML=`${lvlCount}`;  
                   } else {
               lvlCount = 0;
               alert('Game over');
           }
       }
    }));
    
}
export default InitGame;