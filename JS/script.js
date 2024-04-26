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
    if(page=="Home"){//Home Page doesn't need footer
        document.getElementById("main-footer").style.display="None";
        document.getElementById("content-body").style.height="90%";
        code_write()
    }else{
        document.getElementById("main-footer").style.display="flex";
        document.getElementById("content-body").style.height="85%";
    }
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
    icon=document.getElementById("menu_icon")
    if(nav.classList.contains("open")){
        icon.setAttribute("name", "menu-outline");
        nav.classList.remove("open")
    }else{
        nav.classList.add("open")
        icon.setAttribute("name", "close-sharp");
    }
}

function readmore(){
    read=document.getElementById("home-view")
    more=document.getElementById("more-details")
    feat=document.getElementById("feabox")
    if(read.classList.contains("more")){
        read.classList.remove("more")
        setTimeout(function() {
            feat.classList.remove("open")
          }, 100);
          setTimeout(function() {
            more.style.display="none";
          }, 1000);
    }
    else{
        more.style.display="flex";
        read.classList.add("more")
        setTimeout(function() {
            feat.classList.add("open")
          }, 300);
    }
}

function  code_write(){
    setTimeout(function() {
        var codeline = document.querySelectorAll("#code_lines");
        var total = codeline.length;
        codeline.forEach(function(element, index) {
            setTimeout(function() {
                element.style.opacity = 1;
                if (index === total - 1) {
                     setTimeout(code_clean, 3000);
                }
            }, index * 100); 
        });
      }, 500);
}
function code_clean(codeline){
    var codeline = document.querySelectorAll("#code_lines");
    codeline.forEach(function(element) {
        element.classList.add("shutdown")
    });
    setTimeout(function() {
        codeline.forEach(function(element) {
            element.classList.remove("shutdown")
            element.style.opacity = 0;
        });
        code_write()
    }, 1000);
}


