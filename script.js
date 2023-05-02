let calcButton = document.getElementById("calculer");
let vider = document.getElementById("clear");

//recupérer les valeurs des champs inputs dans la variablr "formCalc"


//calculer 
function calculFormules(){
    //recup du formulaire dans une variable, ici (formCalc)
    let formCalc = document.getElementById("inputForm");
    //on transforme le formulaire en objet dans lequel on peut recupérer chaque champ input par son name via get dans l'objet
    let formObj = new FormData(formCalc);
    let u = formObj.get("tension");
    let r = formObj.get("resistance");
    let i = formObj.get("intensite");

    //on lance le calcul
    let calculTension = r * i;
    let calculResistance = u / i;
    let calculIntensite = u / r;
    document.getElementById('result').innerText = calculIntensite.toFixed(2) +'A'; // exemple

    //on mets les conditions de calculs selon les champs remplis
    
}

//affecter la fonction de calcul au bouton "calculer"

//calcButton.addEventListener("click", calculFormules);

