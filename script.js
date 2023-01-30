// ChatBot Logic
function isEnter(){
    var TextBox_val = document.getElementById("InputBox").value;
    // alert(TextBox_val);
    if(TextBox_val != ""){
        if(event.keyCode==13)
            main();
    }
}

function main(){
    var TextBox_val = document.getElementById("InputBox").value;
    var ResponseText_val = document.getElementById("ResponseText");
    var FormatInput = TextBox_val.toLowerCase().trim();
    // alert(FormatInput);
    if(FormatInput.includes("hi") || FormatInput.includes("hello"))
    {
        ResponseText_val.innerHTML = "Hello!";
    }
    else if(FormatInput.includes("how are you")){
        ResponseText_val.innerHTML = "I am fine!";
    }
    else if(FormatInput.includes("open google")){
        ResponseText_val.innerHTML = "Opening Google";
        window.open("https://www.google.co.in/", "_blank");
    }
    else if(FormatInput.includes("open youtube")){
        ResponseText_val.innerHTML = "Opening Youtube";
        window.open("https://www.youtube.com/");
    }
    else if(FormatInput.includes("open e-mail")){
        ResponseText_val.innerHTML = "Opening E-Mail";
        window.open("https://mail.google.com/mail/u/0/#inbox");
    }
    else if(FormatInput.includes("open github")){
        ResponseText_val.innerHTML = "Opening Github";
        window.open("https://github.com/");
    }
    else if(FormatInput.includes("open linkedin")){
        ResponseText_val.innerHTML = "Opening Linkedin";
        window.open("https://www.linkedin.com/in/ankush-kumar-tommer-a1a02b252/");
    }
    else{
        ResponseText_val.innerHTML = "Sorry I can't understand you!";
    }
}