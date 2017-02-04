/* global $ */
/* global Articles */
/* global Article */
$(document).ready(onHtmlLoaded);

function onHtmlLoaded() {
    var myId = getUrlParam("id");
    var sendEdit = $('#send');
    var article= new Articles();
    var articleToEdit= article.getArticle(myId);
    articleToEdit.done(function(){
    var titleEdit= $("#title");
    titleEdit.append(article.models[0].title);
    var contentEdit = $("#content");
    contentEdit.append(article.models[0].content);
     sendEdit.on("click", function (ev){
        ev.preventDefault();
    
    var articleEdit = new Article ({
           title: titleEdit.val(),
           content: contentEdit.val(),
           id: myId
    });
      
      var articleEditXhr= articleEdit.editArticle();
      articleEditXhr.done(function(){
       window.location.href="https://roxana-roxanaalb.c9users.io/Blog-TemaFinala/templates/ArticleUser.html?id=" + myId;
      })
     });
    });
    
    function getUrlParam(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
    
}
    
}