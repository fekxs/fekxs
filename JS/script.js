function header() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("main-header").innerHTML = this.responseText;
            content("Home",document.getElementById('home_page'))   
        }
    };
    xhttp.open("GET", "Common/Header.html", true);
    xhttp.send();
}

function footer() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("main-footer").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "Common/Footer.html", true);
    xhttp.send();
}
header();
footer();
var prev=0
function content(page,object) {
    if(prev==0){prev=object;object.classList.add("select")}
    else{
        prev.classList.remove("select");
        object.classList.add("select")
        prev=object
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content-body").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "Pages/"+page+".html", true);
    xhttp.send();
}
function open_nav(){
    nav=document.getElementById("nav")
    if(nav.classList.contains("open")){
        nav.classList.remove("open")
    }else{
        nav.classList.add("open")
    }
}
