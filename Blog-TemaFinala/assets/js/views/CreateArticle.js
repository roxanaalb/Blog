/* global $, Article */
$(document).ready(onHtmlLoaded);

function onHtmlLoaded() {
    var articleForm = $('.js-article');
    articleForm.on("submit", function (ev) {
      ev.preventDefault();
       var titleText = $("input[name='title']").val();
       var contentText = $("#content").val();
       var articleImgElem = $("input[name='article_img']");
       var categoryText = $("input[name='category']").val();
       var files = articleImgElem[0].files;
       var articleImg = files[0];
       var formData = new FormData();
       formData.append("title", titleText);
       formData.append("content", contentText);
       formData.append("file", articleImg);
       formData.append("category", categoryText);
       
       
       var article = new Article({
            title:titleText,
            content:contentText,
            image:articleImg,
            category: categoryText,
        });
        var articleXhr= article.add(formData);
        articleXhr.done(function(){
    window.location.href= "https://roxana-roxanaalb.c9users.io/Blog-TemaFinala/templates/9.adminpanel.html" ;       
        });
   
    });
}