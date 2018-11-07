function btnCalculer_onclick()
{
    var Numero,Jour;

    Numero=parseFloat(document.getElementById("txtNumSem").value);
    switch (Numero)
    {
        case 1 :
        Jour="Lundi";
        break;
        case 2 :
            Jour="Mardi";
            break;
        case 3 :
            Jour="Mercredi";
            break;
        case 4 :
            Jour="Jeudi";
            break;
        case 5 :
            Jour="Vendredi";
            break;
        case 6 :
            Jour="Samedi";
            break;
        case 7 :
            Jour="Dimanche";
            break;
    }




    console.log(" "+ Jour);


}