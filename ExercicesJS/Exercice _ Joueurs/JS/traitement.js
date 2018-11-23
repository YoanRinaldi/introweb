var comp=0;
var Point,Nom, tabNom=new Array(4),tabPoint=new Array(4);
function btnAjouter_onclick()
{
    Nom=document.getElementById("txtNom").value;
    Point=parseFloat(document.getElementById("txtPoints").value);
    tabNom[comp]=Nom;
    tabPoint[comp]=Point;

    comp=comp+1;
    if(comp==4)
    {
        document.getElementById("btnTrouverMoy").disabled=false;
        document.getElementById("btnTrouverMeilleur").disabled=false;
        document.getElementById("btnTrouverPire").disabled=false;
        document.getElementById("btnRechercher").disabled=false;
        document.getElementById("btnAjouter").disabled=true;
    }
    document.getElementById("lblReponse").innerHTML="Votre nombre de joueur est de "+comp;
    document.getElementById("lblNbreJoueur").innerHTML="Numéro du joueur  "+comp;

}
function btnMoy_onclick()
{
    var Moy=0;
for(i=0;i<4;i++)
{
    Moy=Moy+tabPoint[i];
}
Moy=Moy/4;
    document.getElementById("lblReponse").innerHTML="Votre moyenne est de "+Moy;
}
function btnTM_onclick()
{
    var Meilleur=0,NomMeilleur;

    for(i=0;i<4;i++)
    {
        if(tabPoint[i]>Meilleur)
        {
            Meilleur=tabPoint[i];
            NomMeilleur=tabNom[i];
        }
    }
    document.getElementById("lblReponse").innerHTML="Votre meilleur joueur est  "+NomMeilleur+" avec un nombre de point de "+Meilleur;


}
function btnPM_onclick()
{
    var Pire=tabPoint[0],NomPire;

    for(i=0;i<4;i++)
    {
        if(tabPoint[i]<=Pire)
        {
            Pire=tabPoint[i];
            NomPire=tabNom[i];
        }
    }
    document.getElementById("lblReponse").innerHTML="Votre pire  joueur est  "+NomPire+" avec un nombre de point de "+Pire;

}
function btnRechercher_onclick()
{
    var trouver=false, i=0;
     Nom=document.getElementById("txtNom").value;
    while(trouver==false && i<4)
    {
        if(Nom==tabNom[i])
        {
            trouver=true;
        }
        else
            {
                i++;
            }
    }
    if( trouver==true)
    {
        document.getElementById("lblReponse").innerHTML="Le joueur "+Nom+" a "+tabPoint[i]+" point ";
    }
    else
        {
            document.getElementById("lblReponse").innerHTML="Le joueur "+Nom+" n existe pas " ;

        }

}