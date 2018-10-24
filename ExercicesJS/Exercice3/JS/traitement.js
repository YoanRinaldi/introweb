function btnCalculer_onclick()
{
    var ArgentCan,TauxChangeEuro,Euro;
 	ArgentCan=parseFloat(document.getElementById("txtArgentCan").value);
    TauxChangeEuro=parseFloat(document.getElementById("txtTauxChangeEuro").value);

    Euro=ArgentCan*TauxChangeEuro;
    console.log("votre total en euro "+ Euro );
}