// GIFT OPEN ANIMATION


const gift =
document.getElementById("bigGift");


const openBtn =
document.getElementById("openGiftBtn");



if(openBtn){


openBtn.addEventListener("click",()=>{


gift.classList.add("open");



openBtn.innerHTML=
"✨ Gift Opened ✨";


});


}
// MEMORY GIFT CLICK EFFECT


const memoryGifts =
document.querySelectorAll(".memoryGift");



memoryGifts.forEach((gift)=>{


gift.addEventListener("click",()=>{


gift.classList.toggle("opened");



gift.style.transform=
"scale(1.08)";



setTimeout(()=>{

gift.style.transform="";

},500);



});


});
// LOVE LETTER TYPE EFFECT


const letterButton =
document.getElementById("openLetter");


const letterBox =
document.getElementById("letterBox");


const letterText =
document.getElementById("letterText");



const message =

"You came into my life like a beautiful surprise. \
Thank you for every smile, every conversation and every moment. \
You are someone who makes ordinary days feel special. \
I hope this little world always reminds you how much you mean to me. 💖";



if(letterButton){


letterButton.addEventListener("click",()=>{


letterBox.style.display="block";


let index=0;


letterText.innerHTML="";



function typing(){


if(index < message.length){


letterText.innerHTML += message[index];

index++;

setTimeout(typing,60);


}


}



typing();


});

}
// MUSIC CONTROL


const music =
document.getElementById("bgMusic");


const musicBtn =
document.getElementById("musicBtn");



let playing=false;



if(musicBtn){


musicBtn.addEventListener("click",()=>{


if(!playing){


music.play();


musicBtn.innerHTML=
"🔇 Pause Music";


playing=true;


}

else{


music.pause();


musicBtn.innerHTML=
"🎵 Play Music";


playing=false;


}


});


}
// OPEN MEMORY GIFT


function openMemory(box){


const message =
box.nextElementSibling;


message.classList.toggle("show");



box.innerHTML =
"✨🎁✨";


}
