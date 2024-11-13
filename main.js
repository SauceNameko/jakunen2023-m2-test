const images = document.querySelectorAll("img");
const hum = document.querySelector(".hum");
const btn_close = document.querySelector(".btn-close");
const offcanvas = document.querySelector(".offcanvas");
window.addEventListener("load", () => {
    const handleScroll = () => {
        images.forEach(img => {
            const windowHeight = window.innerHeight;
            const imgHeight = img.getBoundingClientRect().top;
            if (imgHeight < windowHeight * .75) {
                img.classList.add("is-active");
            }
        })
    }
    window.addEventListener("scroll", handleScroll);
})
hum.addEventListener("click", () => {
    offcanvas.classList.toggle("show");
});
btn_close.addEventListener("click", () => {
    offcanvas.classList.toggle("show");
});