function btnCalculer_onclick()
{
    var Age,Prix;

    Age=parseFloat(document.getElementById("txtAge").value);
    Prix=parseFloat(document.getElementById("txtBasePrix").value);




    if(Age>=5)
    {
        if(document.getElementById("radMidi").checked== true)
        {
            Prix=Prix-0.6*Prix;
        }else
            {
                Prix=Prix-0.4*Prix;
            }
    }else if(document.getElementById("radMidi").checked== true)
    {
        Prix=Prix-0.3*Prix;
    }
    console.log("Vous payez "+ Prix);
}