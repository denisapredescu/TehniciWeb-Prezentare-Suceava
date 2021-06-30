
//override la functia de onsubmit al formului

/*
document.getElementById("inputform").onsubmit=function (event){

    alert("intra");
    event.preventDefault();   //  blocheaza ca formul sa fie trimis nativ


    let dataToSend={
        poza:document.getElementById("poza").value.substring(12),
        feedback:document.getElementById("feedback").value,
        email:document.getElementById("email").value
    };
    let httpObj = new XMLHttpRequest();
    httpObj.open("POST", "/fisier", true);
    httpObj.setRequestHeader("Content-Type", "application/json");

    alert(httpObj);
    alert(dataToSend.poza);
    httpObj.send(JSON.stringify(dataToSend));
    //httpObj.send(dataToSend);

};

 */



