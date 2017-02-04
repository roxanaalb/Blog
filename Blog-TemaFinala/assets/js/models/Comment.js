/*global $ */
function Comment (options) {
    this.id=options.id;
    this.article_id=options.article_id;
    this.user_id=options.user_id;
    this.user_name=options.user_name;
    this.content= options.content;
    this.created_at= options.created_at;
    
}
Comment.prototype.addComment = function(){
    // var that= this;
  //we are preparing the data to be sent to server    
   var dataComment = {
       article_id: this.article_id,
       user_name: this.user_name,
       content: this.content,
       created_at: this.created_at
   }
   return $.ajax({
        url:"https://roxana-roxanaalb.c9users.io/Blog-TemaFinala/api/comments/add",
        type:"POST",
        data: dataComment,
        success:function(resp){
            console.log("Your comment was successfully added");
            
        },
      error:function(xhr,status,error){
            alert("Your comment hasn't been posted"+status);
        }
    });
};
