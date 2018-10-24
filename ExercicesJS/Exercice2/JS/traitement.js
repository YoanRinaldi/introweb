function btnCalculer_onclick()
{
    var MoyKmMois,TotKm;
 	MoyKmMois=parseFloat(document.getElementById("txtMoyKmMois").value);
    TotKm=MoyKmMois*12*5;
    console.log("votre toalt en km sur les prochaine 5 annee est de  "+ TotKm );
}