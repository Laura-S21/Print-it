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

	//Au clic, j'ajoute 1 à ma position initiale
	position = position + 1;

	if (position > slides.length - 1) {
		position = 0;
	}

	/*Je récupère LES éléments qui ont la classe "banner-img", je sélcetionne l'index 0 dans le tableau qu'il me renvoie,
	je modifie le src avec le début du chemin des images et la clé "image" à l'index correspondant à ma position*/
	document.getElementsByClassName("banner-img")[0].src ="./assets/images/slideshow/" + slides[position].image;
	
	/*Je récupère LES éléments "p" sous la balise avec l'ID "banner", je sélcetionne l'index 0 dans le tableau qu'il me renvoie,
	je modifie le HTML avec la clé "tagLine" à l'index correspondant à ma position*/
	document.getElementById("banner").getElementsByTagName("p")[0].innerHTML = slides[position].tagLine;

	//J'appelle la fonction qui met à jour les points
	updateDots()

	
});

//J'écoute les événements sur la flèche de gauche
leftArrow.addEventListener("click", function() {

	//Au clic, j'ajoute 1 à ma position initiale
	position = position - 1;

	if (position < 0) {
		position = slides.length - 1;
	}

	/*Je récupère LES éléments qui ont la classe "banner-img", je sélectionne l'index 0 dans le tableau qu'il me renvoie,
	je modifie le src avec le début du chemin des images et la clé "image" à l'index correspondant à ma position*/
	document.getElementsByClassName("banner-img")[0].src ="./assets/images/slideshow/" + slides[position].image;

	/*Je récupère LES éléments "p" sous la balise avec l'ID "banner", je sélcetionne l'index 0 dans le tableau qu'il me renvoie,
	je modifie le HTML avec la clé "tagLine" à l'index correspondant à ma position*/
	document.getElementById("banner").getElementsByTagName("p")[0].innerHTML = slides[position].tagLine;

	//J'appelle la fonction qui met à jour les points
	updateDots()


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

// Fonction pour mettre à jour les bullet points
function updateDots() {

	// Je déclare la variable dots (tableau) en récupérant la liste des élément avec la classe "dot"
	const dots = document.getElementsByClassName("dot");

	// Je boucle sur le tableau "dots" créé à la ligne précédente
	for (let i = 0; i < dots.length; i++) {

		//Si l'index est égal à ma position ...
		if (i == position) {

			// ... j'ajoute la classe "dot_selected" à l'élément de l'index où je me trouve.
			dots[i].classList.add("dot_selected");
		// Sinon ...	
		} else {
			// ... j'enlève la classe "dot_selected" à l'élément de l'index où je me trouve.
			dots[i].classList.remove("dot_selected");
		}
	}
}


// J'appelle la fonction pour générer les points
generateDots();