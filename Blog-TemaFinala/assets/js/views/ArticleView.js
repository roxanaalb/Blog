/* global $, Articles, Comments, Comment */

$(document).ready(onHtmlLoaded);
function onHtmlLoaded() {
    var articleId = getUrlParam("id");

    var article = new Articles();
    var comments = new Comments();


    var articleXhr = article.getArticle(articleId);
    articleXhr.done(function(){
        var articleContainer = $("#js-container");

        var containerBox= $("<div></div>").addClass("container-box");

        var articleBox = $("<div></div>").addClass("article-box");
           containerBox.append(articleBox);

        var textContainer= $("<div article-id=" +article.models[0].id+ ">"+ "</div>").addClass("articleText");
        var dateCreate= $("<p>" + article.models[0].created_at + "</p>").addClass("post-header-home");
        var imageContainer = $("<img>").addClass("articleImage");

           imageContainer.attr("src", "../uploads/" + article.models[0].file);
        var title= $("<p>"+article.models[0].title+"</p>").addClass("post-home-title post-main-home-title");
        var content= $("<p>"+article.models[0].content+ "</p>").addClass("post hentry");
           textContainer.append(dateCreate, title, content);
           articleBox.append(imageContainer, textContainer);
           articleContainer.append(articleBox);

        var commentsXhr = comments.getComments(articleId);
           commentsXhr.done(listComments);
        
        function listComments () {
            var commentBox= $("#commentList").addClass("comments card-panel");
    
            for (var i=0; i<comments.models.length; i++) {
    
                var commentsList= $("<div comment-id=" + comments.models[i].id + ">" + "</div>" );
                var userDetail= $("<p>"+ comments.models[i].user_name + "</p>").addClass("glyphicon glyphicon-user");
                var commentContent = $("<p>" + comments.models[i].content + "</p>");
                var createdAt= $("<p>"+ comments.models[i].created_at + "</p>");
                commentsList.append(userDetail, commentContent, createdAt);
                commentBox.append(commentsList);
            }
        }

       
    });
    
}
    
function getUrlParam(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results==null){
            return null;
        }
        else{
            return results[1] || 0;
        }

}