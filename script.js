const cards = document.querySelectorAll('#card');

function isMobile() {
    return window.innerWidth <= 1024;
}

cards.forEach(card => {
    card.addEventListener('click', function () {
        if (isMobile()) {
            this.classList.toggle('flipped');
        }
    });
});