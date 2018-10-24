function btnCalculer_onclick()
{
    var PoidsL ,PoidsK;
 	PoidsL=parseFloat(document.getElementById("txtPoidsL").value);
    PoidsK=PoidsL/2.2;
    console.log("Votre poids en kilo est de "+ PoidsK );
}