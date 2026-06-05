const elements = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if(top < window.innerHeight - 100){
            el.classList.add('active');
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById('main-header');
    const heroTitle = document.getElementById('hero-title');

    window.addEventListener('scroll', () => {
        // Calcola la posizione del titolo della Hero rispetto alla finestra dello schermo
        const titlePosition = heroTitle.getBoundingClientRect().top;
        
        // Soglia: quando il titolo originale tocca il fondo dell'header (es. 80px dall'alto)
        const headerHeight = header.offsetHeight;

        if (titlePosition < headerHeight) {
            // Se l'h1 è salito oltre l'header, mostra il titolo nero in alto
            header.classList.add('scrolled');
        } else {
            // Se torni su, nascondilo di nuovo
            header.classList.remove('scrolled');
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('#sedi .card');
    const mapFrame = document.getElementById('map-frame');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // 1. Rimuove la classe active da tutte le card
            cards.forEach(c => c.classList.remove('active'));
            
            // 2. Aggiunge la classe active alla card cliccata
            card.classList.add('active');
            
            // 3. Prende il link dal data-src della card cliccata
            const newMapUrl = card.getAttribute('data-src');
            
            // 4. Aggiorna l'iframe della mappa
            mapFrame.src = newMapUrl;
        });
    });
});
