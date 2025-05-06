function ajouter() 
{
var n1, n2, res;
             n1 = Number(document.getElementById("n1").value);
             n2 = Number(document.getElementById("n2").value);
             res = n1 + n2;
             document.getElementById("resultat").value = res;

}

function soustraire() 
{
var n1, n2, res;
n1 = Number(document.getElementById("n1").value);
n2 = Number(document.getElementById("n2").value);
             res = n1 - n2;
	     document.getElementById("resultat").value = res;
}

function multiplier() 
{
var n1, n2, res;
n1 = Number(document.getElementById("n1").value);
n2 = Number(document.getElementById("n2").value);
             res = n1 * n2;
             document.getElementById("resultat").value = res;
}
function diviser() 
{
var n1, n2, res;
             n1 = Number(document.getElementById("n1").value);
             n2 = Number(document.getElementById("n2").value);
	     if(n2===0){
		document.getElementById("resultat").value = "Impossible de faire la division par zero !";
          }
          
	     else {
             res = n1 / n2;
             document.getElementById("resultat").value = res;
	     }
}





