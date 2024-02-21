let calcButton = document.getElementById("calculer");
let vider = document.getElementById("clear");
let error = "Il faut remplir au moins deux champs de formulaire";
let troisPhases = 1.732;
console.log(troisPhases)
let checkbox = document.getElementById("temp");
//let iconError = <i class="bi bi-emoji-frown"></i>;

//griser le champ input vide (empecher la saisie) lorsque 2 des 3 champs sont remplis

function ctrlInputs() {
let u = document.getElementById("tension");
let i = document.getElementById("intensite");
let r = document.getElementById("resistance");

addEventListener("input", function () {
  if (u.value !== "" && r.value !== "") {
    i.setAttribute("disabled", "");
  } else {
    i.removeAttribute("disabled", "");
  }
  if (i.value !== "" && r.value !== "") {
    u.setAttribute("disabled", "");
  } else {
    u.removeAttribute("disabled", "");
  }
  if (u.value !== "" && i.value !== "") {
    r.setAttribute("disabled", "");
  } else {
    r.removeAttribute("disabled", "");
  }
});
}


// reset des champs
function resetForm() {
  document.getElementById("inputForm").reset();
  document.getElementById("result").innerText = "";
  document.getElementById("unit").innerText = "";
  tension.removeAttribute("disabled", "");
  resistance.removeAttribute("disabled", "");
  intensite.removeAttribute("disabled", "");
}

ctrlInputs();

//calculer la formule en mono
function calculFormules() {
  
let tension = document.getElementById('tension').value;
let resistance = document.getElementById('resistance').value;
let intensite = document.getElementById('intensite').value;
  //on lance le calcul

  //on mets les conditions de calculs selon les champs remplis
  if (tension !== "" && resistance !== "") {
    let calculIntensite = tension / resistance;
    document.getElementById("result").innerText = calculIntensite.toFixed(2);
    document.getElementById("unit").innerText = "Ampères pour l'intensité";
  } else if (intensite !== "" && resistance !== "") {
    let calculTension = resistance * intensite;
    document.getElementById("result").innerText = calculTension.toFixed(2);
    document.getElementById("unit").innerText = "Volts pour la tension";
  } else if (tension !== "" && intensite !== "") {
    let calculResistance = tension / intensite;
    document.getElementById("result").innerText = calculResistance.toFixed(2);
    document.getElementById("unit").innerText = "Ohms pour la résistance";
  } else {
    //alert("vous n'avez pas bien rempli le formulaire");
    document.getElementById("unit").innerText = error;
    document.getElementById("unit").style.color = "red";
    document.getElementById("result").innerHTML ="<img \src=./pics/badIcon.png\ >"
  }
}
// calcul en triphasé
function calculFormule3ph() {
  
let tension = document.getElementById('tension').value;
let resistance = document.getElementById('resistance').value;
let intensite = document.getElementById('intensite').value;
  //on lance le calcul

  //on mets les conditions de calculs selon les champs remplis
  if (tension !== "" && resistance !== "") {
    let calculIntensite = tension / (resistance * troisPhases);
    document.getElementById("result").innerText = calculIntensite.toFixed(2);
    document.getElementById("unit").innerText = "Ampères pour l'intensité en tri";
  } else if (intensite !== "" && resistance !== "") {
    let calculTension = resistance * (intensite * troisPhases);
    document.getElementById("result").innerText = calculTension.toFixed(2);
    document.getElementById("unit").innerText = "Volts pour la tension en tri";
  } else if (tension !== "" && intensite !== "") {
    let calculResistance = tension / (intensite *troisPhases);
    document.getElementById("result").innerText = calculResistance.toFixed(2);
    document.getElementById("unit").innerText = "Ohms pour la résistance en tri";
  } else {
    //alert("vous n'avez pas bien rempli le formulaire");
    document.getElementById("unit").innerText = error;
    document.getElementById("unit").style.color = "red";
    document.getElementById("result").innerHTML ="<img \src=./pics/badIcon.png\ >"
  }
}

//calculer selon que la tension est monophasée ou triphasée
function calculsValeurs(){
  if(checkbox.checked){
    calculFormule3ph();
  } else {
    calculFormules();
  }
}

calcButton.addEventListener("click", calculsValeurs);   
vider.addEventListener("click", resetForm);

const leRoot = document.querySelector('#root')

//exercice

//const afficher = document.createElement('span');
    //afficher.innerText ="IL FAUT FAIRE ATTENTION";
//leRoot.appendChild(afficher);
