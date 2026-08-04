
// =================================
// OPEN GIFT BUTTON
// =================================


const openGiftBtn = document.getElementById("openGift");

const magicWorld = document.getElementById("magicWorld");



if(openGiftBtn){


openGiftBtn.addEventListener("click",()=>{


magicWorld.scrollIntoView({

behavior:"smooth"

});


});


}






// =================================
// GIFT BOX CLICK EFFECT
// =================================


const gifts = document.querySelectorAll(".memoryGift");



gifts.forEach((gift)=>{


const quote = gift.querySelector(".quote");


quote.style.display="none";



gift.addEventListener("click",()=>{


if(quote.style.display==="none"){


quote.style.display="block";


gift.style.transform="scale(1.08)";


gift.innerHTML += " ✨";


}

else{


quote.style.display="none";


gift.style.transform="scale(1)";


}


});


});






// =================================
// LETTER OPEN
// =================================


const letterButton = document.getElementById("letterButton");

const letterBox = document.getElementById("letterBox");

const letterText = document.getElementById("letterText");



const message = 
"Thank you for being a beautiful part of my life. ❤️ You bring smiles, comfort and happiness. Every little moment with you becomes a special memory. Always keep smiling and remember that you are truly special. 💖";




if(letterButton){


letterButton.addEventListener("click",()=>{


letterBox.style.display="block";


letterText.innerHTML="";


let i=0;



function typing(){


if(i < message.length){


letterText.innerHTML += message.charAt(i);


i++;


setTimeout(typing,40);


}


}



typing();



});

}


 



// =================================
// FINAL SURPRISE
// =================================


const surpriseButton =
document.getElementById("surpriseButton");


const finalMessage =
document.getElementById("finalMessage");



if(surpriseButton){


surpriseButton.addEventListener("click",()=>{


finalMessage.style.display="block";


finalMessage.innerHTML=

"💖 You are one of the most beautiful chapters of my story. Keep smiling always. 🌸";



});


}





// =================================
// SCROLL REVEAL
// =================================


const sections =
document.querySelectorAll("section");



window.addEventListener("scroll",()=>{


sections.forEach((sec)=>{


let position =
sec.getBoundingClientRect().top;



if(position < window.innerHeight - 100){


sec.style.opacity="1";


}


});


});
const openButton =
document.getElementById("openGift");


openButton.addEventListener("click",()=>{


document.querySelector(".magicLocked").style.display="flex";

document.querySelector(".giftLocked").style.display="flex";

document.querySelector(".letterLocked").style.display="flex";

document.querySelector(".finalLocked").style.display="flex";


});
