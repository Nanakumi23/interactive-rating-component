let button = document.getElementById('btn'); 
let message = document.getElementById('thankYou')
let vote = document.getElementById('black'); 
let vote2 = document.getElementById('black2'); 
let vote3 = document.getElementById('black3'); 
let vote4 = document.getElementById('black4'); 


let voting = (event)=>{
    let hasVoted = false;

   
      if (!hasVoted) {
        event.target.style.backgroundColor = 'blue';
        
        hasVoted = true;
        vote.removeEventListener('click', voting);
        vote2.removeEventListener('click', voting);
        vote3.removeEventListener('click', voting);
        vote4.removeEventListener('click', voting);
      }
    };

// let action = (event)=>{
//     // Hide thank you message
//    event.target.style.backgroundColor= 'white'
    
// }xs

 vote.addEventListener('click',voting);
 vote2.addEventListener('click',voting);
 vote3.addEventListener('click',voting);
 vote4.addEventListener('click',voting);
// button.addEventListener('click', action);