const elements = document.querySelectorAll('.reveal');

function checkReveal() {
    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if(top < window.innerHeight - 100){
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', checkReveal);
checkReveal();


// LIGHTBOX GALLERY
const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    });
});

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });
}

if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
}

// SEDI — MAPPA INTERATTIVA
const sediCards = document.querySelectorAll('#sedi .card[data-src]');
const mapFrame = document.getElementById('map-frame');

sediCards.forEach(card => {
    card.addEventListener('click', () => {
        sediCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        if (mapFrame) mapFrame.src = card.dataset.src;
    });
});
