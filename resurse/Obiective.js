if (localStorage.getItem("check"))
    if (localStorage.getItem("check") === "check2")
        f2();
    else
        f1();
document.getElementById("check2").onclick = f2;

function f2() {
    document.body.style.backgroundColor = "black";
    document.querySelector(".subtitlu").style.color = "darksbrown";
    document.getElementById("check2").style.color = "white";
    document.getElementById("check1").style.color = "white";
    document.querySelector(".ora").style.color = "white";
    var nr = document.querySelectorAll(".schimba");
    var ancora = document.getElementsByTagName("a");
    for (var i = 0; i < ancora.length; i++) {
        ancora[i].style.color = "white";
    }
    for (var i = 0; i < nr.length; i++) {
        nr[i].style.color = "white";
    }
    localStorage.setItem("check", "check2");
}
document.getElementById("check1").onclick = f1;

function f1() {
    document.body.style.backgroundColor = "#e7d398";
    document.querySelector(".subtitlu").style.color = "#5a290";
    document.getElementById("check1").style.color = "black";
    document.getElementById("check2").style.color = "black";
    document.querySelector(".ora").style.color = "black";
    var ancora = document.getElementsByTagName("a");
    for (var i = 0; i < ancora.length; i++) {
        ancora[i].style.color = "black";
    }
    var nr = document.querySelectorAll(".schimba");
    for (var i = 0; i < nr.length; i++) {
        nr[i].style.color = "black";
    }

    localStorage.setItem("check", "check1");
}

document.getElementById("apasare").style.backgroundColor="#387032";

var data ;
var httpObj = new XMLHttpRequest();
httpObj.open("GET", "http://localhost:63342/cerere.json", true);

httpObj.onreadystatechange = handleServerResponse;
httpObj.send();
function handleServerResponse() {
    if (httpObj.readyState === 4) {
        if (httpObj.status === 200)
        {
            data=JSON.parse(httpObj.responseText);
            continut(data);
        }
        else {alert("eroare");}
    }
}


function continut(data) {
    document.getElementById("apasare").onclick = function()
    {
        var elmnt = document.getElementById("raspuns");
        elmnt.innerHTML='';
        var buton = document.getElementsByName("varianta");
        for(var i=0;i<buton.length;i++)
        {
            if(buton[i].checked === true) {

                if(buton[i].value==="var1")
                {
                      var img = document.createElement("img");
                      img.setAttribute("src","poze/"+data.pictures[Math.floor(Math.random() * data.pictures.length)]);
                      img.setAttribute('width','300');
                      img.alt="eroare";
                      document.getElementById("raspuns").appendChild(img);
                }
                if(buton[i].value==="var2")
                {
                    var p = document.createElement("p");
                    p.innerHTML=data.texte[Math.floor(Math.random() * data.texte.length)];
                    document.getElementById("raspuns").appendChild(p);

                }
                if(buton[i].value==="var3")
                {
                    var p = document.createElement("p");
                    p.innerHTML=data.feedback[Math.floor(Math.random() * data.feedback.length)];
                    document.getElementById("raspuns").appendChild(p);

                }
            }
        }
    }
}

function check_email(mail){
    var regex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;

    if(regex.test(mail.email.value)===true){
        if(mail.poza.value === ""){
            alert("Nu este completat campul cu poza");
            return false;
        }
        else
        {
           if(mail.feedback.value===""){
               alert("Nu este completat campul feedback");
               return false;
           }
        }
        return true;
    }
    else{
        alert("Nu este data o adresa de email valida"); // This is not a valid email address
        return false;
    }
}
