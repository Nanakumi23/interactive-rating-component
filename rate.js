let button = document.getElementById('btn'); 
let container = document.getElementById('vote-container'); 
let message = document.getElementById('thankYou')
let vote = document.getElementById('black'); 
let vote2 = document.getElementById('black2'); 
let vote3 = document.getElementById('black3'); 
let vote4 = document.getElementById('black4'); 
let vote5 = document.getElementById('black5'); 
let display = document.getElementById('score')
let score; 

let voting = (event)=>{
    let hasVoted = false;
      if (!hasVoted) {
        event.target.style.backgroundColor = 'blue';
        score = event.target.innerHTML; 
        display.textContent= score;
        
        hasVoted = true;
        vote.removeEventListener('click', voting);
        vote2.removeEventListener('click', voting);
        vote3.removeEventListener('click', voting);
        vote4.removeEventListener('click', voting);
        vote5.removeEventListener('click', voting);
        
       
      }
    };
let undoColor = ()=>{
    vote.style.backgroundColor= 'white';
    vote2.style.backgroundColor= 'white';
    vote3.style.backgroundColor= 'white';
    vote4.style.backgroundColor= 'white';
    vote5.style.backgroundColor= 'white';

    vote.addEventListener('click',voting);
 vote2.addEventListener('click',voting);
 vote3.addEventListener('click',voting);
 vote4.addEventListener('click',voting);
 vote5.addEventListener('click',voting);
 message.style.display='block'
  container.style.display='none'
}



 vote.addEventListener('click',voting);
 vote2.addEventListener('click',voting);
 vote3.addEventListener('click',voting);
 vote4.addEventListener('click',voting);
 vote5.addEventListener('click',voting);
 

 button.addEventListener('click', undoColor);