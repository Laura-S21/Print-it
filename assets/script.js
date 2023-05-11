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

//Variable avec la position initiale
let position = 0;

//J'écoute les événements sur la flèche de droite
rightArrow.addEventListener("click", function() {
	//alert("it works !");

	//Au clic, j'ajoute 1 à ma position initiale
	position = position + 1;

	//J'appelle la fonction qui met à jour les points
	updateDots();
});

//J'écoute les événements sur la flèche de gauche
leftArrow.addEventListener("click", function() {
	//alert("it works !");
});

// Fonction pour créer les points
function generateDots() {
	// Récupération de l'élément qui affiche tous les points
	const allDots = document.querySelector(".dots");

	// Je boucle sur le tableau des slides pour avoir le même nbr de points que d'éléments
	for (let i = 0; i < slides.length; i++) {
		// Création d'une balise pour un point
		const dotElement = document.createElement("div");
		dotElement.className = "dot";

		//Pour passer le 1er point en mode "actif" = si je suis à l'index 0
		if (i == position) {
			//J'ajoute à l'élément dot la classe dot_selected
			dotElement.classList.add("dot_selected");
		}

		// Je rattache l'élément créé (le point) à l'élément parent
		allDots.appendChild(dotElement);
	}
}

// Fonction pour mettre à jour le point sur la slide active
function updateDots() {
	// Récupération de l'élément qui affiche tous les points
	const allDots = document.querySelector(".dots");
	// Déclaration de ma position actuelle
	let currentPosition = 0;
	//Boucle pour parcourir tous les éléments enfants de la div qui contient tous les points
	for (const dot of allDots.children) {
		//Si ma position actuelle est égale à ma poistion initiale - 1
		if (currentPosition == position - 1) {
			//J'enlève la classe dot_selected à l'élément dot
			dot.classList.remove("dot_selected");
		}
		//Si ma position actuelle est égale à ma poistion initiale
		if (currentPosition == position) {
			//J'ajoute à l'élément dot la classe dot_selected
			dot.classList.add("dot_selected");
		}

		
		currentPosition++;
	}
}

// J'appelle la fonction pour générer les points
generateDots();