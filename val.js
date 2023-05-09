function vali() 
var lowerCaseLetters = /[a-z]/g;
if(document.getElementById("psw").value.match(lowerCaseLetters)) {  
    document.getElementById("letter").classList.remove("invalid");
    document.getElementById("letter").classList.add("valid");
} else {
            letter.classList.remove("valid");
            letter.classList.add("invalid");
        }
function vali() 
var capitalLetters = /[A-Z]/g;
if(document.getElementById("psw").value.match(capitalLetters)) {  
    document.getElementById("capital").classList.remove("invalid");
    document.getElementById("capital").classList.add("valid");
}       else {
                letter.classList.remove("valid");
                letter.classList.add("invalid");
            }

function vali() 
var number = /[0-9]/g;
if(document.getElementById("psw").value.match(number)) {  
    document.getElementById("number").classList.remove("invalid");
    document.getElementById("number").classList.add("valid");
}       else {
                letter.classList.remove("valid");
                letter.classList.add("invalid");
            }

function vali() 
var length = /[8,]/g;
if(document.getElementById("psw").value.match(length)) {  
    document.getElementById("length").classList.remove("invalid");
    document.getElementById("length").classList.add("valid");
} else {
            letter.classList.remove("valid");
            letter.classList.add("invalid");
        }