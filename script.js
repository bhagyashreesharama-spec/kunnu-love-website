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
