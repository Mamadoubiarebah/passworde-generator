// Selection des elements
const resultat_element = document.querySelector("#result");
const nombre_element = document.querySelector("#nombre");
const majuscule_element = document.querySelector("#majuscule");
const miniscule_element = document.querySelector("#miniscule");
const nbr_element = document.querySelector("#nbr");
const special_element = document.querySelector("#symbol");

const formulaire_element = document.querySelector(".formulaire");
const click_element = document.querySelector(".click");

//console.log(majuscule_element);

// Creation tableau
const tableau_champ = [
    {
        champ: majuscule_element,
        caractere: majuscule
    },
    {
        champ: miniscule_element,
        caractere: minuscule
    },
    {
        champ: nbr_element,
        caractere: nombre
    },
];

formulaire_element.addEventListener("submit",(e) => {
e.preventDefault();
const length = nombre_element.value;
let generer_mot_de_passe = "";
const type_tableau = tableau_champ.filter(({ champ }) => champ.checked);

// Creation de la boucle
for(i=0; i < length; i++) {
const numero = Math.floor(Math.random() * type_tableau.length);
const lettre = type_tableau[numero].caractere();
generer_mot_de_passe += lettre;
}
resultat_element.value = generer_mot_de_passe;
});

// Creation des foncctions
function obtenir_char(min, max) {
    const limit = max - min + 1;
    return String.fromCharCode(Math.floor(Math.random() * limit) + min);
}
// Fonction permettant d'obtenir un caractere majuscule
function majuscule() {
    return obtenir_char(65, 90);
}
// Fonction per;ettantv d'obtenir un caractere minuscule
function minuscule() {
    return obtenir_char(97, 122);
}
// Fonction permettant d'obtenir un nombre
function nombre() {
    return obtenir_char(48, 57);
}

