function btnCalculer_onclick()
{

    var Symbole,Num1,Num2,Res;
    Num1=parseFloat(document.getElementById("txtNbre1").value);
    Num2=parseFloat(document.getElementById("txtNbre2").value);
    Symbole=(document.getElementById("txtOperateur").value);
    if(validerTousLesChampsObligatoire()===true)
    {
        if(valideFormat(Num1,Num2,Symbole)===true)
        {
            Res=calculer(Num1,Num2,Symbole);
            console.log(" "+ Res)
        }else
        {
            console.log("deuxieme marche pas ");
        }
    }else
    {
        console.log("premier marche pas ");
    }

}
function validerTousLesChampsObligatoire()
{
var validation=true;
    var myIdArray = ['txtNbre1', 'txtNbre2', 'txtOperateur'];
    for (var i = 0; i < myIdArray.length; i++)
    {
        if(document.getElementById(myIdArray[i]).value=="")
        {
            validation=false;
            document.getElementById(myIdArray[i]).style.borderColor = "red";
        }

    }
return validation ;
}
function valideFormat(Num1,Num2,Symbole)
{
   var valide=true;
   if( /^[0-9]{1,}$/.test(Num1)===false)
   {
       valide=false;
       document.getElementById("txtNbre1").style.borderColor = "red";
   }
    if( /^[0-9]{1,}$/.test(Num2)===false)
    {
        valide=false;
        document.getElementById("txtNbre2").style.borderColor = "red";
    }
    if( /^[+-/*]$/.test(Symbole)===false)
    {
        valide=false;
        document.getElementById("txtOperateur").style.borderColor = "red";
    }
    return valide ;
}
function calculer(Num1,Num2,Symbole)
{
    var Res;
    switch (Symbole)
    {
        case "+" :
            Res=Num1+Num2;
            break;
        case "-" :
            Res=Num1-Num2;
            break;
        case "/" :
            Res=Num1/Num2;
            break;
        case "*" :
            Res=Num1*Num2;
            break;

    }
    return Res;
}