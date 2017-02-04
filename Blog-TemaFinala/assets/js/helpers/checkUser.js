/* global $ */
function checkUserSession () {
     $.ajax({
        url:"https://roxana-roxanaalb.c9users.io/Blog-TemaFinala/api/users/session",
        type:"GET",
        success:function(resp) {
        
            
        },
        error:function(xhr, status, error) {
            var articleId= getUrlParam("id");
           window.location = "https://roxana-roxanaalb.c9users.io/Blog-TemaFinala/templates/Article1.html?id="+ articleId;
        }
    });

}
checkUserSession();

 function getUrlParam(name){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
            if (results==null){
                return null;
            }
            else{
                return results[1] || 0;
            }
    
    }