
function aj(){

var n1, n2 , res;

n1=Number(document.getElementById("n1").value);
n2=Number(document.getElementById("n2").value);

res = n1 + n2 ;

document.getElementById("resultat").value = res;

}

function sous(){

var n1, n2, res;

n1=Number(document.getElementById("n1").value);
n2=Number(document.getElementById("n2").value);

res = n1 - n2 ;

document.getElementById("resultat").value = res;

}

function mul(){

var n1, n2, res;

n1=Number(document.getElementById("n1").value);
n2=Number(document.getElementById("n2").value);

res = n1 * n2 ;

document.getElementById("resultat").value = res;

}


function div(){

    var n1, n2, res;

    n1=Number(document.getElementById("n1").value);
    n2=Number(document.getElementById("n2").value);
   res = n1 / n2 ;
   document.getElementById("resultat").value = res;
}


function va(){

alert(" vous avez remplir cette formulaire s'il vous plait")

document.getElementById("sm").style.backgroundColor = "red";

}

