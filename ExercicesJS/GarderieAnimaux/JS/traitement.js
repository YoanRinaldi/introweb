var Veto, NbJours, Animal, Cout, ServToilet, Montant, choix, NbH;




function btnCalculer_onclick()
{


    Veto = document.getElementById("lstVeterinaire").value;
    NbJours = parseFloat(document.getElementById("txtNbreJours").value);
    NbH = parseFloat(document.getElementById("txtNbreH").value);
    CalculToi();
    IdentiAnimal();
    CalculMontantJour();
    ChoisirV();
    Afficher();

}

function CalculToi()
{
    if (document.getElementById("chkServ").checked == true)
    {
        ServToilet = 5;
    }
    else
    {
        ServToilet = 0;
    }

}
function IdentiAnimal()
{
    if (document.getElementById("radChien").checked == true)
    {
        Animal = "Chien";
        Cout =  17;
    }
    else
    {
        Animal = "Chat";
        Cout = 16;
    }
}

function CalculMontantJour()
{
    if (NbJours < 5 && NbJours > 10)
    {
        Montant = Montant*0.95;
    }
    else if (NbJours < 10 && NbJours > 30)
    {
        Montant = Montant*0.9;
    }
    else if (NbJours > 30)
    {
        Montant =  Montant*0.85;
    }
    Montant = (Cout*NbJours) + ServToilet;
}

function ChoisirV()
{
    switch (choix)
    {
        case"Audrey Bouchard":
            Montant = Montant+NbH*25;
            break;
        case"Stéphane Tremblay":
            Montant = Montant+NbH*35;
            break;
        case"Maxime Simard":
            Montant = Montant+NbH*40;
            break;
        case"Mélissa Caron":
            Montant = Montant+NbH*45;
            break;
    }
}
  function Afficher()
  {
      document.getElementById("lblMessage").innerHTML = "Vous avez choisi " +Veto + " pour garder votre " +Animal +" pour " +NbJours + " jours, et cela vous coutera "+Montant +" $CA";

  }




