/* ==========================================
KUNNU'S LITTLE WORLD
JAVASCRIPT PART 1
========================================== */


/* ==========================================
LOADING GIFT SCREEN
========================================== */


const openGiftBtn = document.getElementById("openGift");

const loadingScreen = document.getElementById("loadingScreen");


if(openGiftBtn){

openGiftBtn.addEventListener("click",()=>{


loadingScreen.style.opacity="0";

loadingScreen.style.transform="scale(0.8)";


setTimeout(()=>{

loadingScreen.style.display="none";


document.body.style.overflow="auto";


},1000);


});

}


/* ==========================================
SMOOTH PAGE ENTRY
========================================== */


window.addEventListener("load",()=>{


document.body.style.opacity="1";


});


/* ==========================================
FLOATING HEART GENERATOR
========================================== */


function createHeart(){


const heart=document.createElement("div");


heart.className="floatingHeart";


heart.innerHTML="💖";


heart.style.left=Math.random()*100+"vw";


heart.style.animationDuration=

(4+Math.random()*4)+"s";


document.body.appendChild(heart);



setTimeout(()=>{

heart.remove();

},8000);


}



setInterval(createHeart,1200);



/* ==========================================
SPARKLE GENERATOR
========================================== */


function createSparkle(){


const sparkle=document.createElement("div");


sparkle.innerHTML="✨";


sparkle.style.position="fixed";

sparkle.style.left=Math.random()*100+"vw";

sparkle.style.top=Math.random()*100+"vh";

sparkle.style.fontSize="25px";


sparkle.style.animation="sparkleMove 3s linear";


sparkle.style.pointerEvents="none";


document.body.appendChild(sparkle);



setTimeout(()=>{

sparkle.remove();

},3000);


}
/* ==========================================
GIFT OPENING ANIMATION
========================================== */


const gifts = document.querySelectorAll(".giftCard");


gifts.forEach((gift)=>{


gift.addEventListener("click",()=>{


gift.classList.toggle("opened");


});


});



/* ==========================================
LETTER REVEAL
========================================== */


const letterButton = document.querySelector(".letterButton");

const letterBox = document.querySelector(".letterCard");


if(letterButton && letterBox){


letterButton.addEventListener("click",()=>{


letterBox.style.display="block";


letterBox.style.animation="fadeUp 1s ease";


});


}



/* ==========================================
SURPRISE MESSAGE
========================================== */


const surpriseBtn=document.querySelector(".surpriseBtn");


if(surpriseBtn){


surpriseBtn.addEventListener("click",()=>{


alert(

"💖 Kunnu, you are my favourite person. Thank you for being my happiness 🌸"

);


});


}



/* ==========================================
SCROLL REVEAL
========================================== */


const sections=document.querySelectorAll("section");


window.addEventListener("scroll",()=>{


sections.forEach((section)=>{


const position=

section.getBoundingClientRect().top;


if(position < window.innerHeight-100){


section.classList.add("reveal");


}


});


});



/* ==========================================
CLICK HEART EFFECT
========================================== */


document.addEventListener("click",(e)=>{


const heart=document.createElement("span");


heart.innerHTML="💗";


heart.style.position="fixed";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

heart.style.fontSize="25px";

heart.style.pointerEvents="none";


heart.style.animation="heartFloat 1.5s ease";


document.body.appendChild(heart);



setTimeout(()=>{


heart.remove();


},1500);



});
/* ==========================================
MUSIC TOGGLE
========================================== */


const musicBtn = document.querySelector(".musicButton");

const music = document.querySelector("#bgMusic");


if(musicBtn && music){


musicBtn.addEventListener("click",()=>{


if(music.paused){


music.play();


musicBtn.innerHTML="⏸️ Pause Music";


}

else{


music.pause();


musicBtn.innerHTML="🎵 Play Music";


}


});


}



/* ==========================================
TYPING LETTER EFFECT
========================================== */


const typingText=document.querySelector(".typing");


if(typingText){


const text=typingText.innerHTML;


typingText.innerHTML="";


let index=0;


function typeWriter(){


if(index < text.length){


typingText.innerHTML += text.charAt(index);


index++;


setTimeout(typeWriter,70);


}


}


typeWriter();


}



/* ==========================================
FINAL SURPRISE REVEAL
========================================== */


const finalBtn=document.querySelector(".finalButton");

const finalBox=document.querySelector(".finalCard");


if(finalBtn && finalBox){


finalBtn.addEventListener("click",()=>{


finalBox.style.display="block";


finalBox.classList.add("animateSection");


});


}



/* ==========================================
MOON ENDING EFFECT
========================================== */


function createStar(){


const star=document.createElement("span");


star.innerHTML="⭐";


star.style.position="fixed";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*40+"vh";

star.style.fontSize="20px";


star.style.animation="twinkle 3s infinite";


document.body.appendChild(star);



setTimeout(()=>{


star.remove();


},5000);


}


setInterval(createStar,1000);



/* ==========================================
FINAL MESSAGE POPUP
========================================== */


function showLoveMessage(){


const message=document.createElement("div");


message.innerHTML=

"🌸 Thank you for being my special person 💖";


message.style.position="fixed";

message.style.bottom="30px";

message.style.left="50%";

message.style.transform="translateX(-50%)";

message.style.padding="20px 35px";

message.style.background="white";

message.style.borderRadius="50px";

message.style.boxShadow="0 10px 30px rgba(255,105,180,.3)";

message.style.zIndex="9999";


document.body.appendChild(message);



setTimeout(()=>{


message.remove();


},4000);


}

/* ==========================================
SAKURA PETAL GENERATOR
========================================== */


function createPetal(){


const petal=document.createElement("div");


petal.innerHTML="🌸";


petal.style.position="fixed";

petal.style.top="-30px";

petal.style.left=Math.random()*100+"vw";

petal.style.fontSize=

(15+Math.random()*25)+"px";


petal.style.animation=

"petalFall 8s linear";


petal.style.pointerEvents="none";

petal.style.zIndex="5";


document.body.appendChild(petal);



setTimeout(()=>{


petal.remove();


},8000);


}


setInterval(createPetal,900);



/* ==========================================
BUTTERFLY EFFECT
========================================== */


function createButterfly(){


const butterfly=document.createElement("div");


butterfly.innerHTML="🦋";


butterfly.style.position="fixed";

butterfly.style.left=Math.random()*100+"vw";

butterfly.style.top=Math.random()*100+"vh";

butterfly.style.fontSize="35px";

butterfly.style.animation=

"float 5s ease-in-out";


butterfly.style.pointerEvents="none";


document.body.appendChild(butterfly);



setTimeout(()=>{


butterfly.remove();


},5000);


}


setInterval(createButterfly,2500);



/* ==========================================
GIFT OPEN SEQUENCE
========================================== */


const giftBox=document.querySelector(".giftBox");


if(giftBox){


giftBox.addEventListener("click",()=>{


giftBox.style.transform="scale(1.2) rotate(10deg)";


setTimeout(()=>{


giftBox.style.transform="scale(1)";


},500);


});


}



/* ==========================================
MOBILE TOUCH EFFECT
========================================== */


document.addEventListener(
"touchstart",
(e)=>{


const touch=e.touches[0];


const sparkle=document.createElement("span");


sparkle.innerHTML="✨";


sparkle.style.position="fixed";

sparkle.style.left=touch.clientX+"px";

sparkle.style.top=touch.clientY+"px";

sparkle.style.fontSize="25px";

sparkle.style.pointerEvents="none";


document.body.appendChild(sparkle);



setTimeout(()=>{


sparkle.remove();


},1200);


}

);



/* ==========================================
SMOOTH FINISH
========================================== */


window.addEventListener("load",()=>{


document.documentElement.style.scrollBehavior="smooth";


console.log(
"Kunnu's Little World Loaded 💖"
);


});


setInterval(createSparkle,1500);

/* =====================================
REAL GIFT OPENING SCREEN
===================================== */


#giftOpening{

height:100vh;

display:flex;

flex-direction:column;

justify-content:center;

align-items:center;

text-align:center;

background:

linear-gradient(
135deg,
#ffd6ec,
#dff6ff
);

overflow:hidden;

transition:1s;

}



#giftOpening h1{

font-family:'Pacifico',cursive;

font-size:3rem;

color:#ff4fa2;

}



#giftOpening p{

font-size:18px;

margin:20px;

}



/* GIFT */

.realGiftBox{

position:relative;

width:220px;

height:220px;

cursor:pointer;

animation:giftFloat 2s infinite;

}



.giftMain{

position:absolute;

bottom:0;

width:220px;

height:150px;

background:

linear-gradient(
135deg,
#ff69b4,
#ffb6d9
);

border-radius:20px;

display:flex;

align-items:center;

justify-content:center;

font-size:80px;

box-shadow:

0 20px 50px rgba(255,105,180,.4);

}



.giftLidReal{

position:absolute;

top:20px;

width:220px;

height:45px;

background:#ff4fa2;

border-radius:20px;

z-index:2;

transition:.8s;

}



.giftRibbon{

position:absolute;

left:95px;

bottom:0;

width:30px;

height:220px;

background:#fff;

z-index:3;

}



@keyframes giftFloat{

50%{

transform:translateY(-20px);

}

}



/* OPEN ANIMATION */


.openGift .giftLidReal{

transform:

translateY(-90px)
rotate(-20deg);

}



.openGift{

animation:none;

}



.hideGift{

opacity:0;

transform:scale(1.5);

pointer-events:none;

}



.sparkles{

font-size:35px;

animation:sparkleRotate 3s infinite;

}



@keyframes sparkleRotate{

50%{

transform:scale(1.3);

}

}
