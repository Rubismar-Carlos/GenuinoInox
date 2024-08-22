const btnMobile = document.getElementById("btn-menu-mobile")

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById("nav")
    nav.classList.toggle('active')
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active)
    if (active) {event.currentTarget.setAttribute('arial-label', 'Fechar menu')
    } else {
        event.currentTarget.setAttribute('arial-label', 'Abrir menu')
    }
}

// Fechar menu mobile
function closeMenu() {
    const nav = document.getElementById("nav"); 
    nav.classList.remove('active');
};

// Abrir menu com produtos
function openProdutos() {
    const dropdown = document.getElementById("produtos-dropdown");
    const icon = document.getElementById("icon");
    
    if (dropdown.style.display === "block") {
        dropdown.style.maxHeight = "0";
        icon.style.transform = "rotate(0deg)";
        setTimeout(() => {
            dropdown.style.display = "none";
        }, 500); // Tempo igual ao da transição
    } else {
        dropdown.style.display = "block";
        dropdown.style.maxHeight = dropdown.scrollHeight + "px";
        icon.style.transform = "rotate(180deg)";
    }
}

// Fechar menu com produtos
function closeProdutos() {
    const dropdown = document.getElementById("produtos-dropdown");

    if (dropdown.style.display === "block") {
        dropdown.style.maxHeight = "0";
        icon.style.transform = "rotate(0deg)";
        setTimeout(() => {
            dropdown.style.display = "none";
        }, 500); // Tempo igual ao da transição
    }
    
}

// Slide
let currentIndex = 0;
const slides = document.querySelector('.box-slides');
const totalSlides = document.querySelectorAll('.slide').length;
//const slideInterval = 3000; // Intervalo de 3 segundos

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Iniciar o slideshow automático
//setInterval(nextSlide, slideInterval);

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)