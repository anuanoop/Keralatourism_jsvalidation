

function validate()
{

    var  email=document.getElementById("email").value;
var pass=document.getElementById("pass").value;

    if(email=='' || pass=='')
    {
        alert("empty");
        return false;
    }
    else{
    alert("validation success");
    return true;
    }

}

