function handleContactClick(event){
    event.preventDefault();

    if(document.getElementById("name").value===""){
        document.getElementById("error").innerHTML="*Please enter your name !"
        return false
    }
    else if(document.getElementById("email").value===""){
        document.getElementById("error").innerHTML="*Please enter your email !"
        return false
    }
    else if(document.getElementById("message").value===""){
        document.getElementById("error").innerHTML="*Please enter your message !"
        return false
    }
    else{
        document.getElementById("frm").submit();
        return true
    }
}

export default handleContactClick