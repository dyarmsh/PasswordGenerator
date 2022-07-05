const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.getElementById("pwd1")
let passwordTwo = document.getElementById("pwd2")

let lengthEl = document.getElementById("length-el")

function generatePassword() {

    // resetting dialog box whenever button is pressed
    passwordOne.textContent = ""
    passwordTwo.textContent = ""

    // generating a random index 0 to characters.length
    let length = characters.length
    console.log(length)
    
    for (let i = 0; i < lengthEl.value; i++) {
        let randomIndex1 = Math.floor(Math.random() * length)
        let randomIndex2 = Math.floor(Math.random() * length)
        passwordOne.textContent += characters[randomIndex1]
        passwordTwo.textContent += characters[randomIndex2]
    }  
}