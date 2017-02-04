/*global $ */
/*global Article */

function Articles () {
   
    this.models=[];
    this.nrPage=1;
}
Articles.prototype.getAll = function (searchValue, pageValue) {
    var that = this;
   return $.ajax ({
        url: "https://roxana-roxanaalb.c9users.io/Blog-TemaFinala/api/articles",
                
        type: "GET",
        data:{
          search: searchValue,
          page: pageValue
        },
    
   success: function (resp) {
            that.models= [];
            for (var i=0; i<resp.items.length; i++) {
           var article = new Article (resp.items[i]);
           that.models.push(article);
      
            }
            that.nrPage= resp.nrPages;
            
        },
        error: function (xhr, status, error) {
            // alert ("Oops! Something went wrong");
        }
    });
};

Articles.prototype.getArticle = function (articleId) {
    var that = this;
    
    return $.ajax ({
    url: "https://roxana-roxanaalb.c9users.io/Blog-TemaFinala/api/articles/item",
    type: "GET",
    data: {
      id: articleId,  
    },
    
    success: function (resp) {
    
          var selectedArticle = new Article (resp);
           that.models= [];
           that.models.push(selectedArticle);
          
    },
    error: function (xhr, status, error) {
        // alert ("Something went wrong!");
        console.log("You can't load this article: " + status);
    }
    
    });
};

Articles.prototype.deleteArticle = function (articleId) {
    
// var that = this;
     return $.ajax ({
     url: "https://roxana-roxanaalb.c9users.io/Blog-TemaFinala/api/articles/delete",
     type: "DELETE",
     data: JSON.stringify({
      id: articleId,  
    }),
    success: function (resp) {
         console.log("This article was deleted");
          
    },
    error: function (xhr, status, error) {
        // alert ("Something went wrong!");
        console.log("Error! Your article wasn't been deleted: " + status);
    }
    
    });
};





