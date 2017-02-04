/* global $ */
$(document).ready(onHtmlLoaded);
function onHtmlLoaded() {
    var menu = $('#menu');
    var containerMenu= $('<div></div>').addClass("container-fluid");
    var navBar = $('<div></div>').addClass("navbar-header");
    var brand= $('<a></a>').addClass("navbar-brand").html("SOM-School of Make-Up");
    
    navBar.append(brand);
    
    var listMenu= $('<div></div>').addClass("nav navbar-nav menu");
    
    var home= $('<button></button>').html("Home").addClass("navbar-brand menu-list");
    home.on("click", function (){
     window.location.href= "https://roxana-roxanaalb.c9users.io/Blog-TemaFinala/templates/1.home.html";
    });
    var articles= $('<button></button>').html("Articles").addClass("navbar-brand menu-list");
    articles.on("click", function (){
    window.location.href = "https://roxana-roxanaalb.c9users.io/Blog-TemaFinala/templates/9.adminpanel.html";
    });
    var login = $('<button></button>').html("Login").addClass("navbar-brand menu-list");
    login.on("click", function (){
    window.location.href = "https://roxana-roxanaalb.c9users.io/Blog-TemaFinala/templates/6.login.html";
    });
    var contact = $('<button></button>').html("Contact").addClass("navbar-brand menu-list");
    contact.on("click", function(){
    window.location.href = "https://roxana-roxanaalb.c9users.io/Blog-TemaFinala/templates/5.contact.html";
    });
    listMenu.append(home);
    listMenu.append(articles);
    listMenu.append(login);
    listMenu.append(contact);

    containerMenu.append(navBar);
    containerMenu.append(listMenu);
    menu.append(containerMenu);
   
    
}

