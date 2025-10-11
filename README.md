# ProfilPage
Site vitrine interractif avec __flip card__ présentant mon __profil__, mes __compétences techniques__ et mes __informations de contact__.

## Fonctionnalités
- __Carte Profil__ : Présentation du parcours professionnel avec __effet de flip__
- __Galerie de compétences__ : Défilement horizontal des technologies en apprentissage
- __Carte Contact__ : Informations personelles et liens sociaux
- __Animations fluides__ : Transitions 3D au __survol(desktop)__ ou au __clic(mobile)__
- __Navigation sticky__ : `Header` et `Footer` toujours visibles

## Stack Technique
- `HTML5`(structure sémantique)
- `CSS3` (animations 3D; flexbox; grid)
- `JavaScript` Vanilla (interactions)
- `Google Fonts` (Lacquer)

## Structure
```
profilpage/
│
├── HTML/
│   ├── exposition.html  # Page principale du portfolio
│   └── fishon.html      # Page projet (en développement)
│
├── Images/
│   ├── atelier.webp     # Background principal
│   ├── profil.avif          
│   ├── java-logo.png        
│   ├── Spring.png
│   ├── js.png
│   ├── html.jpg
│   ├── css.webp
│   ├── Github.png           # Icônes réseaux sociaux
│   └── Linkedin.png
│
├── style.css                 # Styles globaux
├── script.js                 # Logique JavaScript
├── .gitignore
└── README.md
```

## Desktop
- __Survol__ des cartes pour déclencher l'__animation flip__
- __Scroller horizontalement__ dans la section compétences

## Mobile / Tablette (<1024px)
- __Cliquer__ sur les cartes pour les retourner
- __Swipper__ horizontalement pour parcourir les compétences

## Composants
__Profil__
```html
<div class="profil">
    <div class="card-profil">
        <div class="front-profil"></div>  <!-- Recto -->
        <div class="back-profil">         <!-- Verso -->
            <!-- Contenu du profil -->
        </div>
    </div>
</div>
```
- __Dimensions__ : 400x400px
- __Animation__ : `rotateY(180deg)` en 1000ms
- __Contenu__ : Parcours professionnel détaillé

__Compétences__
```html
<div class="skills">
    <!-- 5 cartes de compétences -->
    <div class="card-skills">...</div>
</div>
```
- __Dimensions__ : 100x100px

__Contact__
```html
<div class="contact">
    <div class="card-contact">
        <div class="front-contact"></div>
        <div class="back-contact">
            <!-- Informations de contact -->
        </div>
    </div>
</div>
```
- __Dimensions__ : 400x400px
- __Contenu__ : Informations personnel et contact

## Responsive Design
__Breakpoint__
```css
@media (max-width: 1024px) {
    /* Désactivation du hover */
    .profil:hover .card-profil { transform: none; }
    
    /* Activation du toggle par classe */
    .card-profil.flipped { transform: rotateY(180deg); }
}
```

__Javascript - Détection et gestion__
```javascript
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
```

## CSS
__Animations 3D__
```css
.card-profil {
    transform-style: preserve-3d;
    transition: transform 1000ms;
}

.back-profil {
    transform: rotateY(180deg);
    backface-visibility: hidden;
}
```

__Overlay sombre__
```css
.back-profil::before {
    content: '';
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    z-index: 1;
}
```

__Scroll horizontal__
```css
.skills {
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE/Edge */
}

.card-skills {
    scroll-snap-align: center;
    flex-shrink: 0;
}
```

## Contact
**Alexandre Teyant**  
Étudiant Master of Science - Épitech  
Ancien étudiant Holberton School

Email : qextzy@gmail.com 
LinkedIn : [alexandre-teyant](https://www.linkedin.com/in/alexandre-teyant-4153b8213/)  

---

© 2025 Teyant Alexandre - Tous droits réservés