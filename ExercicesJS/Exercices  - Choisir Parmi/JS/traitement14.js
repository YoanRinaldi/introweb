function btnCalculer_onclick()
{

    var Symbole,Num1,Num2,Res;
    Num1=parseFloat(document.getElementById("txtNbre1").value);
    Num2=parseFloat(document.getElementById("txtNbre2").value);
    Symbole=(document.getElementById("txtOperateur").value);
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




    console.log(" "+ Res);
}