const starsE1 = document.querySelectorAll(".fa-star")
const emojisE1 = document.querySelectorAll(".far")

updateRating(0);
starsE1.forEach((starsE1, index) => {
    starsE1.addEventListener("click", () => {

        console.log("basildi", index + "-ye");
        updateRating(index)
    });
});


function updateRating(index) {
    starsE1.forEach((starsE1, hhh) => {
        if (hhh < index + 1) {
            starsE1.classList.add("active");
        } else {
            starsE1.classList.remove("active");
        }

    });



emojisE1.forEach((emojiE1) => {
    emojiE1.style.transform = `translateX(-${50*index}px)`;
})
}