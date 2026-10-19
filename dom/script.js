let title=document.getElementById("title");
let message=document.getElementById("message");
let btn=document.getElementById("btn");

let resetBtn=document.getElementById("reset");

let nameInput=document.getElementById("nameInput");
let greetBtn=document.getElementById("greetBtn");
let greeting=document.getElementById("greeting");



let count =0;

btn.addEventListener("click", function(){
    count++;
    message.textContent="you clicked " + count + " times";
    title.style.color ='blue';
});



// Exercises

resetBtn.addEventListener("click", function(){
    count=0;
    message.textContent="Click the button";
    title.style.color ='black';
});


greetBtn.addEventListener("click", function(){
    if (nameInput.value===""){
        greeting.textContent="Please enter your name.."}
    else{
            greeting.textContent="Hello "+nameInput.value;
            nameInput.value='';}
});