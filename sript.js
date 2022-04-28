//le but de ce dossier est de creer une petite appli de calcul de la loi d'hom
//la loi d'ohm s'écrit comme cela:
// U=RI ou U est la tension R est la resistance I est l'intensité
//il va falloir gerer le fait de ne pas faire le calcul s il y a deux inconnues.


function calcLoiOhm (u, r, i){
    if (u == 0 & i == 0 || r == 0 & i == 0 || r == 0 & u == 0){
        console.log('failed to clac the function, two values unknown');
    }
    else {
        if (u == 0){
            let result = (r*i);
            console.log (`the tension value is : ${result.toFixed(2)} volts`);
        }
        else if (r == 0){
            let result = (u/i);
            console.log (`the resistance value is : ${result.toFixed(2)} ohms`);
        }
        else if (i == 0){
            let result = (u/r);
            console.log (`the intensity value is : ${result.toFixed(2)} ampères`);
        }
    }
}

calcLoiOhm(27, 0, 9);
