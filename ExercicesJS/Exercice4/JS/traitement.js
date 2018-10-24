function btnCalculer_onclick()
{
    var Destination,Distance,ConsoVoiture,PrixL,Cout;
 	Destination=document.getElementById("txtDestination").value;
    Distance=parseFloat(document.getElementById("txtDistance").value);
    ConsoVoiture=parseFloat(document.getElementById("txtConsoVoiture").value);
    PrixL=parseFloat(document.getElementById("txtPrixL").value);


    Cout=Distance*(ConsoVoiture/100)*PrixL;
    console.log("Votre poids en kilo est de "+ Cout+ " pour "+ Destination);
}