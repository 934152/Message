/* Requirements
user types message into input box
user can then press submit button
the message should then display below the input box

*/

//setup variables of elements we need

const input = document.getElementById('input-box');
let display = document.querySelector('.display');
const submit_btn = document.querySelector('.submit-btn')
const icon = document.getElementById('message-icon')

//setup event listener for submit button
 submit_btn.addEventListener('click', function(){
    console.log('You clicked the submit button.');
    addDisplay();
    removeText();
 });

 //setup function to "grab" the input and then display
function addDisplay(){
    let text = input.value;
    display.innerHTML = text;
};

//add event listener for enter key so that user can submit using enter key
document.addEventListener('keypress', function(e){
    if (e.key === 'Enter'){
        console.log("You clicked Enter");
        addDisplay();
        removeText();
    }
});

//create function to remove text from input field so it is clear for a new message
function removeText(){
    let clearText = input.value="";
    return clearText;
};

//setup mouseover event 
icon.addEventListener('mouseover', function(){
    alert("Type a message for everyone to see!!");
});