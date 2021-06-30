
if (localStorage.getItem("check"))
    if (localStorage.getItem("check") === "check2") f2();
    else
        f1();

document.getElementById("check1").onclick = f1;

function f1() {

    document.body.style.backgroundColor = "#e7d398";
    var inLogare= document.querySelectorAll(".logare");
    for(var i=0;i<inLogare.length;i++)
        inLogare[i].style.color = "black";
}

document.getElementById("check2").onclick = f2;

function f2() {
    document.body.style.backgroundColor = "black";
    var inLogare = document.querySelectorAll(".logare");
    for (var i = 0; i < inLogare.length; i++)
        inLogare[i].style.color = "white";
}
function mouseOver(x) {
    x.style.backgroundColor = "#87966b";
}

function mouseOut(x) {
    x.style.backgroundColor = "#387032";
}