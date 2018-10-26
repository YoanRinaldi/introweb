function btnCalculer_onclick()
{ 
 	var Jours,Prix,Tarif,Animal,Veto,Mot;
    Jours=document.getElementById("txtNbreJours").value;
    Veto=document.getElementById("lstVeterinaire").value;
    Mot="sans";

    if(document.getElementById("radChien").checked== true)
    {
        Tarif=18.50;
        Animal="Chien";
    }
    else
        {
            Tarif=16.95;
            Animal="Chat";
        }



    Prix=Jours*Tarif;
    if(document.getElementById("chkServ").checked==true)
    {
        Mot= "avec";
        Prix=Prix+5;
    }
    console.log("Votre Veterinaire est "+Veto +" Le montant pour la garde de votre "+ Animal+" est de " + Prix+" pour "+Jours+" jours "+Mot + " service de toilettage");

}