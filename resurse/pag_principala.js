
    function myFunction(event) {
        if(event.target.nodeName==='P')
            event.target.style.color = "darkred";
        else
        if(event.target.nodeName==='LI')
            event.target.style.color="#3b3b01";
    }
    document.onkeydown = function(event){
        if (event.key==="1") f1();
        if (event.key==="2") f2();
    }

    if (localStorage.getItem("check"))
        if (localStorage.getItem("check") === "check2") f2();
        else
            f1();



    document.getElementById("check1").onclick = f1;

    function f1() {
        document.body.style.backgroundColor = "#e7d398";
        document.getElementById("titlu").style.color = "darkred";
        document.getElementById("check1").style.color = "black";
        document.getElementById("check2").style.color = "black";
        document.querySelector(".ora").style.color = "black";
        var nr = document.querySelectorAll(".schimba");
        for (var i = 0; i < nr.length; i++) {
            nr[i].style.color = "black";
        }
        var meniu = document.querySelectorAll(".schimba");
        /* for (var i = 1; i < 7; i++)
             meniu[i].style.backgroundColor = "#387032";
     */
        var i = 3;
        while (i != 0) {
            meniu[meniu.length - 2 * i].style.backgroundColor = "#f3f3a4";
            i--;
        }


        document.getElementById("admin").style.backgroundColor="#f3f3a4";
        document.getElementById("admin").style.color="black";

        localStorage.setItem("check", "check1");

    }


    document.getElementById("check2").onclick = f2;

    function f2() {
        document.body.style.backgroundColor = "black";
        document.getElementById("titlu").style.color = "darkslategray";
        document.getElementById("check2").style.color = "white";
        document.getElementById("check1").style.color = "white";
        document.querySelector(".ora").style.color = "white";
        var nr = document.querySelectorAll(".schimba");
        for (var i = 0; i < nr.length; i++) {
            nr[i].style.color = "white";
        }
        var meniu = document.querySelectorAll(".schimba");
        for (var i = 1; i < 7; i++)
            meniu[i].style.backgroundColor = "#387032";


        var i = 3;
        while (i != 0) {
            meniu[meniu.length - 2 * i].style.backgroundColor = "#387032";
            i--;


        }


        document.getElementById("admin").style.backgroundColor="darkslategray";
        document.getElementById("admin").style.color="white";
        // document.body.onclick = function () {
        localStorage.setItem("check", "check2");
        //}
    }


    function oraActuala() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        document.querySelector(".ora").innerHTML =
            h + ":" + m + ":" + s;
        var t = setTimeout(oraActuala, 500);
    }

    function checkTime(i) {
        if (i < 10) {
            i = "0" + i
        }
        // add zero in front of numbers < 10
        return i;
    }


    var mesaje = [" O dată pe an, du-te undeva unde nu ai mai fost înainte – Dalai Lama.",
        "Umple-ți ochii de minuni, trăiește precum o să mori în 10 secunde. Vezi lumea. Este cu mult mai fantastic decât orice " +
        "vis... – Ray Bradbury", "Investiția în călătorii este o investiție în tine. – Matthew Karsten",
        "Lumea este o carte, iar cei care nu călătoresc nu pot citi decât o pagină din ea. - Sfântul Augustin",
        "Călătoriile te transformă într-o persoană modestă. Pentru că îți dai seama de locul mărunt pe care-l ocupi în lume. " +
        "– Gustave Flaubert",
        "Viața este scurtă, iar lumea este mare."];
    document.getElementById("mesaj").innerHTML = mesaje[Math.floor(Math.random()
        * mesaje.length)];


    function mouseOver(x) {
        x.style.backgroundColor = "#87966b";
    }

    function mouseOut(x) {
        x.style.backgroundColor = "#387032";
    }

    document.body.addEventListener("click", function (event) {
            var _p = document.createElement("p");
            document.body.appendChild(_p);
            _p.classList.add("animat");
            var stil = getComputedStyle(_p);
            _p.innerHTML = "Suceava";
            _p.style.position = "absolute";
            _p.style.left = event.clientX - parseInt(stil.width) / 2 + "px";
            _p.style.top = event.clientY - parseInt(stil.height) / 2 + "px";


            document.getElementById("poza_logo").onclick = function (event) {
                event.stopPropagation();
            }
            document.querySelector(".meniu").onclick = function (event) {
                event.stopPropagation();
            }
    })



    /*
    window.onkeydown(event){
        if (localStorage.getItem("check"))
            if (localStorage.getItem("check") === "check2") f2();
            else
                f1();
    }

     */



