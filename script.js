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
