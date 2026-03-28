const passwordBox=document.getElementById("password");
const lengthSlider=document.getElementById("length");
const lengthValue=document.getElementById('lengthValue');

const uppercase=document.getElementById("uppercase");
const numbers=document.getElementById("numbers");
const symbols=document.getElementById("symbols");

const generateBtn=document.getElementById("generate");
const copyBtn=document.getElementById("copy");

const lowerChars = "abcdefghijklmnopqrstuvwxyz"
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numberChars = "0123456789"
const symbolChars = "!@#$%^&*()_+{}[]<>?"
lengthSlider.addEventListener('input',()=>{
    lengthValue.textContent=lengthSlider.value;
})
generateBtn.addEventListener("click",()=>{
    let characters=lowerChars;
    if(uppercase.checked) characters+=upperChars
    if(numbers.checked) characters+=numberChars
    if(symbols.checked) characters+=symbolChars
    let password='';
    for(let i=0; i<lengthSlider.value;i++){
        let randomIndex=Math.floor(Math.random()*characters.length)
        password+=characters[randomIndex]
    }
    passwordBox.value=password;
})
copyBtn.addEventListener("click",()=>{
    alert("Password copied");
    navigator.clipboard.writeText(passwordBox.value)
    copyBtn.textContent="Copied!"
    setTimeout(()=>{
        copyBtn.textContent="copy"
    },1500)
})