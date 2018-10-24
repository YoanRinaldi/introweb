function btnCalculer_onclick()
{
    var Enfant,Etudiant,Vieux,Normal,Total;
    Enfant=document.getElementById("txtBilletEnfant").value;
    Etudiant=parseFloat(document.getElementById("txtBilletEtudiant").value);
    Vieux=parseFloat(document.getElementById("txtBillet+65").value);
    Normal=parseFloat(document.getElementById("txtBilletnormal").value);


    Total=Enfant*0+Etudiant*12+Vieux*15+Normal*20;
    if(Etudiant+Vieux+Normal>=5)
    {
        Total=Total-Total*0.1;
    }
    console.log("Vous payez "+ Total);
}