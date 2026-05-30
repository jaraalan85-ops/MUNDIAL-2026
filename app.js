const enterBtn = document.getElementById("enterBtn");
const intro = document.getElementById("intro");
const album = document.getElementById("album");

if (enterBtn && intro && album) {

    enterBtn.addEventListener("click", () => {

        intro.style.transition = "opacity 1s";
        intro.style.opacity = "0";

        setTimeout(() => {
            intro.style.display = "none";
            album.classList.remove("hidden");
        }, 1000);

    });

}
