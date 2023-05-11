const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//Je déclare les variables des flèches
const rightArrow = document.querySelector(".arrow_right");
const leftArrow = document.querySelector(".arrow_left");

//J'écoute les événements sur la flèche de droite
rightArrow.addEventListener("click", function() {
	alert("it works !");
});

//J'écoute les événements sur la flèche de gauche
leftArrow.addEventListener("click", function() {
	
	alert("it works !");
});

// Fonction pour créer les points
function generateDots() {
// Je boucle sur le tableau des slides pour avoir le même nbr de points que d'éléments
	for (let i = 0; i < slides.length; i++) {
		// Récupération de l'élément qui affiche tous les points
		const allDots = document.querySelector(".dots");
		// Création d'une balise pour un point
		const dotElement = document.createElement("div");
		dotElement.className = "dot";

		//Pour passer le 1er point en mode "actif" = si je suis à l'index 0
		if (i == 0) {
			//J'ajoute à l'élément dot la classe dot_selected
			dotElement.classList.add ("dot_selected");
		}

		// Je rattache l'élément créé (le point) à l'élément parent
		allDots.appendChild(dotElement);
	}
}

// J'appelle la fonction pour générer les points
generateDots();


const allSlides = slides[i];
//Création d'une balise pour l'image
const imageElement = document.createElement("img");
imageElement.src = slides.image;
//Création d'une balise pour le texte
const textElement = document.createElement("p");
textElement.innerText = slides.tagLine;