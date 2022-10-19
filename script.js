//18/10/2022
//Pablo David Puac Garcia
//script for counter increase decrease and reset 
var cont=0;
//function for addition
function addition(){
    const counter=document.getElementById("counter");
    cont++; 
    counter.innerHTML=cont;
}
//function for substraction
function subs(){
    const counter=document.getElementById("counter");
    cont--;
    counter.innerHTML=cont;
}
//function for reset the counter value
function reset(){
    const counter=document.getElementById("counter");
    cont=0;
    counter.innerHTML=cont;
}
