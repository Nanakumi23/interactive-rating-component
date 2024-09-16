let button = document.getElementById('btn'); 
let message = document.getElementById('thankYou')
let vote = document.getElementById('black'); 
let vote2 = document.getElementById('black2'); 
let vote3 = document.getElementById('black3'); 
let vote4 = document.getElementById('black4'); 


let voting = (event)=>{
  let ans;
    if(event.target.id == vote.id){
       
            vote.style.backgroundColor='blue'
        } 

    else if(event.target.id == vote2.id){
       vote2.style.backgroundColor='blue'}
    else if(event.target.id == vote3.id){
            vote3.style.backgroundColor='blue'}
    else if(event.target.id == vote4.id){
            vote4.style.backgroundColor='blue'}
   
    }
// let action = (event)=>{
//     // Hide thank you message
//    event.target.style.backgroundColor= 'white'
    
// }xs

 vote.addEventListener('click',voting);
 vote2.addEventListener('click',voting);
 vote3.addEventListener('click',voting);
 vote4.addEventListener('click',voting);
// button.addEventListener('click', action);