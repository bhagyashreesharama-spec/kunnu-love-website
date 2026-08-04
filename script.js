// Welcome Message
window.onload = function () {
    setTimeout(() => {
        alert("💖 Welcome to Our Little World 🌸");
    }, 700);
};

// Enter Button
const enterBtn = document.getElementById("enterBtn");

if (enterBtn) {
    enterBtn.addEventListener("click", () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });
    });
}

// Love Letter Button
const letterBtn = document.getElementById("letterBtn");
const letterBox = document.getElementById("letterBox");

if (letterBtn && letterBox) {

    letterBox.style.display = "none";

    letterBtn.addEventListener("click", () => {

        if (letterBox.style.display === "none") {

            letterBox.style.display = "block";

            letterBtn.innerHTML = "💖 Close Letter";

        } else {

            letterBox.style.display = "none";

            letterBtn.innerHTML = "💌 Open My Letter ❤️";

        }

    });

}

// Cute Console Message 😄
console.log("Made with ❤️ for Kunnu");
