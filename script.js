let compteur = 0;  // Variable globale pour compter les messages

function Deplacer() {
    // Récupération des éléments
    const clavier = document.getElementById('clavier');
    const affichage = document.querySelector('.affichage');
    
    // Création du nouveau div
    const nouveauDiv = document.createElement('div');
    nouveauDiv.innerHTML = clavier.value;
    
    // Ajout des classes
    nouveauDiv.classList.add('texte');
    nouveauDiv.classList.add(compteur % 2 === 0 ? 'droite' : 'gauche');
    
    // Ajout du div dans l'affichage
    affichage.appendChild(nouveauDiv);
    
    // Effacement du contenu du clavier
    clavier.value = '';
    
    // Incrémentation du compteur
    compteur++;
}

// Ajout de l'écouteur d'événement sur le bouton
document.querySelector('button').addEventListener('click', Deplacer);

function ModifierAspectClavier() {
    const clavier = document.getElementById('clavier');
    
    // Application des styles
    clavier.style.resize = 'vertical';
    clavier.style.overflow = 'auto';
    clavier.style.width = '50%';
    clavier.style.minWidth = '400px';
}

// Appel de la fonction au chargement de la page
window.addEventListener('load', ModifierAspectClavier);
