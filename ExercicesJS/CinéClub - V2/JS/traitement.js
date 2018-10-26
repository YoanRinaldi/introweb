function btnCalculer_onclick()
{
    var Age,Prix,Rep,Film;

    Age=parseFloat(document.getElementById("txtAge").value);
    Prix=parseFloat(document.getElementById("txtBasePrix").value);
    Film=(document.getElementById("lstOptions").value);
    Rep="midi";

if(document.getElementById("chkMiSession").checked== true)
{
    if(Age>=5)
    {
        if(document.getElementById("radMidi").checked== true)
        {
            Prix=Prix-0.6*Prix;
        }else
            {
                Prix=Prix-0.4*Prix;
                Rep="soir";
            }
    }else if(document.getElementById("radMidi").checked== true)
    {
        Prix=Prix-0.3*Prix;
    }else
        {
            Rep="soir";

        }
    console.log("Un billet du "+ Rep +" pour un spectateur de "+ Age +" coute $"+ Prix +" pour le film "+ Film);
}
}