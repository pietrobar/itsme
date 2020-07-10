const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const textArray = ["Hi, my name is Pietro Barone", "Let me introduce myself."];
const typingDelay = 100;
const deleteDelay = 10;
const newTextDelay = 1500;
let textArrayIndex = 0;
let charIndex = 0;

var howMany=0;

function type(){
    if(charIndex < textArray[textArrayIndex].length){
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }else{
        if (howMany<1)
        setTimeout(erase, newTextDelay);
        howMany++;
    }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, deleteDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded",function() {
    setTimeout(type, newTextDelay)
})



