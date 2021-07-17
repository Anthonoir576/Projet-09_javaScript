let imgCurseur = document.querySelector('.cursor');

// Permet de faire suivre un curseur au mouvement de la souris
window.addEventListener('mousemove', cursor);

function cursor(event) {

    imgCurseur.style.top = event.pageY + 'px';
    imgCurseur.style.left = event.pageX + 'px';
    
}

// animation au curseur
let navLinks = document.querySelectorAll('.nav-links li');

// boucle pour parcourir les li 
navLinks.forEach(lien => {

    lien.addEventListener('mouseover', () => {

        imgCurseur.classList.add('link-grow');
        lien.classList.add("hover-link");

    });

    lien.addEventListener('mouseleave', () => {

        imgCurseur.classList.remove('link-grow');
        lien.classList.remove("hover-link");

    });

});