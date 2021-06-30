const express=require("express");
const fs=require("fs");
const bodyParser = require("body-parser");
const formidable=require("formidable");
const session = require('express-session');
const app=express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.static("cerere"));

app.set('view engine', 'ejs');
app.use(express.static("resurse"));

app.use(express.static('html'));
app.use(express.static('public'));

console.log("ajunge aici");


// Setam body parser-ul ca sa stie sa citeasca request-urile de tip JSON
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(session({
    secret: 'abcdefg', // folosit pentru criptarea session ID-ului
    resave: true, //sa nu stearga sesiunile idle
    saveUninitialized: false //nu salveaza obiectul sesiune daca nu am setat un camp
}));

app.get("/hello",function(req,res){
    res.send("Hello!");
});
console.log("inainte de login");
app.get('/login', function(req,res){

    res.render('login',{'mesaj': 'Login'});
    console.log("merge1");
});
app.post("/login_post", function(req, res) {

    console.log("merge2");
    var user;
    var form = new formidable.IncomingForm();
    console.log("merge2");

    form.parse(req, function (err, fields, files) {
       // if(err)
            console.log("merge3");
        console.log(fields.username);
        if (fields.username ===  "denisa.predescu@gmail.com" )
            if(fields.parola === "denisa")
                user = "denisa.predescu@gmail.com";//verificarea datelor de login

    if (user) {
        req.session.username = user;//setez userul ca proprietate a sesiunii
        res.redirect('logat');
    } else {
        req.session.username = false;
        res.redirect('/incorect');
    }
    });
});

app.get('/logat', function(req, res) {

    var date=fs.readFileSync("resurse/cerere.json","utf8");
    var pdate=JSON.parse(date);//transform json in javascript
    res.render("logout",{ cerere:pdate,'nume':req.session.username})
   // res.render('logout',{'nume': req.session.username});
});

app.get('/logout', function(req, res) {
    req.session.destroy(); //distrugem sesiunea cand se intra pe
   // pagina de logout
    res.render('login',{'mesaj': 'Login'});
});

app.get('/incorect', function(req, res) {
    res.render('login',{'mesaj': 'Username sau parola gresita'});
});


//app.use("/fisier", express.json());
/*
app.post("/fisier", function(req,res){
    console.log("intra");
    console.log(req.body);
    let fisierOriginal = JSON.parse(fs.readFileSync("resurse/cerere.json", "utf8"));
    console.log(fisierOriginal);
    fisierOriginal.email.push(req.body.email);
    fisierOriginal.pictures.push(req.body.poza);
    fisierOriginal.feedback.push(req.body.feedback);
    fs.writeFileSync("resurse/cerere.json",JSON.stringify(fisierOriginal));
});
*/

app.post("/fisier",function(req,res){
    console.log("intra");
    let fisierOriginal = JSON.parse(fs.readFileSync("resurse/cerere.json", "utf8"));
    console.log(fisierOriginal);

    var form = new formidable.IncomingForm(); //creez ob formular
    form.uploadDir="resurse/poze";
    form.keepExtensions=true;
    form.parse(req,function(err,fields,files){

        var email=fields.email;
        var feedback=fields.feedback;
        var poza=files.poza.path.substring(13);

        fisierOriginal.email.push(email);
        fisierOriginal.pictures.push(poza);
        fisierOriginal.feedback.push(feedback);
        fs.writeFileSync("resurse/cerere.json",JSON.stringify(fisierOriginal));

        console.log("final");
    });
});

console.log("ajunge  si aici");
app.use(function(req,res){
    res.send("Pagina nu exista! Introdu alta ruta");
});

app.listen(63342,function(){console.log("serverul a pornit");})
// Legam aplicatia expressjs de un server HTTP si il pornim pe portul 63342
/*
const server = require("http").Server(app);
server.listen(63342, function(){
    console.log("serverul a pornit");
});

 */
