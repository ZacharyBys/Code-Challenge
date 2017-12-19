function Registration(){
    var email = document.getElementById("email").value;
    var interest = document.getElementById("interest").value;
    var regex = new RegExp('^[a-zA-z0-9\!\#\$\%\&\'\*\+\-\/\=\?\^\_\`\{\|\}\~\.]+@[a-zA-Z0-9\.]+\.(com|ca|org|info|net|edu|biz)');
    var emailreg = email.match(regex);
    if (!regex.test(email)){
        document.getElementById("warning").innerHTML = "Please enter a valid email address";
    } else if (interest == ""){
        document.getElementById("warning").innerHTML = "Please enter your interest";
    } else{
        console.log(email + ": " + interest);
        document.getElementById("email").value = "";
        document.getElementById("interest").value = "";
        document.getElementById("warning").innerHTML = "&nbsp;";
        alert("Thank you for signing up for our newsletter!");
    }
    return 0;
}
