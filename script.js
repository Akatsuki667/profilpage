const cards = document.querySelectorAll('.card-profil, .card-skills, .card-contact');

function isMobile() {
    return window.innerWidth <= 1024;
}

cards.forEach(card => {
    card.addEventListener('touchend', function (e) {
        if (isMobile()) {
            e.preventDefault();
            this.classList.toggle('flipped');
        }
    });
});