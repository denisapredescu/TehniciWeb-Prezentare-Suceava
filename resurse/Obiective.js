
    if (localStorage.getItem("check"))
        if (localStorage.getItem("check") === "check2")
            f2();
        else
            f1();
    document.getElementById("check2").onclick = f2;

    function f2() {
       // alert("check2 obiective");
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

            //nr[i].style.backgroundColor = "#387032";
        }
       // document.body.onclick = function () {
            localStorage.setItem("check", "check2");
        //}

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
/*
    srcuri=["cetate1.jpg","muzeu1.jpg","biserica-mirauti.jpg","Biserica_Invierea_Domnului_din_Suceava.jpg",
    "BisericaSfNicolae2.jpg","harta.gif","Harta-judetului-Suceava.jpg","muzeu8.jpg"];
    texte=["Vatra Dornei - \n" + "\n"+
    "\n" + "Vatra Dornei, supranumit?? ??i ???Perla Bucovinei???, este un alt obiectiv turistic important din jude??ul Suceava. " +
    "Turi??tii vin aici at??t pentru apele minerale ??i termale, c??t ??i pentru a face alpinism sau pentru a parcurge trasee " +
    "turistice montane, aflate ??n aceast?? zon??. De asemenea, ??n sta??iune este amenajat?? o p??rtie unde, ??n sezonul rece, se " +
    "pot practica diferite sporturi de iarn??.\n" +
    "\n" +
    "Sta??iunea balnear?? este una dintre cele mai cunoscute din ??ar??, aici put??ndu-se trata afec??iune precum cele " +
    "cardiovasculare, locomotorii, ginecologice, digestive sau ale aparatului respirator.\n" +
    "\n" +
    "??n afara drume??iilor ??i a b??ilor ??n apele termale ??i minerale, ??n Vatra Dornei mai pute??i vizita ??i dou?? muzee: " +
    "Muzeul de ??tiin??ele Naturii ??i Cinegetic?? ??i Muzeul de Etnografie. V?? recomand??m, ??ns??, ??i o plimbare prin ora??, " +
    "pentru a admira arhitectura cl??dirilor. Descoperi??i mai multe informa??ii despre aceast?? sta??iune de pe site-ul " +
    "oficial ??i c??uta??i o unitate de cazare ??n apropiere.", "Gura Humorului - \n" +"\n"+
    "\n" +
    "Dac?? ??nc?? nu a??i r??mas impresiona??i de frumuse??ea Bucovinei ??i a jude??ului Suceava, v?? recomand s?? ??ncerca??i ??i" +
    " traseele turistice din sta??iunea Gura Humorului. ??n acest ora?? se afl?? ??i M??n??stirea Vorone??, unul dintre cele " +
    "mai importante monumente istorice religioase din Bucovina, care a fost construit?? ??n secolul al XV-lea, la porunca " +
    "domnitorului ??tefan ce Mare."];
    document.getElementById("apasare").style.backgroundColor="#387032";
    document.getElementById("apasare").onclick = function()
    {
        var elmnt = document.getElementById("raspuns");
        elmnt.innerHTML='';

        alert("intra");
      var buton = document.getElementsByName("varianta");
       for(var i=0;i<buton.length;i++)
       {
           if(buton[i].checked === true) {
             //  document.getElementById("raspuns").innerHTML = buton[i].value;

               alert(buton[i].value);
               if(buton[i].value==="var1" || buton[i].value==="var3")
               {

                   alert("1/3");
                   var img = document.createElement("img");
                   var img = document.createElement("img");
                   img.src= srcuri[Math.floor(Math.random() * srcuri.length)];
                   img.setAttribute('width',300);

                   document.getElementById("raspuns").appendChild(img);


               }
               if(buton[i].value==="var2" || buton[i].value==="var3")
               {
                   alert("1/3");
                   var p = document.createElement("p");
                   p.innerHTML=texte[Math.floor(Math.random() * texte.length)];
                   document.getElementById("raspuns").appendChild(p);

               }



           }
       }
    }
*/
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



