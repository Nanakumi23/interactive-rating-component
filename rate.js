let button = document.getElementById('btn'); 
let message = document.getElementById('thankYou')
let vote = document.getElementById('black'); 
let vote2 = document.getElementById('black2'); 
let vote3 = document.getElementById('black3'); 
let vote4 = document.getElementById('black4'); 
let vote5 = document.getElementById('black5'); 


let voting = (event)=>{
    let hasVoted = false;
      if (!hasVoted) {
        event.target.style.backgroundColor = 'blue';
        
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
}



 vote.addEventListener('click',voting);
 vote2.addEventListener('click',voting);
 vote3.addEventListener('click',voting);
 vote4.addEventListener('click',voting);
 vote5.addEventListener('click',voting);

 button.addEventListener('click', undoColor);