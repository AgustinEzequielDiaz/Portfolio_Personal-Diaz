function enviar()
{
    var nombre=document.getElementById("inputNombre").value;
    var email=document.getElementById("inputEmail").value;
    var txtarea=document.getElementById("areaMensaje").value;
    if(nombre=="")
    {
        alert("Nombre vacio")
    }
    else if(email=="")
    {
        alert("Email vacio")
    }
    else if(txtarea=="")
    {
        alert("Mensaje vacio")
    }
}