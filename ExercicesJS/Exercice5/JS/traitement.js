function btnCalculer_onclick()
{
    var Revenu,Loyer,Nourriture,Deplacement,Reste;
    Revenu=document.getElementById("txtRevenu").value;
    Loyer=parseFloat(document.getElementById("txtLoyer").value);
    Nourriture=parseFloat(document.getElementById("txtNourriture").value);
    Deplacement=parseFloat(document.getElementById("txtDeplacement").value);


    Reste=Revenu-Loyer-Nourriture-Deplacement;
    Reste=(Reste*12)/52;
    console.log("Votre reste est de "+ Reste);
}