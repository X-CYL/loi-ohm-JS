let calcButton = document.getElementById("calculer");
let vider = document.getElementById("clear");
let error = "Vous n'avez pas rempli les champs de formulaire"
//let iconError = <i class="bi bi-emoji-frown"></i>;
tension = document.getElementById('tension');
intensite = document.getElementById('intensite');
resistance = document.getElementById('resistance');

disabledInputs()


//griser le champ input vide (empecher la saisie) lorsque 2 champs sont remplis
function resetForm() {
    document.getElementById("inputForm").reset();
    document.getElementById("result").innerText = "";
    document.getElementById('unit').innerText = "";
  }

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

    //on mets les conditions de calculs selon les champs remplis
    if(r !== '' && i !== ''){
        document.getElementById('result').innerText = calculTension.toFixed(2);
        document.getElementById('unit').innerText = "Volts";
    }
    else if(u !== '' && i !== ''){
        document.getElementById('result').innerText = calculResistance.toFixed(2);
        document.getElementById('unit').innerText = "Ohms";
    }
    else if(u !== '' && r !== ''){
        document.getElementById('result').innerText = calculIntensite.toFixed(2);
        document.getElementById('unit').innerText = "Ampères";
    }
    
    else{
        //alert("vous n'avez pas bien rempli le formulaire");
        document.getElementById("result").innerText = "####";
        document.getElementById('unit').innerText = error;
        document.getElementById('unit').style.color = "red";
    }
    
}
vider.addEventListener('click', resetForm);
calcButton.addEventListener('click',calculFormules)


function disabledInputs(){
    if(tension === '' && resistance === '' && intensite === ''){ 
        tension.disabled = false;
        resistance.disabled = false;
        intensite.disabled = false; 
    }
    else if(tension !== '' && intensite !== '' && resistance ===''){
        resistance.disabled = true;
    }
    else if(tension !== '' && resistance !== '' && intensite ===''){
        intensite.disabled = true;
    }
    else if(resistance !== '' && intensite !== '' && tension ===''){
        tension.disabled = true;
    }
}