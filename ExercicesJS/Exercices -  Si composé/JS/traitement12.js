function btnCalculer_onclick()
{

    var Nbr1,Nbr2,Nbr3,Nbr4;
    Nbr1=parseFloat(document.getElementById("txtNbre1").value);
    Nbr2=parseFloat(document.getElementById("txtNbre2").value);
    Nbr3=parseFloat(document.getElementById("txtNbre3").value);
    Nbr4=3;

    console.log("Nombre 4 vos  "+ Nbr4);
    if((Nbr1>=Nbr2)&&(Nbr2!=Nbr3) )
    {
        Nbr4=Nbr4+2*Nbr1;
    }else
        if((Nbr1==Nbr2)||(Nbr2>Nbr3))
        {
            Nbr4=Nbr4+Nbr1;
        }else
            {
                Nbr4=(Nbr4*Nbr2)/(Nbr1-Nbr3);
            }

    console.log("Nombre 4 vos  "+ Nbr4);
}