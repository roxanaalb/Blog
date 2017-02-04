// global localStorage;
/*global $ */
function Article (options) {
    this.id= options.id;
    this.title= options.title;
    this.content= options.content;
    this.category= options.category;
    this.file= options.file;
    this.created_at= options.created_at;
    
}

Article.prototype.add = function(formData) {
   return  $.ajax({
          url: "https://roxana-roxanaalb.c9users.io/Blog-TemaFinala/api/articles/add" ,
          type: "POST",
          data:formData,
          processData: false,
          contentType: false,
          success: function (resp) {
             
          },
          error: function () {
              alert ("Request invalid!");
          }
       });
};
Article.prototype.editArticle = function () {
    var that = this;
     var dataToSend = {
       title: this.title,
       content: this.content,
       id: this.id,
       created_at: this.created_at
   };
     return $.ajax ({
     url: "https://roxana-roxanaalb.c9users.io/Blog-TemaFinala/api/articles/edit",
    type: "PUT",
    data: JSON.stringify(dataToSend),
    
    success: function (resp) {
    
          var articleToEdit = new Article (resp);
          that.models= [];
          that.models.push(articleToEdit);
    },
    error: function (xhr, status, error) {
        // alert ("Something went wrong!");
        console.log("You can't edit this article: " + status);
    }
    
    });
};
