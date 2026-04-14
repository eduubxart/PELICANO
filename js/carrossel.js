let index = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

function mostrarSlide(i) {
    slides.forEach(s => s.classList.remove("ativo"));
    dots.forEach(d => d.classList.remove("ativo"));

    slides[i].classList.add("ativo");
    dots[i].classList.add("ativo");
}

function proximo() {
    index = (index + 1) % slides.length;
    mostrarSlide(index);
}

function anterior() {
    index = (index - 1 + slides.length) % slides.length;
    mostrarSlide(index);
}

next.addEventListener("click", proximo);
prev.addEventListener("click", anterior);

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        index = i;
        mostrarSlide(index);
    });
});

/* automático */
setInterval(proximo, 4000);