
if (localStorage.getItem("check"))
    if (localStorage.getItem("check") === "check2") f2();
    else
        f1();
    document.getElementById("check2").onclick = f2;

    function f2() {
        //alert(localStorage.getItem("check"));
        document.body.style.backgroundColor = "black";
        document.querySelector(".subtitlu").style.color = "darksbrown";
        document.getElementById("check2").style.color = "white";
        document.getElementById("check1").style.color = "white";
        document.querySelector(".ora").style.color = "white";
        var nr = document.querySelectorAll(".schimba");
        for (let i = 0; i < nr.length; i++) {
            nr[i].style.color = "white";
            nr[i].style.backgroundColor = "#387032";
        }
      //  document.body.onclick = function () {
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
        var nr = document.querySelectorAll(".schimba");
        for (var i = 0; i < nr.length; i++) {
            nr[i].style.color = "black";
            nr[i].style.backgroundColor = "#89b065";
        }
        localStorage.setItem("check", "check1");
    }



