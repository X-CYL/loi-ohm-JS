let calcButton = document.getElementById("calculer");
let vider = document.getElementById("clear");
let error = "Vous n'avez pas rempli les champs de formulaire";
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

//calculer la formule
function calculFormules() {
  //recup du formulaire dans une variable, ici (formCalc)
  /*let formCalc = document.getElementById("inputForm");
  //on transforme le formulaire en objet dans lequel on peut recupérer chaque champ input par son name via get dans l'objet
  let formObj = new FormData(formCalc);
  let tension = formObj.get("tension");
  let resistance = formObj.get("resistance");
  let intensite = formObj.get("intensite");
*/
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
    document.getElementById("result").innerText = "####";
    document.getElementById("unit").innerText = error;
    document.getElementById("unit").style.color = "red";
  }
}

calcButton.addEventListener("click", calculFormules);
vider.addEventListener("click", resetForm);
